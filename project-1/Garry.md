Garry: XSLT
       Dynamically loading data from xml and parse it to make a HTML


1. XSLT

   In xslt part, I have applied the templates to the <record> tag in our xml. For each record, a table is createdwith headers as ID,Name,Currency,Address,Stocks and Accounts. And for each Address record,Stocks record and Accounts record, a nested table is created with all the fields and the data in the XML.

![image info](/project-1\screenshots\XSLT1.png)
![image info](/project-1\screenshots\XSLT2.png)
2. Dynamically loading data from XML to HTML

 In this part, the record tag data is extracted from XML document and we get all records in the form of array. After that, iterate through each record and for stocks and accounts we iterate again to access the all the stocks accounts records. So for stocks a nested table is created as a string and added to the one of the cell in the main table. And we pass it to the inner HTML. For accounts, list is created with Name,gender,Occupation and IBAN as the listitems.

![image info](/project-1/screenshots/XMLToHTML1.png)
![image info](/project-1/screenshots/XMLToHTML2.png)