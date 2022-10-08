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