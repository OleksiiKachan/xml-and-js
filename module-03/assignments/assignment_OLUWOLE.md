# Module 3 Assignment 

4. Explain your thought process for these 2 declarations

The first thing I did when I want to create a schema for this XML document was that I identified the structure and elements of the document.
In this case, the document has a root element called "catalog", which has a "product" element with several attributes, including "product_id", "description", and "product_image".

The "product" element also contains several elements "catalog_item", each with a "gender" attribute and several child elements, including "item_number", "price", and "size". 

The "size" element has a "description" attribute and contains several "color_swatch" elements, each with an "image" attribute.

Being able to identify the structure and elements of the document, I used this info to create a DTD and XSD file that defines the elements and attributes used in the document, as well as their relationships to each other. 

In the XSD, I used complex and simple types to define the elements and attributes. 

Also, in the DTD, I used element and attribute declarations to define the structure of the document.