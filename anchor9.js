//------------------------TUGAS 1------------------------

let nama;
let angkaPembilang;
let angkaPenyebut;
let hasilBagi = angkaPembilang / angkaPenyebut;
console.log(`Halo ${nama}, ${angkaPembilang} dibagi ${angkaPenyebut} adalah sama dengan ${hasilBagi}`);

//------------------------TUGAS 2------------------------

let alas;
let tinggi;
let luasSegitiga = alas * tinggi / 2;
console.log(`Luas Segitiga: ${luasSegitiga}`)

//------------------------TUGAS 3------------------------

let tahun;
if (tahun % 4 == 0){
    if (tahun % 100 != 0){
        console.log(`${tahun} adalah tahun kabisat`)
    } else {
        if (tahun % 400 == 0){
            console.log(`${tahun} adalah tahun kabisat`)
        } else {
            console.log(`${tahun} adalah bukan tahun kabisat`)
        }
    }
} else {
    console.log(`${tahun} adalah bukan tahun kabisat`)
}