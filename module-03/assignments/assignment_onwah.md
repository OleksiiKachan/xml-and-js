# Assignment

1) In creating the XSD
- All the elements that contains another element, or attribute(s) were considered as complex elements and so they were all defined as complex elements. 
- All the other elements were defined as simple elements.
- All the simple elements are defined as having string data type, because they all contain standard characters, except the `price` element, which was defined as decimal data type, because it has numbers separated by a decimal.
- All the elements that appear multiple times had maxOccurs as “unbounded” since they appear more than once in the document.
- All the attributes are declared as string, since they are all standard characters.
     ![image info](xsdvalid.jpg)



2) In creating the DTD
- All the elements that had a child element inside had a cardinality of `+` assigned to them. 
- Also, elements that appear more then once had  a cardinality of `+` assigned to them.
- All the attributes where declared as `CDATA` since they are just regular characters, except the `product_id` and `gender`
    - `product_id` was declared as `ID`, I considered it to be a unique identifier, since multiple product cannot have the same product ID.
    - `gender ` was decleared as Enumeration, as there are only 3 currently known ways to declear gender.
![image info](dtdvalid.jpg)