const Group =require('./Group');
class GroupHandler{
    constructor(){
        this.groups = [];
    }

    addGroup(roomName){
        this.groups.push(new Group(roomName));
    }

    exists(groupName){
        for(let i = 0; i< this.groups.length; i++){
            if(this.groups[i].name === groupName)
            {
                return true;
            }
        }
        return false;
    }
}

module.exports= GroupHandler;