<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
      <body> 
        <ul><li><article>Catalog</article></li></ul> <!--RENDER EACH ITEM AS `<article>` INSIDE LIST ITEM TAG-->
        <ul>
        <xsl:for-each select="catalog/product/catalog_item"> 
            <li>
            <article><xsl:value-of select="item_number"/>
                    <xsl:value-of select="price"/>
                    <xsl:for-each select="size">
                    <ul>
                        <li>
                            <xsl:value-of select="@description"/>:
                            <xsl:for-each select="color_swatch">
                                <xsl:value-of select="text()"/>
                            </xsl:for-each>
                        </li>
                    </ul>
                    </xsl:for-each>
                </article>
            </li>
            </xsl:for-each>
        </ul>
            <h3>Product Id : <xsl:value-of select="catalog/product/@product_id"/></h3> <!--DISPLAY PRODUCT ID AS H3-->

            <p>description : <xsl:value-of select="catalog/product/@description"/></p> <!--DISPLAY PRODUCT DISCRIPTION AS PARAGRAPH-->

            <table border="1"> 
                <tr> 
                    <th>item_number</th> <!--HEADING FOR COLUMN-->
                    <th>price</th> 
                    <th>gender</th> 
                    <th>small</th>  
                    <th>medium</th>
                    <th>large</th>
                    <th>extra large</th>
                </tr> 
                <xsl:for-each select="catalog/product/catalog_item"> 
                    <tr>  
                        <td><xsl:value-of select="item_number"/></td> <!--DISPLAYING DATA IN ROWS-->
                        <td><xsl:value-of select="price"/></td> 
                        <xsl:if test="@gender='Men'"><td>M</td></xsl:if> <!--RENDER M FOR MEN-->
                        <xsl:if test="@gender='Women'"><td>W</td></xsl:if> <!--RENDER W FOR WOMEN-->
                        <td>
                        <xsl:if test="size/@description='Small'"> 
                            <table>  <!--NESTING TABLES-->
                                <tr>
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
                            <table>  <!--NESTING TABLES-->
                                <tr>
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
                            <table> <!--NESTING TABLES-->
                                <tr>
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
                            <table>
                                <tr>
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