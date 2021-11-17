-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Waktu pembuatan: 04 Nov 2021 pada 16.35
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grocerydb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akses_token`
--

CREATE TABLE `akses_token` (
  `id_akses_token` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `access_token` text NOT NULL,
  `ip_address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `akses_token`
--

INSERT INTO `akses_token` (`id_akses_token`, `id_user`, `access_token`, `ip_address`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNTI1MTI2NywiZXhwIjoxNjM1MjUzNjY3fQ.RNXOZgaMOc--U5mfU1l3PCMkVvCL2DK4nryJjnkWYd8', '192.168.43.214'),
(2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNTI1MTMwNCwiZXhwIjoxNjM1MjUzNzA0fQ.5QutVYh1z3S0HOfvFQ3AF-POLVe6fAzptBHCsVpp6Qg', '192.168.43.214'),
(3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNTMwNDc0MywiZXhwIjoxNjM1MzA3MTQzfQ.j5jHtGLEHdQAf8CpGlMgLMdy3TNDd53f8fGdiLXblYw', '192.168.43.214'),
(4, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowLCJ0YWdpaGFuIjowfV0sImlhdCI6MTYzNTM4MjQ1MiwiZXhwIjoxNjM1Mzg0ODUyfQ.ThLL0NrYkJaI67wwRa6hLs2W2sI1cJQBxLrJIK9CLjE', '192.168.43.214');

-- --------------------------------------------------------

--
-- Struktur dari tabel `diskon`
--

CREATE TABLE `diskon` (
  `id_diskon` int(11) NOT NULL,
  `potongan` int(100) NOT NULL,
  `masa_promo` date NOT NULL,
  `id_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `diskon`
--

INSERT INTO `diskon` (`id_diskon`, `potongan`, `masa_promo`, `id_produk`) VALUES
(1, 1000, '2021-10-11', 4),
(2, 500, '2021-10-11', 5),
(3, 100, '2021-10-15', 6),
(4, 250, '2021-10-15', 7),
(7, 11, '2021-10-29', 11);

-- --------------------------------------------------------

--
-- Struktur dari tabel `keranjang`
--

CREATE TABLE `keranjang` (
  `id_keranjang` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `jumlah` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `keranjang`
--

INSERT INTO `keranjang` (`id_keranjang`, `id_user`, `id_produk`, `jumlah`) VALUES
(1, 1, 4, 1),
(2, 1, 2, 3),
(3, 1, 7, 4),
(4, 7, 2, 4),
(5, 1, 2, 4),
(6, 1, 2, 4),
(7, 1, 2, 4),
(8, 1, 2, 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `kuantitas` int(200) NOT NULL,
  `harga` int(200) NOT NULL,
  `nama_produk` varchar(50) NOT NULL,
  `deskripsi` varchar(100) NOT NULL,
  `kategori` enum('Buah dan Sayur','Daging dan Seafood','Produk Cepat Saji','Keperluan Rumah Tangga','Roti dan Kue') NOT NULL,
  `foto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id_produk`, `kuantitas`, `harga`, `nama_produk`, `deskripsi`, `kategori`, `foto`) VALUES
(2, 200, 3000, 'Indomie Goreng 70g', 'Mie Instant Indomie Goreng 70g', 'Produk Cepat Saji', 'indomie-goreng.jpg'),
(3, 200, 2500, 'Indomie Soto Mie 70g', 'Mie Instant Indomie Soto Mie 70 gram', 'Produk Cepat Saji', 'indomie-soto.jfif'),
(4, 100, 49780, 'Ayam Big Broiler 2 UP KG', 'Daging Ayam Utuh yang diambil dari ayam broiler dan masih terdapat bagian jerohan Ayam broiler Sanga', 'Daging dan Seafood', 'ayam.jpg'),
(5, 100, 36570, 'Daging Giling SPC KG', 'Daging sapi pilihan yang digiling dengan mesin penggiling tanpa tulang dan memiliki tekstur yang lem', 'Daging dan Seafood', 'daging-giling.jpg'),
(6, 100, 15650, 'Pisang Cavendist Super 1050 Gr', 'Buah Pisang adalah buah yang dapat dimakan daging Buah-nya dan juga baik untuk kesehatan tubuh anda ', 'Buah dan Sayur', 'pisang.jpg'),
(7, 100, 7560, 'Salak Pondoh Super 425 Gr', 'Buah salak pondoh super adalah buah yang dimakan daging buahnya Buah ini memiliki kulit bersisik dan', 'Buah dan Sayur', 'salak.jfif'),
(11, 200, 3000, 'Mie Sedap Goreng 75g', 'Mie Instant Goreng berat 75 gram', 'Produk Cepat Saji', 'mie-sedap.JFIF'),
(13, 200, 2000, 'Udang 70g', 'Udang fresh ', 'Daging dan Seafood', 'udang.jpg'),
(19, 132131, 21312, 'asdad', 'asda', 'Produk Cepat Saji', '1313.adf');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_keranjang` int(11) NOT NULL,
  `tanggal_transaksi` datetime NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL,
  `tanggal_daftar` date NOT NULL,
  `isVerified` tinyint(4) NOT NULL,
  `tagihan` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `role`, `tanggal_daftar`, `isVerified`, `tagihan`) VALUES
(1, 'andika', 'andika@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0, 0),
(6, 'joko', 'joko@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0, 0),
(7, 'ipung', 'ipung@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0, 0),
(8, 'Member Dani', 'member@gmail.com', '202cb962ac59075b964b07152d234b70', 3, '2020-04-04', 0, 0),
(41, 'ipungdev', 'banyustudio@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 2, '2020-08-05', 1, 0),
(42, 'ipungdev', 'jakarta@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-08-06', 0, 0),
(69, 'keenarstudio', 'ipungofficial@gmail.com', '018513325d2d96b864ce9a7993012b31', 3, '2020-08-06', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akses_token`
--
ALTER TABLE `akses_token`
  ADD PRIMARY KEY (`id_akses_token`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `diskon`
--
ALTER TABLE `diskon`
  ADD PRIMARY KEY (`id_diskon`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indeks untuk tabel `keranjang`
--
ALTER TABLE `keranjang`
  ADD PRIMARY KEY (`id_keranjang`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- Indeks untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `id_keranjang` (`id_keranjang`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akses_token`
--
ALTER TABLE `akses_token`
  MODIFY `id_akses_token` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `diskon`
--
ALTER TABLE `diskon`
  MODIFY `id_diskon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `keranjang`
--
ALTER TABLE `keranjang`
  MODIFY `id_keranjang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `akses_token`
--
ALTER TABLE `akses_token`
  ADD CONSTRAINT `akses_token_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `diskon`
--
ALTER TABLE `diskon`
  ADD CONSTRAINT `diskon_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `keranjang`
--
ALTER TABLE `keranjang`
  ADD CONSTRAINT `keranjang_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `keranjang_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Ketidakleluasaan untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_keranjang`) REFERENCES `keranjang` (`id_keranjang`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
