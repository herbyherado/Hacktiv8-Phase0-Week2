let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(arr){
    for (i = 0, j=0, k=1, l=2, m=3, n=4; i <arr.length; i++){
        console.log(`Nomor ID: ${arr[i][j]}`);
        console.log(`Nama Lengkap: ${arr[i][k]}`);
        console.log(`TTL: ${arr[i][l]} ${arr[i][m]}`);
        console.log(`Hobi: ${arr[i][n]}`);
        console.log();
    }
};

dataHandling(input);




