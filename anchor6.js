// 1. Perulangan 1-100; Penambahan ++; dengan tulisan ganjil/genap
for (counter=1; counter <= 100; counter++){
    // uncomment line 4 below to check counter
    // console.log(`Saat ini counter adalah ${counter}`)
    if (counter%2 == 0){
       console.log('Genap')
   } else {
       console.log('Ganjil')
   }   
}

console.log('')
// 2. Counter Kelipatan 3
for (counter=1; counter <= 100; counter+=2){
    if (counter % 3 == 0){
        console.log(`${counter} KELIPATAN 3`);
    }
}
console.log('')
// 3. Counter Kelipatan 5
for (counter=1; counter <= 100; counter+=5){
    if (counter % 6 == 0){
        console.log(`${counter} KELIPATAN 6`);
    }
}
console.log('')
// 4. Counter Kelipatan 10
for (counter=1; counter <= 100; counter+=9){
    if (counter % 10 == 0){
        console.log(`${counter} KELIPATAN 10`);
    }
}