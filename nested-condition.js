var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 140;
var packedWell = false;

if (danishPrice < myBudget) {
    console.log('Danish khabo');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butterban Khabo');
}
else if (toastBiscuitPrice < myBudget) {
    console.log('Biscuit khabo');
}
else {
    console.log('batash khaite hobe');
}
//  ------------------------

if(danishPrice < myBudget){
    if(packedWell == true){
        console.log('danish khabo')
    }
    else{
        console.log('danish khawa jabe na')
    }
}

