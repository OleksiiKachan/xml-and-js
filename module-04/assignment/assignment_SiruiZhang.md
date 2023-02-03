# Assignment

1. Open `module-4/assignments/assignment.xml` in your editor
2. Create xsl file and add link to it

On this step, I add '<?xml-stylesheet type="text/xsl" href="assignment.xsl"?>' on assignment.xml to link xsl file to the xml file.

3. Display catalog in the following way
- main title is "Catalog"
Since it's title so I just <title> for this requirement. And <h2> to display Catalog as the title.

- use html list tag to display catalog
Since need to display as list, I use <ul> in this step and <li> for each thing that I need to display in the list.

- render each item as `<article>` inside list item tag
I use <article> after <li> to make each item as an article.

- display product id as h3
Use tag <h3> to display product id. And since need to display the id from xml, I use xsl:for-each on this step to make it able to read the attribute from the xml. <xsl:for-each select="catalog/product"> And since what need to be read is the attribute with product, so we select the product under catalog.

- display product description as paragraph
Use <p> to make description as paragrah, and use <xsl:value-of select="@description"/> to read the attribute description which is with product.
[!image info](/module-04/assignment/assignment1_step1.png)

- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
Use <table> on this step to make a table. Then use <tr> and <th> to make the title list.
Then use <tr> and <td> to make the rest part of the table.
And since we need to read the value from the xml, so add <xsl:for-each select="catalog_item"> in front of the <tr> which connect with <td>. 

[!image info](/module-04/assignment/assignment1_step2.png)

- for gender column render M for Men, W for Women
On this step, I use xsl:choose and xsl:when to change the display from the value to specific one that we want to display.

[!image info](/module-04/assignment/assignment1_step3.png)

- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image
Use <table> under <td> to make a nested table which can fit in two columns under the gender.
Since size has more than one color and image, also it's random with size and gender. So I use another xsl:for-each - <xsl:for-each select="size/color_swatch">, to let all color and iamge able to be read accroding to size and gender. 
And after that use xs:if - <xsl:if test="../@description='Small'">, to let system pick the value according to the size. Since size need ot be read but need to count for each of color_swatch, I use size/color_Swatch for the xsl:for-each, but can use .. to let the system read from the parent of color_Swatch.

[!image info](/module-04/assignment/assigment_final.png)