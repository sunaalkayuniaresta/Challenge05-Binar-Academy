## Challange 5

Car Management Dashboard
Kelompok 1 FSW 9
Anggota :

- Suna Alkayuni A
- Farhan septiadi
- Adi Wahyudi
- Bintang Selviana
- Karolina Eka P
- Lastri
  Fasil : Kak alma

# NOTICE

Web app ada di branch master di repository ini
Ubah dulu password db config dengan password masing masing
pastikan sudah sama nama db nya yaitu : db_cars_development
(optional) jalankan dulu migration npx sequelize-cli db:migrate

# API

- Halaman Index (GET) = http://localhost:8015/
- Halaman Car Management Dashboard (GET), get all car= http://localhost:8015/cars , diakses dari index lewat tombol register, muncul modal, klik admin masuk sini
- Halaman Create Car (GET)= http://localhost:8015/cars/create , untuk mendapatkan halaman buat form car
- Form action untuk menambah car baru (POST) = /cars/create
- Halaman Update Car (GET)= http://localhost:8015/cars/:id/update, untuk mendapatkan halaman update informasi car berdasarkan id car yang sudah dipilih di halaman car
- form action untuk melakukan update terhadap data salah satu cars berdasarkan id (POST) : /cars/id
- Menampilkan hasil filter small (GET) : http://localhost:8015/cars/small
- Menampilkan hasil filter Medium (GET) : http://localhost:8015/cars/medium
- Menampilkan hasil filter Large (GET) : http://localhost:8015/cars/large
- Hapus Car (GET): /cars/delete/:id

# ERD dan Database

![WhatsApp_Image_2022-04-24_at_22.11.46](/uploads/e770f6ae7a827165e9cfa8efe7720ace/WhatsApp_Image_2022-04-24_at_22.11.46.jpeg)

[ch-5.sql](/uploads/e91e9299ac934b451880b86f2218f510/ch-5.sql)
