const officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" },
  ];

  console.log(officers);

  const id_1 = officers.map ((item) => item.id_1);

  console.log(id_1);

  //Destructioring the object:
  const id_2 = officers.map (({id}) => id_2);

  console.log(id_2);