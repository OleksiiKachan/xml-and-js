# Module 4 (Activity-1)
# Name : Viraj Chandubhai Paneliya
# ID : N01512139


- main title is "Catalog" : I used <title>Catalog</title> for giving title
![image info](../assets/1.png)

- use html list tag to display catalog
![image info](../assets/2.png)

- render each item as `<article>` inside list item tag
![image info](../assets/3.png)

- display product id as h3 : <h3>Product Id : <xsl:value-of select="//catalog/product/@product_id"/></h3>
![image info](../assets/4.png)

- display product description as paragraph : <p>description : <xsl:value-of select="//catalog/product/@description"/></p>
![image info](../assets/5.png)

- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell) : I created table with These fields (item number, price, gender, small, medium, large, extra large) by using html tags such as <table>, <tr>, <th>, <td>.
![image info](../assets/6.png)

- for gender column render M for Men, W for Women : this is solved by only one if condition like this <xsl:if test="@gender='Women'"><td>W</td></xsl:if>
![image info](../assets/7.png)

- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image : This was the trickiest part in this assignment because there were tables inside the cell of first table with complicated data but fun to do it.
![image info](../assets/8.png)



- My Find Output is :
![image info](../assets/9.png)
![image info](../assets/10.png)