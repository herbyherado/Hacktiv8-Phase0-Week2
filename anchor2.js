let nama = 'Herby';
let peran = 'Penyihir';    // input antara tiga peran (Ksatria || Tabib || Penyihir)


if (peran === '' || peran === undefined){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
} 
else if (peran === 'Ksatria'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran === 'Tabib') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
} else if (peran === 'Penyihir'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log(`Peran ${peran} tidak terdaftar, silahkan coba ulang`)
}