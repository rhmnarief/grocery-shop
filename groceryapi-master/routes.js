'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilProduk')
        .get(jsonku.tampilProduk);

    app.route('/search/:nama')
        .get(jsonku.cariProduk);

    app.route('/tampilProduk/:id')
        .get(jsonku.tampilProdukID);

    app.route('/rekomendasi/:kategori')
        .get(jsonku.rekomendasiProduk);

    app.route('/hapusProduk')
        .delete(jsonku.deleteProduk);

    app.route('/tampilPromo')
        .get(jsonku.tampilPromo);

    app.route('/tambahProduk')
        .put(jsonku.tambahProduk);

    app.route('/ubahProduk')
        .post(jsonku.ubahProduk);

    app.route('/tambahPromo')
        .post(jsonku.tambahPromo);

    app.route('/masukKeranjang')
        .put(jsonku.tambahKeranjang);

    app.route('/tambahAlamat')
        .put(jsonku.tambahAlamat);

    app.route('/ubahAlamat')
        .post(jsonku.updateAlamat);

    app.route('/alamat/:id_user')
        .get(jsonku.lihatAlamat);

    app.route('/transaksi')
        .put(jsonku.transaksi)

    app.route('/sendInvoice')
        .put(jsonku.invoice)
    
    app.route('/tampilSemuaInvoice')
        .get(jsonku.getAllInvoice)

    app.route('/tampilSemuaInvoice/:id_user')
        .get(jsonku.getInvoice)

    app.route('/tampilSemuaInvoice')
        .get(jsonku.getAllInvoice)

    app.route('/detailInvoice/:id_transaksi')
        .get(jsonku.getDetailInvoice)

    app.route('/updateStatus')
        .post(jsonku.updateStatusInvoice)

    app.route('/lihatTransaksi/:id_user')
        .get(jsonku.getTransaction)
}