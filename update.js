const { Car } = require('./models')
// Kita lakukan query terhadap artikel
// Artikel tersebut memiliki id yang bernilai 1
const query = {
 where: { id: 1 }
}

Car.update({
 price: 2000
}, query)
 .then(() => {
   console.log("Car berhasil diupdate")
   process.exit()
 })
 .catch(err => {
   console.error("Gagal mengupdate Car!")
 })
