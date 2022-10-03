<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <body>
                <h2>Catalog</h2>

                <ul>
                    <xsl:for-each select="catalog/product">
                        <li>
                            <article>
                                <h3><xsl:value-of select="@product_id"/></h3>
                                <p><xsl:value-of select="@description"/></p>
                            </article>
                        </li>
                    </xsl:for-each>
                </ul>
                
                <table border="3">
                    <tr bgcolor="#8f63ff"> 
                        <th>Item Number</th> 
                        <th>Price</th> 
                        <th>Gender</th> 
                        <th>Small</th>
                        <th>Medium</th>
                        <th>Large</th>
                        <th>Extra Large</th>
                    </tr> 

                    <xsl:for-each select="catalog/product/catalog_item">
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <xsl:if test="@gender='Men'">
                                <td>M</td>
                            </xsl:if>
                            <xsl:if test="@gender='Women'">
                                <td>W</td>
                            </xsl:if>
                            <td>
                                <xsl:if test="size[@description='Small']">
                                    <table border="1">
                                        <tr bgcolor="#cab7fb">
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
    
                                        <xsl:for-each select="size[@description='Small']">
                                            <td><xsl:value-of select="color_swatch"/></td> 
                                            <td><xsl:value-of select="color_swatch/@image"/></td> 
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                                
                            </td>
                            <td>
                                <xsl:if test="size[@description='Medium']">
                                    <table border="1">
                                        <tr bgcolor="#cab7fb">
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
    
                                        <xsl:for-each select="size[@description='Medium']">
                                            <td><xsl:value-of select="color_swatch"/></td> 
                                            <td><xsl:value-of select="color_swatch/@image"/></td> 
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Large']">
                                    <table border="1">
                                        <tr bgcolor="#cab7fb">
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
    
                                        <xsl:for-each select="size[@description='Large']">
                                            <td><xsl:value-of select="color_swatch"/></td> 
                                            <td><xsl:value-of select="color_swatch/@image"/></td> 
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Extra Large']">
                                    <table border="1">
                                        <tr bgcolor="#cab7fb">
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
    
                                        <xsl:for-each select="size[@description='Extra Large']">
                                            <td><xsl:value-of select="color_swatch"/></td> 
                                            <td><xsl:value-of select="color_swatch/@image"/></td> 
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