//------------------------TUGAS 1------------------------
let total = 0;
for (index = 1; index <=100; index++ ){
    if (index%2 != 0){
        total += index;
    } else if (index%2 == 0){
        total -= index;
    }
}
console.log(`TOTAL: ${total}`)

//------------------------TUGAS 2------------------------

let pagar = '';
for (index1=1; index1 < 10; index1++){
    for (index2=0; index2 < 10; index2++){
        pagar += '#';
    }
    console.log(pagar);
    pagar = '';
} 

//------------------------TUGAS 3------------------------

let bintang = '';
for(index1=1; index1 < 10; index1++){
    for(index2=0; index2 < index1; index2++){
        bintang += '*'
    }
    console.log(bintang);
    bintang = '';
}