# Assignment

1. Open `module-4/assignments/assignment.xml` in your editor
2. Create xsl file and add link to it
3. Display catalog in the following way

- main title is "Catalog"
    answer:
    <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html style="background-color: #F9B7FF;"> 
      <body> 
        <h1 style="color: #9F000F; text-decoration: underline; font-size:300%;">Catalog</h1>
        <ul>
            <xsl:for-each select="catalog/product">
                <li>
                    <article>

- use html list tag to display catalog
    answer:
     <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html style="background-color: #F9B7FF;"> 
      <body> 
        <h1 style="color: #9F000F; text-decoration: underline; font-size:300%;">Catalog</h1>
        <ul>
            <xsl:for-each select="catalog/product">
                <li>
                    <article>
- render each item as `<article>` inside list item tag
 <article>
                    <h3 style="color: #FF6700 "><xsl:value-of select="@product_id"/></h3>
                    <p style="color: blue; font-size:160%;"><b><xsl:value-of select="@description"/></b></p>
                        <table border="1">
                            <tr bgcolor="#9AFEFF;"> 
                                <th>ItemNumber</th> 
                                <th>Price</th> 
                                <th>Gender</th> 
                                <th>Small</th>
                                <th>Medium</th>
                                <th>Large</th>
                                <th>Extra Large</th>
                            </tr> 
                            <xsl:for-each select="catalog_item"> 
                                <tr bgcolor="#4EE2EC">
                                    <td><xsl:value-of select="item_number"/></td>
                                    <td><xsl:value-of select="price"/></td>
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender = 'Men'">M</xsl:when>
                                            <xsl:when test="@gender = 'Women'">W</xsl:when>
                                        </xsl:choose>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Small']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Small']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Medium']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Medium']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Large']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Large']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Extra Large']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                </tr>
                            </xsl:for-each> 
                        </table>
                    </article>

- display product id as h3
   answer:
    <article>
        <h3 style="color: #FF6700 "><xsl:value-of select="@product_id"/></h3>

- display product description as paragraph
  answer:
   <p style="color: blue; font-size:160%;"><b><xsl:value-of select="@description"/></b></p>

- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
 answer:
 <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html style="background-color: #F9B7FF;"> 
      <body> 
        <h1 style="color: #9F000F; text-decoration: underline; font-size:300%;">Catalog</h1>
        <ul>
            <xsl:for-each select="catalog/product">
                <li>
                    <article>
                    <h3 style="color: #FF6700 "><xsl:value-of select="@product_id"/></h3>
                    <p style="color: blue; font-size:160%;"><b><xsl:value-of select="@description"/></b></p>
                        <table border="1">
                            <tr bgcolor="#9AFEFF;"> 
                                <th>ItemNumber</th> 
                                <th>Price</th> 
                                <th>Gender</th> 
                                <th>Small</th>
                                <th>Medium</th>
                                <th>Large</th>
                                <th>Extra Large</th>
                            </tr> 
                            <xsl:for-each select="catalog_item"> 
                                <tr bgcolor="#4EE2EC">
                                    <td><xsl:value-of select="item_number"/></td>
                                    <td><xsl:value-of select="price"/></td>
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender = 'Men'">M</xsl:when>
                                            <xsl:when test="@gender = 'Women'">W</xsl:when>
                                        </xsl:choose>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Small']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Small']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Medium']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Medium']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Large']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Large']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Extra Large']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                </tr>
                            </xsl:for-each> 
                        </table>
                    </article>
                </li>
            </xsl:for-each>
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>

- for gender column render M for Men, W for Women
  answer:
   <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender = 'Men'">M</xsl:when>
                                            <xsl:when test="@gender = 'Women'">W</xsl:when>
                                        </xsl:choose>
                                    </td>


- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image
answer:
  <xsl:if test="size[@description='Small']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Small']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Medium']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Medium']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Large']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Large']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Extra Large']">
                                            <table border="1">
                                                <tr bgcolor="#C34A2C"> 
                                                    <th>Color</th> 
                                                    <th>Image</th> 
                                                </tr>
                                                <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                                    <tr bgcolor="#FFFF00">
                                                        <td><xsl:value-of select="text()"/></td> 
                                                        <td><xsl:value-of select="@image"/></td> 
                                                    </tr>

Create `module-4/assignments/assignment_YOURNAME.md` and explain your thought process in it. Add screenshots of each step to the file (Refer `week-1/assignments/evaluation-1.md` on how to add image to md file)

ANSWER:
Firstly, we will make a xsl file. In this i have faced chalenges as it was a tricky one as using html and xsl together using loops in between. through this i have learned a lot. now, we have first have  declative statements and then stating the HTML tag ans using styling for background. now giving main title with h1 tag for catalog in body. Then starting ul listtag and then in taht staring the for each list for getting product id and description. now there are rules defined as product id in h3 tag and description in paragraph tag. then starting list and article tag and all the table content and product id and description. now here its a trick that there is a table inside the table for color and image. Lastly we need the closing tags for each. 

images: 
![image info](assets/assignment_output.png)
![image info](assets/assignment_xsl-1.png)
![image info](assets/assignment_xsl-2.png)
![image info](assets/assignment_xsl-3.png)
![image info](assets/assignment_xsl-4.png)
