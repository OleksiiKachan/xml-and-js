Thought process behind the DTD is :
There is a root element called Catalog in which there is a element named product with 3 attributes.
The product element has one or more catalog_item 
catalog_item has one attribute of gender with other three element of item_number,price and size.
here i have made gender attribute value should be compulsory same with the size element and
the size element can occur one or more times.
The size element has an element called color_swatch which can occur one or more times.
The color_swatch has a attribute called image which value should be compulsory.

![module3_3](https://user-images.githubusercontent.com/108425395/192399676-f68f46db-16cf-4255-a02f-c0f320176b79.png)



Thought process behind the xsd file :
Catalog is the complex element. 
Product is also the complex element with a sequence of the catalog_item and attributes of the product_id,product_image and description.
catalog_item is complex element with a sequence of item_number, price and size with attribute named gender.
size is the complex item with a attribute of description and a sequence of color_swatch which is further a complex type with simple content with base 
extension of string and the attribute image.

![module3_4](https://user-images.githubusercontent.com/108425395/192165507-0ff5fe71-6006-4a78-941a-9229b6bab0c1.png)

![module3_5](https://user-images.githubusercontent.com/108425395/192165521-18e5c0ab-1df4-4d25-bded-395efdc42621.png)







