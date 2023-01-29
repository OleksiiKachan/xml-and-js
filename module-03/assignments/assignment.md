# Assignment

1. Open `module-3/assignments/assignment.xml` in your editor
2. Create DTD for this file and validate it using any of the tools we used
3. Create XSD for this file and validate it using any of the tools we used
4. Explain your thought process for these 2 declarations

-> Process for DTD:
    The DTD file contains all the elements and the attributes of those elements. Here the root element of the XML document is catalog which has product as a child element. The product element contains the catalog_item. There are multiple catalog_item elements under single product element and to indicate that puls sign is used to define the cardinality.
    The element product has three attributes named as product_id, description and product_image, the attribute product_id is required for each product. The attributes description and product_image are of string type. 
    The element catalog_item contains item_number, prize and size of the product, where number of element size can be zero or more and to define the cardinality of this element asterisk sign is used. Catalog_item has one attribute associated with it named as gender; which is of enumeration type and it can have Men or Women values.  
    The elements item_number and price have string content for that PCDATA is used as a contect type.
    The element size can have one or more color_swatch as number of color_swatch element vary in all the size elements. Size have description as a attribute which can be Small, Medium, Large or Extra_Large. 
    The element color_swatch contains string values and it has image as a attribute. 

-> Process for XSD:
    The root element of the file is catalog and it contains product element as a child element therefore the catalog is the complex type and the element product is defined under this type.
    The element product is defined as complex type as it has multiple attributes and child elements; all these attributes and child elements are decared under productsType complex type. 
    The element catalog_item has three child elements so it is defined as a complex type and item_number, price and size are defined of complex type catalogItemType.
    Here the element item_number has string values and price has floating values therefore it is defined as decimal type.
    The element size is defined as complex type as it has color_swatch as a sub element. The element color_swatch has string values for that reason it is declared as a simple type.
Create `module-3/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file.
