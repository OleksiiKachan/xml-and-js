My contribution towards this project was by desgining aand creating an xml file based on our topic. with the xml file i was able to structure the document in such a way that is has the prolog and the root element. Also as part of the prolog i included the xml declaration. Then we have the elements of the document which consists of a start tag, character data and an end tag 
 <name>Technological University (Lashio)</name>
Secondly i handled the types declaration by creating dtd and xsd for the created xml file
 To include DTD we begin with the <!Doctype, followed by the elements declaration . we declared every element address, city 
 country 
 courses 
 description 
 dob 
 email 
 faculty 
 firstName 
 id 
lastName 
 name 
 phoneNumber 
region 
 root 
students 
 title 
 zipCode 
 our content elements contains #PCDATA which means the element can contain only parsed character data. Example our zipcode element <!ELEMENT zipCode ( #PCDATA )> . Also we can see elements like students, address, faculty and courses contain child elements. we also ensured that our dtd was well formed using one of the tools provided in class.
 For the xsd we used the xml schema to formally describe the elements in the xml doxument. Some of our xml schema elements were complex types as they had attributes. Example x<xs:element name="faculty" maxOccurs="unbounded" minOccurs="0">
                <xs:complexType>
Our elements value type was xs:string.