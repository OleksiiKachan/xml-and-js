# Module-04 Assignment

- main title is "Catalog":<br>
I displayed the main title "Catalog" as h2 tag.<br>
![title](./img/title.png)<br>

- use html list tag to display catalog:<br>
I created an unordered list with 3 list items to display the catalog.<br>
![list](./img/list.png)<br>


- render each item as `<article>` inside list item tag:<br>
![article](./img/article.png)<br>

- display product id as h3:<br>
I display the product id as h3 by using `<xsl:value-of>` tag and select "@product_id" <br>
![id](./img/id.png)<br>

- display product description as paragraph:<br>
I display the product description as paragraph by using `<xsl:value-of>` tag and select "@description" <br>
![paragraph](./img/paragraph.png)<br>

- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell):<br>
I created a table of catalog items with columns, used `<xsl:for-each>` tag to  apply a template repeatedly for each node, and used `<xsl:value-of>` tag to display the value of item number, price, gender, small, medium, large, extra large in differents columns. <br>
![table1](./img/table1.png)<br>
![table2](./img/table2.png)<br>


- for gender column render M for Men, W for Women:<br>
I used the `<xsl:choose>` tag to display M for Men and W for Women.<br>
![gender](./img/gender.png)<br>


- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image:<br>
I used the `<xsl:if>` tag to specify the size columns and create subtable in the size columns. Each subtables would have 2 columns "color" and "image". I used `<xsl:for-each>` to apply a template repeatedly for each node and used two `<xsl:value-of>` tags to select the values of "@image" and color_swatch by using the Syntax "." (for selecting the current node). <br>
![subtable1](./img/subtable1.png)<br>
![subtable2](./img/subtable2.png)<br>

- Final outcome:<br>
![assignment](./img/assignment.png)<br>