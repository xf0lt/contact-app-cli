const yargs = require('yargs');
const contacts = require('./contacts')
// const chalk = require('chalk')

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP : {
            describe: 'Nomor Hadnphone',
            demandOption: true, 
            type: 'string',
        } ,
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
}).demandCommand();

// menampilkan daftar semua nama & no HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama $ no HP contact',
    handler() {
        contacts.listContact();
    },
});

// menampilkan sebuah detail contact 
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama ',
    builder: {
        nama: {
            describe: 'nama lengkan',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

// menghapus berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama ',
    builder: {
        nama: {
            describe: 'nama lengkan',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});








yargs.parse();





















// const contacts = require('./contacts');

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('masukkan nama anda : ');
//     const email = await contacts.tulisPertanyaan('masukkan email anda : ');
//     const noHP = await contacts.tulisPertanyaan('masukkan No HP anda : ');

//     contacts.simpanContact(nama, email, noHP);
// };

// main();

