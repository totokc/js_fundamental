//const cars = ["Toyota", "Mitsubishi", "Honda", "Suzuki", "Aston", "Ferrarri"];
//for (let a = 0; a < cars.length; ) {
//    console.log('${cars(a)} is a great car!');
//}

const carsInfo = [
    {
        brand: "Suzuki",
        type: "Ertiga",
        year: 2017,
        category: "MPV"
    }, {
        brand: "Misubishi",
        type: "Mirage",
        year: 2015,
        category: "Small Hatchback"
    }, {
        brand: "Honda",
        type: "Jazz",
        year: 2012,
        category: "Hatchback"
    }, {
        brand: "Totota",
        type: "Yaris",
        year: 2014,
        category: "Hatchback"
    }, {
        brand: "Honda",
        type: "Civic",
        year: 2018,
        category: "Sedan"
    }]
    //map
    carsInfo.map((mobils, idx) => {
        console.log(`${mobils.category}`)

        console.log("==================")
    })

    //for-loop
    for (let b = 0; b < carsInfo.length; b++) {
        console.log(`${carsinfo[b].category}`);
    }
