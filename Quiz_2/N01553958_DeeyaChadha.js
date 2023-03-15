const passengers_data = {
    passengers: {
        TotalPassengers: 118972,
        TotalPages: 11898,
      data: {
        passenger: [
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "John Doe",
            trips: 250,
            airline: {
              country: "Taiwan",
              established: 1989,
              head_quaters:
                "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
              id: 5,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
              name: "Eva Air",
              slogan: "Sharing the World, Flying Together",
              website: "www.evaair.com",
            },
          },
          {
            name: "Muhammad",
            trips: 2,
            airline: {
              country: "Singapore",
              established: 1947,
              head_quaters: "Airline House, 25 Airline Road, Singapore 819829",
              id: 2,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
              name: "Singapore Airlines",
              slogan: "A Great Way to Fly",
              website: "www.singaporeair.com",
            },
          },
          {
            name: "Muhammad",
            trips: 2,
            airline: {
              country: "Singapore",
              established: 1947,
              head_quaters: "Airline House, 25 Airline Road, Singapore 819829",
              id: 2,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
              name: "Singapore Airlines",
              slogan: "A Great Way to Fly",
              website: "www.singaporeair.com",
            },
          },
          {
            name: "Hussain",
            trips: 100,
            airline: {
              country: "Singapore",
              established: 1947,
              head_quaters: "Airline House, 25 Airline Road, Singapore 819829",
              id: 2,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
              name: "Singapore Airlines",
              slogan: "A Great Way to Fly",
              website: "www.singaporeair.com",
            },
          },
        ],
      },
    },
  };
  
  const passenger_list = passengers_data.passengers.data.passenger;
  const passenger_Total_Trips = passenger_list.reduce(
    (_TotalTrips, passenger_list) => {
      return _TotalTrips + passenger_list.trips;
    },
    0
  );
  
  console.log("Total trips by all the passangers is " + String(passenger_Total_Trips));
  