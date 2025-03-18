let found_book=false;
let i;
const POS1=[0,-1,1]; //CHANGE HERE: one of the corners of the door relative to the code block
const POS2=[0,3,4]; //CHANGE HERE: the other corner
const PASSWORD="password" //CHANGE HERE: set your password; don't be too long or else it's not gonna work
for(i=0;i<45;i++) {
    let item=api.getItemSlot(myId, i);
    if(item!==null && item.name==="Book"){
        found_book=true;
        if(item.attributes.customAttributes.pages[0]===PASSWORD) {
            api.sendMessage(myId, "password is correct, opening the door....", {color:"#00FF00"});
            open_the_door();
        } else {
            api.sendMessage(myId, "Incorrect password. Got more than one book in your inventory?", {color:"red"});
            close_the_door();
        }
        break;
    }
}
if(!found_book) {
    api.sendMessage(myId, "No book found in your inventory", {color:"red"});
    close_the_door();
}
function open_the_door() {
    let [pos1,pos2]=get_door_coords();
    api.setBlockRect(pos1,pos2,"Air");
}
function close_the_door() {
    let [pos1,pos2]=get_door_coords();
    api.setBlockRect(pos1,pos2,"Block of Iron");
}
function get_door_coords() {
    let pos1=POS1.map((a,i)=>a+thisPos[i]);
    let pos2=POS2.map((a,i)=>a+thisPos[i]);
    return [pos1,pos2];
}
