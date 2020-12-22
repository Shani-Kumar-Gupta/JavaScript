function isBreadAvailable(){
    return true;
}

function isEggAvailable(){
    return false;
}

function isAvailable() {
    return new Promise((resolve, reject) => {
        if(isBreadAvailable()){
            resolve("Here is your bread");
        }else if(isEggAvailable()){
            resolve("Here is your Egg");
        }else {
            reject("Egg and Bread both is not available");
        }
    })
}

isAvailable().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})