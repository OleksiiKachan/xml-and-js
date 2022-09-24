
## Thought Process for DTD:
- Catalog is the root element which includes one product element with three arguments; product_id, description, product_image
- Product element has one or more catalog_item
- catalog_item has one attribute gender and three elements; item_number, price, and size
- gender attribute can have either Men or Women value
- Size element can be at least one or many
- item_number and price has a value which is PCDATA
- size element has one attribute description and one or more color_swatch element
- color_swatch has PCDATA value and image attribute which can have string value

## Thought Process for xsd
- catalog is an element of complex type. Only one product is shown but it likely is a sequence of product element
- product is a complex type with sequence of catalog_item element and attribute.
- product_id is of type ID and description and product_image is of type string.
- catalog_item is a complex type with sequence and attribute created as CatalogItemType
- item_number is a simple of type Id
- price is a simple of type decimal
- size is complex with sequence of 1-unbounded and attribute
- color_swatch is complex with simple type.
