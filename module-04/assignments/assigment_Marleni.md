# Detail about process

1. main title is "Catalog"
    when analyzing the structure of the code, the title of the output is determined 
    ![image info](../captures/ima1.jpg)


2. use html list tag to display catalog

    This favors a better visualization of the information content.
     ![image info](../captures/ima2.jpg)

3.  render each item as `<article>` inside list item tag
    Allows the content of each product to be listed

         ![image info](../captures/ima3.jpg)

4.  display product id as h3
    Allows the entire product id to be seen

     ![image info](../captures/ima4.jpg)

5. display product description as paragraph 

    Allows the display of the description
     ![image info](../captures/ima5.jpg)

6. render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)

    The goal of transforming to a table was decisive since there are columns that have sub-columns
     ![image info](../captures/ima6.jpg)

7. for gender column render M for Men, W for Women

    The challenge here was to apply the CHOOSE option

      ![image info](../captures/ima7.jpg)

8.  inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image
    The challenge was to relate subtables in the main table
      ![image info](../captures/ima8.jpg)