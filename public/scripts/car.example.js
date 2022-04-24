class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    
      <div class="card h-100" style="border : none;">
      <div class="d-flex justify-content-center">
      <img class="card-img-top center-cropped m-1" src="${this.image}" alt="${this.manufacture}">
       </div>
      <div class="card-body mb-3">
        <h5 class="card-title"><b>${this.manufacture} ${this.model}</b></h5>
        <p><b>${this.rentPerDay}</b>/Day</p>
        <p>${this.description}</p>
        <p><i class="bi bi-people-fill"></i> ${this.capacity}</p>
        <p><i class="bi bi-gear-fill"></i> ${this.transmission}</p>
        <p><i class="bi bi-calendar-check-fill"></i> ${this.year}</p>
      </div>
      <div class="d-grid gap-2 mb-2">
  <button class="btn btn-success" type="button">Pilih Mobil</button>
</div>
        </div>
        
      
    `;
  }
}
