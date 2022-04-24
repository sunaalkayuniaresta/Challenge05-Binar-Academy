const { Car } = require('./models')

Car.create({
 name: 'Bayo',
 type: 'Kereta Kudah',
 price: 6985
})
 .then(car => {
   console.log(car)
 })
