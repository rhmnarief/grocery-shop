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

    app.route('/hapusProduk')
        .delete(jsonku.deleteProduk);

    app.route('/tampilPromo')
        .get(jsonku.tampilPromo);

    app.route('/tambahProduk')
        .put(jsonku.tambahProduk);

    app.route('/tambahPromo')
        .post(jsonku.tambahPromo);
}