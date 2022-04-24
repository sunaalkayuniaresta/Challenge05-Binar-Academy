const { Car } = require('./models')

Car.findAll().then(car => console.log(car))

Car.findOne({
    where: { id: 1 }
  })
    .then(car => console.log(car))
