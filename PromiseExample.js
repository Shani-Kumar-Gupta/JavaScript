function promiseA() {
    return new Promise((resolve, reject) => {
        resolve(5);
    })
}

function square(number) {
    return new Promise((resolve, reject) => {
        resolve(number * number);
    })
}


// 1st method to handle Promise

// promiseA().then(data => {
//     square(data).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch((err) => {
//     console.log(err);
// })


// 2nd method to handle Promise using async await

async function test() {
    try {
        const number = await promiseA();
        const data = await square(number);
        console.log(data);
    } catch (err) {
        return Promise.reject(err);
    }
}

test();