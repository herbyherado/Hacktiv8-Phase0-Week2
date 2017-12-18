let hari = 21;          //assign nilai variabel tanggal disini (dengan angka antara 1-31)
let bulan = 1;          //assign nilai variabel bulan disini (dengan angka antara 1-12)
let tahun = 1945;       //assign nilai variabel tahun disini (dengan angka antara 1900-2200)

function bln(bulan){
    switch (bulan){
        case 1: {return 'Januari'; break;}
        case 2: {return 'Februari'; break;}
        case 3: {return 'Maret'; break;}
        case 4: {return 'April'; break;}
        case 5: {return 'Mei'; break;}
        case 6: {return 'Juni'; break;}
        case 7: {return 'Juli'; break;}
        case 8: {return 'Agustus'; break;}
        case 9: {return 'September'; break;}
        case 10: {return 'Oktober'; break;}
        case 11: {return 'November'; break;}
        case 12: {return 'Desember'; break;}
        default: return `error`; break;
    }
}

console.log(`${hari} ${bln(bulan)} ${tahun}`);