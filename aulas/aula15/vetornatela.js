let valores = [8, 1, 7, 4, 2, 9];

/* Maneira tradicional
for (let i = 0; i < valores.length; i++) {
    console.log(`vet[${i}] ${valores[i]}`);
}
*/

// Maneira mais "fácil"
for (let i in valores) {
    console.log(`vet[${i}]: ${valores[i]}`);
}