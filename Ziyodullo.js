class Phone {
    constructor(name, camera, battery, price) {
      this.camera = camera;
      this.battery = battery;
      this.price = price;
      this.name = name;
    }
  }
  class Samsung extends Phone {
    constructor(name, camera, battery, price, display) {
      super(name, camera, battery, price);
      this.display = display;
    }
  }
  class Iphone extends Phone {
    constructor(name, camera, battery, price, design) {
      super(name, camera, battery, price);
      this.design = design;
    }
  }
  class Xiomi extends Phone {
    constructor(name, camera, battery, price, hardware) {
      super(name, camera, battery, price);
      this.hardware = hardware;
    }
  }
  const s24Ultra = new Samsung(
    "Samsung Galaxy S24 Ultra",
    "Main camera:50MP,zoom:100X,photo and video quality:super",    
    "5000 mAh",
    "1000$",
    "Dynamic Amoled 2x"
  );
  const iphone16promax = new Iphone(
    "Iphone 16 ProMax",
    "Main camera:48MP,zoom:25X,photo and video quality:super",  
    "4685 mAh",
    "1200$",
    "super"
  );
  const xiomi14pro = new Xiomi(
    "Xiomi 14 Pro",
    "Main camera:50MP,zoom:30x,photo and video quality:super",
    "4880 mAh",
    "700$",
    "Qualcomm Snapdragon 8 Gen 3 (4nm)"
  );
  console.log(s24Ultra);
  console.log(iphone16promax);
  console.log(xiomi14pro);