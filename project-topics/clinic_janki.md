i have created two file in project work : clinic.xml and clinic.xsd

clinic.xml

- xml means extensive markup language. xml i used for design and store data, human can create their xml file using own way
- xml is self descritive means it has sending information and receving information, heading , message body.
- xml elemets has structure of tree, it has root elemnet - (info)
- in every xml file , declration is need which represents xml version and character coding
- creted one pair element of clicnic as clinic has more clinic data , same for addrress, drugdata, employee
- main important thing is to end with closing tag while creating xml file.

* for dtd

- i have created inline dtd in clinic.xml file
- dtd means document type declaration.Dtd define leagal elements and structure of xml element

- it must be wrapped with <!DOCTYPE> - it defines root elemt (clinic/info)
- <!ELEMENT> - elemnt of xml file like clinic, id , address, drug
- PCDATA = it means parse data by parser it inside elements of xml file

* clinic.xsd

- xml schema describe structure of xml documents. xml scehma iike dtd
- it has declartaion ofxml encoding character and version of xml file
- <xs:schema></xs:schema> - it i sroot elemrnt of xsd file
- <xs: schema> - it has many attributes like what is deination of xml
- <xs:elemnt> - it is used for defining xml element it has two atrributes name and type , name means element name and ype means data type of element
- in xml file , i have use only posiive number and string
- <complexType> - it is used when we have lot of data of one pariticulat element , it must be use <sequence> - to sequence data
- minoccounr and maxoccours = for setting how many times we have same data in xml file
- i have format some element in complextype and sequence tag : drugs , address, employees as it has many data of data in elements.

![image info](../project-topics/xsd%20validation.png);
![image info](../project-topics/xml%20code.png);
![image info](../project-topics/xml%20validation.png);
