`XML file creation from JSON`

- Me and Anna worked on it together
- All id data was added as attributes to corresponding elements
- `banks` - main element this contains multiple `bank`  elements
- each `bank` has `name` `address` and `clients`
- `address` element is a combination of `street`, `city`, `region` and `country` elements
- `clients` has multiple `client` elements with each `client` having `firstName`, `lastName`, `email`, `phoneNumber` and `cards`
- `cards` contain multiple `card` with each having `type` , `cvv` and `expiresAt`


`XSL` 

The XML is rendered as shown below:

![image info](./bank-xsl.png)

`Main table`   
- Bank id, name, address and clients as columns  

`A subtable`   
- for each bank's clients with id,name, email, phonenumber and cards  

`Another subtable inside the above subtable`   
- to render number, type, cvv and expiresAt for each card

`XML data loaded into HTML`

The XML is rendered as shown below after loading it and creating an HTML and styled using CSS:

![image info](./bank-html.png)


`Main ordered list`     
- Bank id, name, address  

`A table`   
- for each bank's clients with its id,name, email, phonenumber and cards  

`Another unordered list inside the above table`   
- to render number, type, cvv and expiresAt for each card

bank.css file has the styles added

Each bank element is parsed first 
While parsing bank, clients are parsed as an array of objects and each client's cards data is also parsed ( again as an array of objects ).

After parse of bank data, the li tag for each bank is created and appended. While doing this, a method to render the clients as table tag using objet arrays of clients,  and the same is done for cards while creating html for each client.




