# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
 <!--ERROR:1<effective Date>03/12/2016</effective Date>
 EDIT:<effectiveDate>03/12/2016</effectiveDate>
 REASON: Spaces or other speactial charecters are not encouraged in attribute tags-->
<!--ERROR:2  <!--<originalName> Fresh Mornin' Sampler </originalname>
      EDIT:  <originalname> Fresh Mornin' Sampler </originalname>
       REASON: The openning tag is not matching with the name closing tag where that has to be same-->
 <!--ERROR:3  <name> Oatmeal Breakfast </originalName>
        EDIT:<originalname> Oatmeal Breakfast </originalName>
       ERROR:The opennig and closing tags were not matching -->  


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. What is the use of CDATA block in this document?
<!--The  CDATA is used to describe the summary as well as description of menu and menuitems. It consists of special characters like !,*,' which written without CDATA block or use of references will give an error when xml document is parsed.
Inorder to avoid the error too CDATA block is used.-->

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?
Prolog:  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 Document body:

<!DOCTYPE menuInfo
[
  <!ELEMENT menuInfo(title, summary, effectiveDate, menu+)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT summary (#PCDATA)>
  <!ELEMENT effectiveDate (#PCDATA)>
  <!ELEMENT menu (category, menuItem+)>
  <!ELEMENT category (#PCDATA)>
  <!ELEMENT menuItem (itemName+ , description, price, indicator)>
  <!ELEMENT itemName(originalName, oldName)>
  <!ELEMENT originalName(#PCDATA)>
  <!ELEMENT oldName(#PCDATA) IMPLIED>
  <!ELEMENT description (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!ELEMENT indicator (#PCDATA) IMPLIED>
]>

 Epilog:  Is used for comments and addotional info 
<!---->
The processing info"
<?xml-stylesheet type="text/css" href="style.css"?>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5. Add inline DTD for this document.
<!--Written-->
---------------------------------------------------------------------------------------------------------

6. Verify that file is well-formed and valid.
<!--Yes, the fie is well formed and verified.-->
---------------------------------------------------------------------------------------------------------

7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
OUTPUT:
![image info](CSS_1.2.png)

- Display each `category` on the new line
OUTPUT:
![image info](CSS_1.4.png)

- Add any other css-rule
OUTPUT: Changed the text colour and font style of the original name.
![image info](CSS_1.3.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!--Bindu Muthavarapu_ Student ID: N01525797>