const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
            let cek = dataDay.find((item) => {
                return item === day
            })
            let index = dataDay.findIndex((elemen) => {
                return elemen === day
            })
            if (cek !== undefined && index < 4) {
                resolve(cek)
            } else if (index > 4) {
                reject(new Error('Bukan hari kerja'))
            }
        })
    })
        .then((msg) => {
            console.log(`Succes : ${msg} adalah hari kerja`)
        }).catch((error) => {
            console.log(`${error.name}: ${day} ${error.message}`)
        })
}

const cekData = (day) => {
    try {
        if (day == "") throw `data kosong`
        if (typeof day !== "string") throw `data bukan string`
    } catch (err) {
        console.log(`Maaf ${err}`)
    }
}

const tampilData = (day, checkDay, validasi) => {
    validasi(day);
    checkDay(day);
}

tampilData("senin", cekHariKerja, cekData)
tampilData("minggu", cekHariKerja, cekData)
// tampilData("", cekHariKerja, cekData)
// tampilData(123, cekHariKerja, cekData)