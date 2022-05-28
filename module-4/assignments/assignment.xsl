<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
    <head>
        <title>Catalog</title> <!-- title for tab -->
        <!-- applied some styles to the table -->
        <style>
            table th, table td{
                text-align:center;
            }
            table td{
                padding:0 10px;
            }
            table tr table{
                margin:10px auto;
            }
            table tr table td{
                width: 50px;
            }
        </style>
    </head>
      <body> 
      <!-- displaying catalog in list and each element in article (item number, price, description, color) -->
        <ul><li><article>Catalog</article></li>
            <ul>
                <xsl:for-each select="//catalog/product/catalog_item"> 
                    <li>
                        <article><xsl:value-of select="item_number"/></article>
                        <article><xsl:value-of select="price"/></article>
                        <xsl:for-each select="size">
                            <ul>
                                <li>
                                    <article><xsl:value-of select="@description"/></article>
                                    <ul>
                                        <xsl:for-each select="color_swatch">
                                            <li><article><xsl:value-of select="text()"/></article></li>
                                        </xsl:for-each>
                                    </ul>
                                </li>
                            </ul>
                        </xsl:for-each>
                    </li>
                </xsl:for-each>
            </ul>
        </ul>

        <!-- product id in h3 tag -->
        <h3>Product Id : <xsl:value-of select="//catalog/product/@product_id"/></h3>
        <!-- description in paragraph tag -->
        <p>description : <xsl:value-of select="//catalog/product/@description"/></p>

        <!-- table with item number, price, gender, small, medium, large, extra large fields -->
        <table border="1"> 
            <tr bgcolor="yellow"> 
                <!-- column headings -->
                <th>item_number</th> 
                <th>price</th> 
                <th>gender</th> 
                <th>small</th>  
                <th>medium</th>
                <th>large</th>
                <th>extra large</th>
            </tr> 
            <xsl:for-each select="//catalog/product/catalog_item"> 
                <tr>  
                <!-- data in rows -->
                    <td><xsl:value-of select="item_number"/></td> 
                    <td><xsl:value-of select="price"/></td> 
                    <!-- M for Men -->
                    <xsl:if test="@gender='Men'">
                        <td>M</td>
                    </xsl:if>
                    <!-- W for Women -->
                    <xsl:if test="@gender='Women'">
                        <td>W</td>
                    </xsl:if>
                    <td>
                    <xsl:if test="size/@description='Small'">
                    <!-- another table inside table -->
                        <table border="1">
                            <tr bgcolor="yellow">
                                <th>color</th> 
                                <th>image</th> 
                            </tr>
                            <xsl:for-each select="./size/color_swatch"> 
                                <xsl:if test="../@description='Small'">
                                    <tr>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./@image"/></td>
                                    </tr>
                                </xsl:if>
                            </xsl:for-each> 
                        </table>
                    </xsl:if>
                    </td> 
                    <td>
                        <xsl:if test="size/@description='Medium'">
                        <!-- another table inside table -->
                        <table border="1">
                            <tr bgcolor="yellow">
                                <th>color</th> 
                                <th>image</th> 
                            </tr>
                            <xsl:for-each select="./size/color_swatch"> 
                                <xsl:if test="../@description='Medium'">
                                    <tr>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./@image"/></td>
                                    </tr>
                                </xsl:if>
                            </xsl:for-each> 
                        </table>
                    </xsl:if>
                    </td> 
                    <td>
                        <xsl:if test="size/@description='Large'">
                        <!-- another table inside table -->
                        <table border="1">
                            <tr bgcolor="yellow">
                                <th>color</th> 
                                <th>image</th> 
                            </tr>
                            <xsl:for-each select="./size/color_swatch"> 
                                <xsl:if test="../@description='Large'">
                                    <tr>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./@image"/></td>
                                    </tr>
                                </xsl:if>
                            </xsl:for-each> 
                        </table>
                    </xsl:if>
                    </td> 
                    <td>
                        <xsl:if test="size/@description='Extra Large'">
                        <!-- another table inside table -->
                        <table border="1">
                            <tr bgcolor="yellow">
                                <th>color</th> 
                                <th>image</th> 
                            </tr>
                            <xsl:for-each select="./size/color_swatch"> 
                                <xsl:if test="../@description='Extra Large'">
                                    <tr>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./@image"/></td>
                                    </tr>
                                </xsl:if>
                            </xsl:for-each> 
                        </table>
                    </xsl:if>
                    </td> 
                </tr> 
            </xsl:for-each> 
        </table>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>