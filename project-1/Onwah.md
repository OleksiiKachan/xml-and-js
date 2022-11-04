# Project 1


1) I created the XSD by doing the following
- All the elements that contains another element, or attribute(s) were considered as complex elements and so they were all defined as complex elements. 
- All the other elements were defined as simple elements.
- All the simple elements are defined as having string data type, because they all contain standard characters, except the `price` element, which was defined as decimal data type, because it has numbers separated by a decimal.
- All the elements that appear multiple times had maxOccurs as “unbounded” since they appear more than once in the document.
- All the attributes are declared as string, since they are all standard characters.

\
&nbsp;



   
 ![image info](xsdvalid.jpg)

\
&nbsp;


2) In creating the XSLT,

- I used the H1 tag, and inline CSS style to make `Stock Market` bigger and center it, since it is the main Title.
- I created a table that has the ID, Name, Currency, Address, stocks and account  rendered as a column, for each market,
- I also created a nested table for the  Address has a nested table  that shows the stree, City and region for each market
- Then I created a nested tabled in the Stocks column for each market  that shows the symbol, Name, Sector,Industry, Market cap and price 
- Finally I created another nested table in the accounts colum for each market that shows firstname, lastname, gender occupation and IBAN


\
&nbsp;

        
![image info](xlt.jpg)   

    



