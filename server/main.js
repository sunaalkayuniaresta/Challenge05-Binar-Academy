const express = require('express');
const path = require('path');
const app = express();
const { Car } = require('../models');
const fs = require("fs");
const { readFile } = require('fs').promises;
const ejs = require('ejs');

const multer = require('multer')
// const diskStorage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, path.join(__dirname,'../uploads'))
//   },
//   filename : function(req, file, cb){
//     console.log(file)
//     cb(null, file.fieldname+"-"+ Date.now() + path.extname(file.originalname))
//   } 
// })
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  // konfigurasi penamaan file yang unik
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});


// const upload = multer({storage: diskStorage})

const bodyParser = require('body-parser'); 
const port = process.env.PORT || 8015;
// const PUBLIC_DIRECTORY = path.join(__dirname, 'public');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(PUBLIC_DIRECTORY));
// app.use(express.json());
app.use(bodyParser.json());


// dari chalange sebelumnya
app.use(express.static('public')); 
app.use('/uploads',express.static('uploads'));
// app.use('/public/images', express.static('images'));

app.get('/', async (request, response) => {

    response.send( await readFile('./public/html/index.html', 'utf8') );

});
app.get('/home', async (request, response) => {

    response.send( await readFile('./public/html/index.html', 'utf8') );

});
app.get('/cari', async (request, response) => {

    response.send( await readFile('./public/html/carimobil.html', 'utf8') );

});





// app.get("/", (req, res) => {
//   res.render("main", {
//     name: req.query.name || "Seppu",
//   });
// });

// manggil makar lewat form
app.get("/cars/create", (req, res) => {
  res.render("cars/create");
});

//melakukan makar dari form
app.post("/cars/create", multer({ storage: diskStorage }).single("image")
, (req, res) => {
  console.log(req.body)
  Car.create({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    image: req.file.filename
  })
    .then(() => {
      res.redirect("/cars")
    })
    .catch((err) => {
      res.status(422).json("Can't create car");
    });
});
// nanpil smua mobil
app.get("/cars", (req, res) => {
  Car.findAll(
    {
      order:['id']
    }
  ).then((cars) => {
    res.render("main", {
      cars,
    });
  });
});
//nampil filter mobil bar bar
app.get("/cars/small", (req, res) => {
  Car.findAll(
    {
      where:{type: "small" },
    }
  ).then((cars) => {
    res.render("cars/small/index", {
      cars,
    });
  });
});
app.get("/cars/medium", (req, res) => {
  Car.findAll(
    {
      where:{type: "medium" },
    }
  ).then((cars) => {
    res.render("cars/medium/index", {
      cars,
    });
  });
});
app.get("/cars/large", (req, res) => {
  Car.findAll(
    {
      where:{type: "large" },
    }
  ).then((cars) => {
    res.render("cars/large/index", {
      cars,
    });
  });
});

// GET all cars
// app.get('/cars', (req, res) => {
//  Car.findAll()
//    .then(cars => {
//      res.status(200).json(cars)
//    })
// })

// Get cuman satu car je
app.get('/cars/:id',(req,res)=>{
    Car.findOne({
        where:{id:req.params.id}
    })
    .then(cars => {
      res.render("cars/_id/index", {
           cars,
         });
    })
})

//make a car
// app.post("/cars", (req, res) => {
//   Car.create({
//     name: req.body.name,
//     type: req.body.type,
//     price: req.body.price,
//     image: req.body.image,
//   })
//     .then((car) => {
//       res.status(201).json(car);
//     })
//     .catch((err) => {
//       res.status(422).json("Can't create car");
//     });
// });

//get udpate mobil form
app.get("/cars/:id/update", (req, res) => {
  Car.findOne({
    where:{id:req.params.id}
})
.then(cars => {
  res.render("cars/_id/update", {
       cars,
     });
})
});

//update mobil fo ril
app.post("/cars/:id",(req, res) => {
  console.log(req.body)
  Car.update(
    {
      id: req.body.id,
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => {
      res.redirect("/cars")
    })
    .catch((err) => {
      res.status(422).json("Can't update car");
    });
});

//update mobil
// app.put("/cars/:id", (req, res) => {
//   Car.update(
//     {
//       name: req.body.name,
//       type: req.body.type,
//       price: req.body.price,
//       image: req.body.image,
//     },
//     {
//       where: { id: req.params.id },
//     }
//   )
//     .then((car) => {
//       res.status(201).json(car);
//     })
//     .catch((err) => {
//       res.status(422).json("Can't update car");
//     });
// });
// petrus elegan

// petrus makar
app.get("/cars/delete/:id", (req, res) => {
  Car.destroy({
    where: { id: req.params.id },
  }).then((car) => {
    res.redirect("/cars")
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
