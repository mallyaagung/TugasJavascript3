// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
function diceToss() {
    return Math.floor(Math.random() * 6) + 1;
}
const promise = new Promise((resolve, reject) => {
    let angka = diceToss();
    if (angka === 6) {
        resolve(angka);
    } else {
        reject(angka);
    }
});

promise.then((toss) => {
    console.log('Yay, threw a ' + toss + '.');
}).catch((toss) => {
    console.log('Oh, noes, threw a ' + toss + '.');
});


//2.
// let hitungLuas = (shape, values) => {
//     return new Promise((resolve, reject) => {
//         switch (shape) {
//             case 'persegi':
//                 resolve(values[0] * values[0]);
//                 break;

//             case 'persegi panjang':
//                 resolve(values[0] * values[1]);
//                 break;

//             case 'segitiga':
//                 resolve((values[0] * values[1]) / 2)
//                 break;

//             default:
//                 reject(`Nama bangun tidak ditemukan`)
//                 break;
//         }
//     })
//         .then(res => {
//             console.log(`Luas ${shape} adalah ${res}`)
//         }).catch(err => {
//             console.log(err)
//         })
// }

// hitungLuas('persegi panjang', [4, 5])



