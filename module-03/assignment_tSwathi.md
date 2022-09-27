1. Open `module-3/assignments/assignment.xml` in your editor
2. Create DTD for this file and validate it using any of the tools we used
3. Create XSD for this file and validate it using any of the tools we used
4. Explain your thought process for these 2 declarations
Ans--Dtd stands for Document Type definition With a DTD, independent groups of people can agree on a standard DTD for interchanging data.An application can use a DTD to verify that XML data is valid.If the DTD is declared inside the XML file, it must be wrapped inside the <!DOCTYPE> definition.
DTD is interpreted like this:
!DOCTYPE note defines that the root element of this document is note
!ELEMENT note defines that the note element must contain four elements: "to,from,heading,body"
!ELEMENT to defines the to element to be of type "#PCDATA"
!ELEMENT from defines the from element to be of type "#PCDATA"
!ELEMENT heading defines the heading element to be of type "#PCDATA"
!ELEMENT body defines the body element to be of type "#PCDATA"

An XML Schema describes the structure of an XML document.
The XML Schema language is also referred to as XML Schema Definition (XSD).
The purpose of an XML Schema is to define the legal building blocks of an XML document:

1.The elements and attributes that can appear in a document
2.The number of (and order of) child elements
3.Data types for elements and attributes
4.Default and fixed values for elements and attributes