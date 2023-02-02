# Assignment - Module 3
### Name: Naitik Mukeshkumar Panchal
### N-No: N01512962

1. Create DTD for this file and validate it using any of the tools we used
* Here the dtd file for the assignment.xml file is created
    * ![DTD create](/module-03/assets/dtd%20creation.png)

* After creating the DTD file, it was showing error when giving the options for the possible description values.
    * ![DTD error](/module-03/assets/dtd%20error%201.png)

* Here it shows the validation output after the error was solved.
    * [DTD error](/module-03/assets/dtd%20no%20errors.png)

2. Create XSD for this file and validate it using any of the tools we used
* Here the assignment.xsd file was created and validated using the XSD validator.
    * [XSD Valid](/module-03/assets/xsd%20valid.png)

3. Explain your thought process for these 2 declarations.
* Here, creating the DTD for the assignments was very straight-forward, I created the inline DTD in the xml file, in this first we have to create the Doctype tag and give the type as the root element of the xml file. Then in the DTD file I wrote down each of the elements with their datatypes and their attributes. 
    * At first in some elements it gave errors as there were multiple elements in the same tag for which I had to enter the symbol like +,? to show its repeatations. And in some attribtes I tried to give the values as options as shown in the above image but it was also showing errors. So I took its datatype as the character data, CDATA.

* In the XSD file I created the root element tag as the complex Type, inside which there is one element Product, which is also a complex Type element containing the catalog item element and three attributes as produt_id, description and product_image. Then I creatd the  catalog item type as the complex type as it has item_number, price, size elements and gender attribute. Product_id attribute is created as the ID type as it is unique. I gave the price the datatype of float, it could also contain the decimal type. Then the sie element was present multiple times in one catalog_item so gave its maxOccurence as unbounded. And did the same for some other elements for which it was necessary. 
    * I created the colorSwatchType as the complex type for the color_swatch element. This elements had one attribute image and it had no other elements inside but only one child element. As there are no elements but the data is present and one attribute, I created the colorSwatchType as the complex Type datatype, which contained the simple content of base type string. And it had attribute named Image which also had the value as type string.