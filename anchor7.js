//--------------------------PSEUDOCODE---------------------------
/* //------------------------TUGAS 1------------------------

SIMPAN angka pada 'angka1'
SIMPAN angka pada 'angka2'
HITUNG 'hasil' dari 'angka1' dikalikan 'angka2'
TULISKAN 'hasil'
*/

/* //------------------------TUGAS 2------------------------

SIMPAN karakter 'Saya Belajar JavaScript!' 
IF karakter adalah 'Saya Belajar JavaScript!'
    TULISKAN 'Pasti Bisa!'
ENDIF
*/

/* //------------------------TUGAS 3------------------------

SIMPAN angka 'angka1'
FOR setiap pertambahan 1 'index' dari 1 sampai dengan 'angka1':
    IF 'index' habis dibagi 3:
        TAMPILKAN 'index'
    ENDIF
ENDFOR
*/
//---------------------------------------------------------------
//------------------------TUGAS 1------------------------
let a = '8';
let b = 9;

let hitung = Number(a) * Number(b);

console.log(hitung)

//------------------------TUGAS 2------------------------
let c = 'Saya Belajar JavaScript!';
if (c == 'Saya Belajar JavaScript!'){
    console.log('Pasti Bisa!')
}

//------------------------TUGAS 3------------------------
let d = 15;
for (i=1 ; i <= d; i++){
    if (i%3 == 0){
        console.log(i)
    }
}