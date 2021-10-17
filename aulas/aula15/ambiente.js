let num = [5, 8, 2, 9, 3];

console.log('-----------------------------------------------');
console.log(`Nosso vetor é o ${num}`);
console.log(num);
console.log('-----------------------------------------------');
console.log('Adicionando o valor 4 no final do vetor:');
num.push(4);
console.log(num);
console.log('-----------------------------------------------');
console.log('Colocando o vetor em ordem crescente:')
console.log(num.sort());
console.log('-----------------------------------------------');
console.log(`O vetor tem ${num.length} posições(valores)`);
console.log(`O primeiro valor do vetor é ${num[0]} `);
console.log('-----------------------------------------------');
console.log('Buscando o VALOR 8 no vetor:');
let pos = num.indexOf(8)
console.log(`vet[${pos}]`);
console.log('-----------------------------------------------');