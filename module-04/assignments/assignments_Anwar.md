

1.step - main title is "Catalog"

[! Main Title Displayed as output](../assignments/Main_Tile_Catalog.png)
[! Code Shown for main title part](../assignments/Main_Tiltle_Code.png)





2.step - use html list tag to display catalog

[! Displaying the item under the catalog as unordered list](../assignments/Display_product_as_list.png)
[! code forDisplaying the item under the catalog as unordered list](../assignments/Display_product_as_list_code.png)





3.step - render each item as `<article>` inside list item tag
- display product id as h3
- display product description as paragraph

[! displaying product id as h3 and description as h4 ](../assignments/Product_id_as_h3_and_product_description_as_paragragh.png)
[! code for displaying product id as h3 and description as h4](../assignments/code_for_displaying_product_id_as_h3_and_description_as_h4.png)



4.step
- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
- for gender column render M for Men, W for Women

[! Displaying the table with columns and rendering for men as M and for Women 'W'](../assignments/Displaying_table_with_render_M_or_W.png)
[! code Displaying the table with columns and rendering for men as M and for Women 'W'](../assignments/Code_Displaying_table_with_columns.png)




5.step
 inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image
[! Displaying the final output code ](../assignments/Displaying_table_for_size_small.png)
[! Displaying the final table ](../assignments/final_output.png)



Thought Process: 

In this the Xsl file is created for the .xml file. It transfroms the .xml into another desired format and produces the transformed output 

It represents the product items as list and catalog items in the table in which the catalog items are separted by their gender.

First created a title called Catalog Using <h1> tag 
next the list is displayed using <li> tag and then the product id is displayed as <h3> heading 
next the table started which has coloumns as mentioned and then the data for each has been inserted and it is extracted using value-of.

It is complex but the steps here follwed is create table and then make header with the columns names in first row and then in second row the values are inserted for the following columns using <td>, Each td started enters the data in the next column and value is accessed using value-of
