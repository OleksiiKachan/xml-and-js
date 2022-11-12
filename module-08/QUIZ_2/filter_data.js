const trips = [
    
    { trips: 250, name: "John Doe" },
    { trips : 2, name: "Muhammad" },
    { trips : 100, name: "Hussain" },
    

];  


const total_trips = total_trips.reduce((acc,  total_trips ) => {
    total_trips = (250+2+100)
    if (acc == total_trips) {

        return  acc
    }
    else {
        return "Error";
    }

 },0);
  
 console.log( total_trips );
  