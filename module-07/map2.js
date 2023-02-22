const officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" },
  ];
  
  console.log(`Source:`);
  console.log(officers);

  //map to display number (shorter function)
  const ids = officers.map(({ id }) => id) 
  console.log(ids);
  
  //map to display number
  const ids2 = officers.map(({ name, id }) => {
    const [firstName, lastName] = name.split(` `);

    return {
        id,
        firstName,
        lastName
    };
  });
  console.log(ids2);