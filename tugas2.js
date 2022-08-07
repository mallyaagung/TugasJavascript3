//Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

const getMonth = () => {
    setTimeout(() => {
        let ambilData = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        if (ambilData) {
            showMonth(month)
        } else {
            showMonth(new Error('Sorry Data Not Found', []))
        }
    }, 1000)
};

const showMonth = (bulan) => {
    bulan.map(item => { console.log(item) });
    return thisMonth(bulan)
}

const thisMonth = (bulanIni) => {
    let d = new Date();
    let monthName = bulanIni[d.getMonth()];
    console.log(`\nBulan ini adalah bulan ${monthName}`)
}

getMonth()
