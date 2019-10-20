const router = require('express').Router();
const voters = require('../database/models/voters')
const bcrypt = require('bcrypt')

router.get('/all', (req, res) => {
    voters.findAll()
    .then(voters_ => res.status(200).json(voters_))
    .catch(err => console.log(err))
})

router.put('/auth', async (req, res) => {
    const data = req.body
    const user = await voters.findOne({
        where: {
            email: data.email
        }
    })
    if (user) {
        bcrypt.compare(data.password, user.password, (err, res_) => {
            if (res_) {
                res.send(user)
            }
            else {
                res.send("Wrong password.")
            }
        })
    }
    else {
        res.status(404).send("User not found.")
    }
})

router.post('/register', async (req, res) => {
    //console.log(req)
    const data = req.body
    const password_ = await bcrypt.hash(data.password, 10).then(pass => pass)
    const pkGen = require('../PublicKeyGen');
    const pk = pkGen(); //generate random public key
    let buildAccount = await voters.create({
        idNumber: data.idNumber,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        img: data.img,
        pk: pk,
        password: password_
    })
    .then(res_ => {
        console.log("User added.")
        res.send(res_)
    })
    .catch(err => {
        console.log("ERROR: ", err)
        res.send(err)
    })
})

module.exports = router;
