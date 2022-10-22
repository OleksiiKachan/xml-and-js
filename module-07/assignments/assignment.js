const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const oldest = data
    .map((e) => e.died - e.born)
    .filter((e) => e > 75)
    .reduce((max, e) => e > max ? e : max, 0);
console.log(oldest);