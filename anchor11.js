let nama, peran;
let tahunLahir = 1991;
let umur = 2017 - tahunLahir;

let playerHealth = tahunLahir * Math.random();
let monsterHealth = tahunLahir * Math.random();
let kodeMonster = Math.floor(Math.pow(100, Math.random()));

// input pada kode dibawah, contoh: jobSelect('namaKamu', 'peran')
// input antara tiga pilihan peran (Ksatria || Tabib || Penyihir)
// jika nama & peran kosong, maka peran anda menjadi Kacung!
jobSelect('','');

function jobSelect(nama,peran){
    if ((peran === '' || peran === undefined) && nama !== ''){
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
    } else if (nama !== '' && peran === 'Ksatria'){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
        console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
        play(nama,peran);
    } else if (nama !== '' && peran === 'Tabib' ) {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
        console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
        play(nama,peran);
    } else if (nama !== '' && peran === 'Penyihir'){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
        console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
        play(nama,peran);
    } else {
        peran = 'Kacung';
        console.log(`Selamat datang di Dunia Proxytia!`)
        console.log(`Peran anda adalah ${peran}!`)
        play(nama,peran);
    }

    function play(nama,peran){
        for (i=0; i <= tahunLahir; i++){
            if (i % umur == 0){
                console.log(`${peran} ${nama} menyerang monster!`);
                monsterHealth -= umur;
            } else if (i % kodeMonster == 0){
                console.log(`monster menyerang ${peran} ${nama}!`);
                playerHealth -= kodeMonster;
            } else if ((i % umur == 0) && (i % kodeMonster == 0)){
                console.log(`Health keduanya bertambah`);
                playerHealth += kodeMonster;
                monsterHealth += umur;
            }
        }
    
        if (playerHealth > monsterHealth){
            console.log(`Selamat, ${peran} ${nama} memenangkan pertarungan!`)
        } else {
            console.log(`Sayang sekali, ${peran} ${nama} dikalahkan monster...`)
        }
    }
}

// console.log(`Player Health: ${playerHealth}`);
// console.log(`Monster's Health: ${monsterHealth}`);
// console.log(`Monster's Code: ${kodeMonster}`)
// console.log(`Umur: ${umur}`)