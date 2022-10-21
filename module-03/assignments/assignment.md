# Assignment

1. Open `module-3/assignments/assignment.xml` in your editor
2. Create DTD for this file and validate it using any of the tools we used
3. Create XSD for this file and validate it using any of the tools we used
4. Explain your thought process for these 2 declarations


When we are writing DDT, the most important think is root element and also the difference between !ELEMENT and !ATTLIST.
[
  <!ELEMENT catalog (product+)>
  <!ELEMENT product (catalog_item+)>
  <!ATTLIST product product_id ID #REQUIRED>
  <!ATTLIST product description CDATA #REQUIRED>
  <!ATTLIST product product_image CDATA #REQUIRED>
  <!ELEMENT catalog_item (item_number, price, size+)>
  <!ATTLIST catalog_item gender (Men|Women|Children) #REQUIRED>
  <!ELEMENT item_number (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!ELEMENT size (color_swatch+)>
  <!ATTLIST size description (Small|Medium|Large|Extra_Large) #REQUIRED>
  <!ELEMENT color_swatch (#PCDATA)>
  <!ATTLIST color_swatch image CDATA #REQUIRED>
]>

To create xsd file, we should avoid making mistake while decsribing complextype and simplecontent. And the order is important also ecah element has to be closed.



Create `module-3/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file.

Note: Dear Oleksi, I missed assignment for module-03. And I did it later.
