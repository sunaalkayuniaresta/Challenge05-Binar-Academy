class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.driver = document.getElementById("form_driver");
    this.tanggal = document.getElementById("form_date");
    this.waktu = document.getElementById("form_time");
    this.penumpang = document.getElementById("form_pass");
    
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    // console.log(this.penumpang.value);
    // console.log(this.driver.value);
    // console.log(this.tanggal.value);
    // console.log(this.waktu.value);
    let d = (this.tanggal.value+"T"+this.waktu.value);
        let formdate = Date.parse(d)
    Car.list.forEach((car) => {
      let penumpang = this.penumpang.value
      let driber = this.driver.value
      if(driber == "true"){
        driber = true
      }else(
        driber = false
      )
      // console.log(car.availableAt)
      
        // let tanggale = new Date(this.tanggal.value);
        
        let asalehe = Date.parse(car.availableAt)

      if (car.available == driber && asalehe >= formdate && car.capacity >= penumpang){
        const node = document.createElement("col");
        // node.className = "card m-5";
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
      // let wagtu = car.availableAt
      // console.log(typeof(this.waktu.value));
      // console.log(typeof(this.tanggal.value));
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }


  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
