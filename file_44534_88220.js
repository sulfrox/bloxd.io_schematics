onPlayerJoin=(id)=>{

api.applyEffect(id,"Test subject-1000",null,{icon:"Moonstone"})
api.sendTopRightHelper(id,"hammer","WELCOME TO CODING_TEST",{duration:15})
if(api.getPlayerDbId(id)==="UTzseDli22lkrQbws5a73") {
        //is SHADOW_WARRIOR45
        api.broadcastMessage("owner is online", {color: "#90D5FF"});
} else {
        api.sendMessage(id, "your db id is:"+api.getPlayerDbId(id))
}

}
