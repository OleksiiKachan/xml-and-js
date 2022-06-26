# Project-1

- In this project I Created clinic.xsd file and clinic.xsl file

1. clinic.xsd file
- I created this file by just following the structure of XSD file which I previously created.
- starting with <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> declaration
- each element of xml file are written in <xs:element name="">
- we can add occurance of that element as minOccurs="", maxOccurs=""
- type of element can be added as type="xs:string" (here string, integer, float are considered as different type which is different than dtd file)
- if element has some other elements inside it then it is called as complextype and other elements are written inside xs:complexType ... </xs:complexType>
- elements which are not complex type is need to define their type and can be written in self closing tag. for ex. <xs:element type="xs:string" name="item_number"/>


2. clinic.xsl file
- First I created table with 4 columns Clinic Id, Address, Employee, Drug
- Then I insert Id in first column by looping through all clinics
- for address I created another table inside cell
- for Employee I created another table inside cell and inserted all employees with loop
- for drug, same as employee I created another table inside cell and displayed all the drug by using loop
- then I applied some CSS to the table by using style tag inside head