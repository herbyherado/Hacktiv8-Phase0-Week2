let input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di bawah.
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

// task 1
function dataHandling2(input){
    // task 2
    input2.splice(1,1,'Roman Alamsyah Elsharawy');      // tambah 'Elsharawy' pada nama
    input2.splice(2,1,'Provinsi Bandar Lampung');       // tambah 'Provinsi' pada Tempat Lahir
    input2.splice(4,0,'Pria');                          // tambah 'Pria' pada index-4
    input2.splice(5,1,'SMA Internasional Metro');       // hilangkan 'membaca' dan tambah 'SMA Internasional Metro' pada akhir array'/ mulai index 5, hilangkan 1, tambahkan 1
    console.log(input);
    
    // task 3
    let bln = input2[3].split('/');
    /* code below converts array of strings into array of number
     bln = bln.map(Number);
     console.log(bln)
    */
    let bulan = Number(bln[1]);
    
    switch (bulan){
        case 01: 
            bulan = 'Januari'; break;
        case 02: 
            bulan = 'Februari'; break;
        case 03: 
            bulan = 'Maret'; break;
        case 04: 
            bulan = 'April'; break;
        case 05: 
            bulan = 'Mei'; break;
        case 06: 
            bulan = 'Juni'; break;
        case 07: 
            bulan = 'Juli'; break;
        case 08: 
            bulan = 'Agustus'; break;
        case 09: 
            bulan = 'September'; break;
        case 10: 
            bulan = 'Oktober'; break;
        case 11: 
            bulan = 'November'; break;
        case 12: 
            bulan = 'Desember'; break;
    }
    console.log(bulan);

    // task 4 - hasil split; lakukan sorting descending array [tahun,tanggal,bulan]
    let sortDescending = bln.sort(function(num1, num2){ return Number(num1) < Number(num2)});
    console.log(sortDescending);    

    // task 5 - adds '-' between date number
    let resort = bln.splice(2,0,bln.shift());
    console.log(bln.join('-'))

    // task 6 - limit name to 15 characters
    let rename = input2[1].slice(0,15);
    console.log(rename);
};

dataHandling2(input2);