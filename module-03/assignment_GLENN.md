4.DTD and XSD format are used to declare the structure of XML Document.
DTD file tells us the name of element and attribute type.The DTD file explains that when we declare the DTD format we can see that since there is space between the attribute value in element-SIZE attribute-DESCRIPTION where in the description attribute value is been given as "EXTRA LARGE".
Here if we give the value as "EXTRA_LARGE" or remove the space between the value "EXTRALARGE" then we can declare them.Or else while declaring in DTD format we will encounter error or the file does not validate for the DTD format and need  to declare size description as a "STRING" that is "CDATA".
BUT we can see that this is not the case in declaring XSD format we can declare it in XSD format since XSD format gives more details about the XML file like data-types,count,occurence.In XSD format we show that SIZE is of complex type so we need to show SizeType as COMPLEX and then in that we can declare DESCRIPTION as a STRING


![DTD file is validated here](../assests/xmlValid.png)
![XSD file is validated here](../assets/xsdValid.png)