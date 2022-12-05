const data = {
  data: [
    {
      trips: 250,
    },
    {
      trips: 250,
    },
    {
      trips: 250,
    },
    {
      trips: 250,
    },
    {
      trips: 250,
    },
    {
      trips: 250,
    },
    {
      trips: 250,
    },
    {
      trips: 2,
    },
    {
      trips: 2,
    },
    {
      trips: 100,
    },
  ],
};

const total = data.data.reduce((acc, { trips }) => acc + trips, 0);

console.log(total);
