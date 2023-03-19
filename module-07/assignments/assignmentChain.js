data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

function reducer(){
  const oldest = data
    .map(({died, born}) => died - born)
    .filter((age => age >75))
    .reduce((accum,curr) => (accum > curr ? accum : curr));
  return oldest;
}

console.log(reducer());