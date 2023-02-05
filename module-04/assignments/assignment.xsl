<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
        <html> 
            <body> 
                <h1>Catalog</h1>
                <article    >
                    <ul>
                        <li>
                            <h3><xsl:value-of select="//product/@product_id"/></h3>
                            <p><xsl:value-of select="//product/@description"/></p>
                        </li>
                    </ul>
                </article>
                <xsl:for-each select="//product/catalog_item"> 
                    <table border="1">
                        <tr> 
                            <th>Item number</th> 
                            <th>Price</th> 
                            <th>Gender</th> 
                            <th>Small</th> 
                            <th>Medium</th> 
                            <th>Large</th> 
                            <th>Extra Large</th> 
                        </tr>

                        <tr>
                            <td>
                                <xsl:value-of select="item_number"/>
                            </td>
                            <td>
                                <xsl:value-of select="price"/>
                            </td>
                            <td>
                                <xsl:if test="@gender = 'Men'">
                                    <p>M</p>
                                </xsl:if>
                                <xsl:if test="@gender = 'Women'">
                                    <p>W</p>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Small']">
                                    <table border='1'>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Small']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td>
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Medium']">
                                    <table border='1'>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Medium']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td>
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Large']">
                                    <table border='1'>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Large']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td>
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Extra Large']">
                                    <table border='1'>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td>
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            
                        </tr>
                    </table>
                </xsl:for-each>
            </body> 
        </html>
    </xsl:template>  
</xsl:stylesheet>