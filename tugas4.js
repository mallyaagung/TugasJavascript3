// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
import fetch from 'node-fetch';

const getName = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.map(person => {
                console.log(`Name : ${person.name}`)
            })
        })
        .catch(error => {
            console.log(`Failed`)
        })
}

getName()