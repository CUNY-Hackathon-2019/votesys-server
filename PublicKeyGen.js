// import axios from 'axios";

// const bitcoin = require('bitcoinjs-lib');

// var keyPair = bitcoin.ECPair.makeRandom();

// console.log(keyPair.getAddress());

// var address = keyPair.getAddress();

// console.log(keyPair.toWif());

// var pkey = keyPair.toWIF();

/* output:
04d0988bfa799f7d7ef9ab3de97ef481cd0f75d2367ad456607647edde665d6f6
fbdd594388756a7beaf73b4822bc22d36e9bda7db82df2b8b623673eefc0b7495
*/



module.exports = () => {
    
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
// console.log(key); 
const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
return encrypted;
// const decrypted = key.decrypt(encrypted, 'utf8');
// console.log('decrypted: ', decrypted);

}


