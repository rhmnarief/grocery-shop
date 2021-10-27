'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Grocery REST API ku berjalan!", res)
};

exports.tampilProduk = function (req, res) {
    connection.query('SELECT * FROM produk',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}
exports.tampilProdukID = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM produk WHERE id_produk = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}


exports.deleteProduk = function (req, res) {
    var id_produk = req.body.id_produk;
    connection.query('DELETE FROM produk WHERE id_produk=? ', [id_produk],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        })
}
exports.cariProduk = function (req, res) {
    var nama = req.body.nama_produk;
    connection.query('SELECT * FROM produk WHERE nama_produk =? ', [nama],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}

exports.tampilPromo = function (req, res) {
    connection.query('SELECT diskon.id_diskon,produk.kategori,  produk.nama_produk, produk.deskripsi , produk.harga, diskon.potongan , diskon.masa_promo FROM produk JOIN diskon WHERE produk.id_produk = diskon.id_produk ORDER BY produk.kategori',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}


exports.tambahProduk = function (req, res) {
    var nama_produk = req.body.nama_produk
    var kuantitas = req.body.kuantitas;
    var deskripsi = req.body.deskripsi;
    var harga = req.body.harga;
    var kategori = req.body.kategori;
    var foto = req.body.foto;

    connection.query('INSERT INTO produk (nama_produk,kuantitas,harga, deskripsi,kategori,foto) VALUES (?,?,?,?,?,?)',
        [nama_produk, kuantitas, harga, deskripsi, kategori, foto],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil Menambahkan Data !", res)
            }
        })

}
exports.tambahPromo = function (req, res) {
    var id_produk = req.body.id_produk
    var potongan = req.body.potongan;
    var masa_promo = req.body.masa_promo;

    connection.query('INSERT INTO diskon (potongan,masa_promo,id_produk) VALUES (?,?,?)',
        [id_produk, masa_promo, id_produk],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil Menambahkan Data !", res)
            }
        })

}