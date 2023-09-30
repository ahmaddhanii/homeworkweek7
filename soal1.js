// soal1.js

// Import module bentuk
const shapes = require('./bentuk');

// Menghitung luas dan keliling persegi
const sisiPersegi = 5;
const luasPersegi = shapes.luasPersegi(sisiPersegi);
const kelilingPersegi = shapes.kelilingPersegi(sisiPersegi);

console.log(`Luas Persegi dengan sisi ${sisiPersegi}: ${luasPersegi}`);
console.log(`Keliling Persegi dengan sisi ${sisiPersegi}: ${kelilingPersegi}`);

// Menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;
const luasPersegiPanjang = shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${kelilingPersegiPanjang}`);
