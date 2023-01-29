# Assignment1 - Nrup Patel(n01546128)

1. Done!

2. The following is the DTD for the assignment file.
    -   <!DOCTYPE catalog[
            <!ELEMENT catalog (product)>
            <!ELEMENT product (catalog_item+)>
            <!ATTLIST product product_id ID #REQUIRED>
            <!ATTLIST product description CDATA #REQUIRED>
            <!ATTLIST product product_image CDATA #REQUIRED>
            <!ELEMENT catalog_item (item_number, price, size+)>
            <!ATTLIST catalog_item gender (Men|Women) #REQUIRED>
            <!ELEMENT item_number (#PCDATA)>
            <!ELEMENT price (#PCDATA)>
            <!ELEMENT size (color_swatch+)>
            <!ATTLIST size description CDATA #REQUIRED> <!-- I have used 'CDATA in the declaration because on of the description contains 'Extra Large' as a type which has a space and in the declaraion we cannot use a space as it is prohibited.-->
            <!ELEMENT color_swatch (#PCDATA)>
            <!ATTLIST color_swatch image CDATA #REQUIRED>
        ]>
    - Screenshot of Proof: [image info](../Module3_Assignment_Nrup/XML%20DTD%20Validation.png)

3. 
    - The respective xsd file is attached inside the assignment folder.
    - The proof of validation: [image info](../Module3_Assignment_Nrup/XML%20XSD%20Validation.png)

4. The following are the observations:
    - While creating the DTD file, I was having an error onto creating the options inside of the size's description attribute as one of them was 'Extra Large'. However I got to know that using a space is prohibited in between an option name and therefore in the end I used CDATA as the type of attribute. If we want to add options, then we have to take care of removing the white space from the 'Extra Large' option so as to avoid the redundancy and give the options in the declaration file which can be done by using Camel Casing or Snake Casing as the naming convention.
    - While creating the XSD file, I had a doubt while using 'description' as the name for both Product and Size's attribute. I thought it would create a redundancy in the validation of the file. However, it did not create a redundancy and I feel the reason behind it is that it can differentiate between the element attributes because we have mentioned different complex type blocks to define the element. 