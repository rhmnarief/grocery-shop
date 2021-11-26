'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok("Aplikasi Grocery REST API ku berjalan!", res)
};

exports.tampilProduk = (req, res) => {
    connection.query('SELECT * FROM produk',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}
exports.tampilProdukID = (req, res) => {
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

exports.deleteProduk = (req, res) => {
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

exports.cariProduk = (req, res) => {
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

exports.rekomendasiProduk = (req, res) => {
    var kategori = req.body.kategori;
    connection.query('SELECT * FROM produk WHERE kategori = ?', [kategori],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}

exports.tampilPromo = (req, res) => {
    connection.query('SELECT diskon.id_diskon,produk.kategori,  produk.nama_produk, produk.deskripsi , produk.harga, diskon.potongan , diskon.masa_promo FROM produk JOIN diskon WHERE produk.id_produk = diskon.id_produk ORDER BY produk.kategori',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}


exports.tambahProduk = (req, res) => {
    const { nama_produk, kuantitas, harga, deskripsi, kategori, foto } = req.body;
    connection.query('INSERT INTO produk (nama_produk,kuantitas,harga, deskripsi,kategori,foto) VALUES (?,?,?,?,?,?)',
        [nama_produk, kuantitas, harga, deskripsi, kategori, foto],
        function (error, rows, fields) {
            if (error) console.log(error)
            else response.ok("Berhasil Menambahkan Data !", res)
        })

}
exports.tambahPromo = (req, res) => {
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

exports.ubahProduk = (req, res) => {
    var nama_produk = req.body.nama_produk
    var kuantitas = req.body.kuantitas;
    var deskripsi = req.body.deskripsi;
    var harga = req.body.harga;
    var kategori = req.body.kategori;
    var foto = req.body.foto;
    var id_produk = req.body.id_produk;

    connection.query('UPDATE produk SET nama_produk=? ,kuantitas=?, harga=?, deskripsi= ?,kategori= ?,foto=? WHERE id_produk = ? ',
        [nama_produk, kuantitas, harga, deskripsi, kategori, foto, id_produk],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        })
}

exports.tambahKeranjang = (req, res) => {
    var jumlah = req.body.jumlah
    var id = req.body.id_user
    var id_produk = req.body.id_produk
    connection.query('INSERT INTO keranjang ( id_user, id_produk, jumlah) VALUES (?,?,?) ', [id, id_produk, jumlah],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok('berhasil menambah keranjang !', res)
            }
        }
    )
}

exports.lihatAlamat = (req,res) => {
    let id_user = req.params.id_user;
    connection.query('SELECT * FROM alamat WHERE id_user =?', [id_user],
    function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}

exports.transaksi = (req, res) => {
    const { id, totalProduct } = req.body;
    const id_transaksi = `${id}${new Date().toLocaleString().replace(/[^\d]/g,"")}`

    let isSuccess = 0

    totalProduct.forEach((product, idx) => {
        const {id_produk, jumlah} = product
        connection.query('INSERT INTO transaksi (id_produk, jumlah, id_user, id_transaksi) VALUES (?,?,?,?)', 
        [id_produk, jumlah, id, id_transaksi],
        function(error, rows, fields){
            if (error) console.log(error)
            else isSuccess++
        })
    })

    if (isSuccess === totalProduct.length){
        response.ok('Berhasil Menambahkan Transaksi !', res)
    }

}

exports.invoice = (req, res) =>{
    const {cart, id} = req.body;
    const status = false;
    const transaksi_date = new Date()
    const id_transaksi = `${id}${new Date().toLocaleString().replace(/[^\d]/g,"")}`

    connection.query('INSERT INTO invoice (id_transaksi, transaksi_date ,total, id_user, status) VALUES (?,?,?,?,?)',
    [id_transaksi, transaksi_date, cart, id, status],
    function(error, rows, fields){
        if (error) {
            console.log(error)}
        else{
            response.ok('Transaksi Berhasil', res)
        }
    })
}

exports.getInvoice =(req, res) =>{
    let id_user = req.params.id_user;
    connection.query('SELECT * FROM invoice WHERE invoice.id_user = ? ', [id_user],
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })

}
exports.getAllInvoice = (req,res) => {
    connection.query('SELECT invoice.id_invoice, invoice.id_transaksi, invoice.total, invoice.transaksi_date, invoice.status, alamat.firstname , alamat.lastname ,alamat.payment, alamat.city , alamat.zip, alamat.address FROM invoice JOIN alamat WHERE invoice.id_user = alamat.id_user;',
    function(error,rows,fields) {
        if(error){
            console.log(error)
        }
        else{
            response.ok(rows, res)
        }  
    })
}

exports.getDetailInvoice = (req,res) => {
    const id_transaksi = req.params.id_transaksi;
    connection.query('SELECT transaksi.jumlah , transaksi.id_user, transaksi.id_produk, transaksi.id_transaksi, transaksi.id, produk.nama_produk, produk.harga, produk.foto FROM transaksi JOIN produk WHERE transaksi.id_produk = produk.id_produk AND transaksi.id_transaksi = ?', [id_transaksi],
    function(error,rows,fields) {
        if(error){
            console.log(error)
        }
        else{
            response.ok(rows, res)
        }  
    })
}

exports.updateStatusInvoice = (req,res) => {
    const {changeStatus} = req.body;
    console.log(changeStatus)
    // connection.query('UPDATE invoice SET status = ? WHERE id_invoice = 6', [stat],
    // function(error,rows,fields) {
    //     if(error){
    //         console.log(error)
    //     }
    //     else{
    //         response.ok('berhasil merubah data alamat!', res)
    //     }  
    // })
}



exports.tambahAlamat = (req,res) => {
    const {firstname, lastname, address, city, states, zip, email, phone, id_user, additional, payment} = req.body;
    
    connection.query('INSERT INTO alamat (firstname,lastname,address,city,states,zip,email,phone,id_user,additional,payment) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 
    [firstname, lastname, address, city, states, zip, email, phone, id_user, additional, payment],
    function(error,rows,fields){
        if(error) console.log(error) 
        else response.ok('berhasil menambah data alamat!', res)
    })
}

exports.updateAlamat = (req,res) => {
    const {firstname, lastname, address, city, states, zip, email, phone, id_user, additional, payment} = req.body;
    connection.query('UPDATE alamat SET firstname = ?,lastname = ?,address= ?,city= ?,states = ?,zip = ?, email = ?,phone= ?, additional = ?, payment= ?  WHERE id_user =? ', 
    [firstname, lastname, address, city, states, zip, email, phone, additional, payment, id_user],
    function(error,rows,fields){
        if(error) console.log(error) 
        else response.ok('berhasil merubah data alamat!', res)
    })

}

exports.getTransaction = (req,res)=>{
    const id_user = req.params.id_user
    connection.query('SELECT transaksi.id_produk, transaksi.id_user, transaksi.id_transaksi, transaksi.jumlah, produk.nama_produk, produk.harga, produk.foto FROM transaksi, produk WHERE transaksi.id_produk = produk.id_produk AND transaksi.id_user =? ',[id_user],
    function(error,rows,fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}