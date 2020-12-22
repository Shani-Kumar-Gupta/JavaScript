function isBreadAvailable() {
    return true;
}

function isEggAvailable() {
    return false;
}

function isAvailable() {
    return new Promise((resolve, reject) => {
        if (isBreadAvailable()) {
            resolve("Here is your bread");
        } else if (isEggAvailable()) {
            resolve("Here is your Egg");
        } else {
            reject("Egg and Bread both is not available");
        }
    })
}


// 1st method to handle Promise:::::::::::::

// isAvailable().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


// 2nd method to handle Promise::::::::::::
async function final() {
    try {
        const myData = await isAvailable();
        console.log(myData, 'called after bring bread');
        return myData;
    } catch (err) {
        return Promise.reject(err);
    }
}

final().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})