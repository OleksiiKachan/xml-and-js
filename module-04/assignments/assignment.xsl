<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Catalog</title>
            </head>
            <body>
                <h2>Catalog</h2>
                <ul>
                    <xsl:for-each select="catalog/product">
                            <article>
                                <xsl:for-each select="catalog_item">
                                    <li>
                                        <h3><xsl:value-of select="../@product_id"/></h3>
                                        <p><xsl:value-of select="../@description"/></p>
                                        <table border="1" >
                                            <tr bgcolor="#9acd32">
                                                <th>Item number</th>
                                                <th>Price</th>
                                                <th>Gender</th>
                                                <th>Small</th>
                                                <th>Medium</th>
                                                <th>Large</th>
                                                <th>Extra Large</th>
                                            </tr>
                                            <tr>
                                                <td><xsl:value-of select="item_number"/></td>
                                                <td><xsl:value-of select="price"/></td>
                                                <td>
                                                    <xsl:if test='@gender="Men"'>M</xsl:if>
                                                    <xsl:if test='@gender="Women"'>F</xsl:if>
                                                </td>
                                                <td>
                                                    <table border="1" >
                                                        
                                                        <tr bgcolor="#4286f4">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select='size[@description="Small"]/color_swatch'>
                                                            <tr>
                                                                <td><xsl:value-of select="." /></td>
                                                                <td><xsl:value-of select='@image'/></td>
                                                            </tr>
                                                        </xsl:for-each>
                                                                                                                
                                                    </table>
                                                </td>
                                                <td>
                                                    <table border="1">
                                                        
                                                        <xsl:if test='count(size[@description="Medium"]) > 0'>
                                                            <tr bgcolor="#ed3d3d">
                                                                <th>Color</th>
                                                                <th>Image</th>
                                                            </tr>
                                                            <xsl:for-each select='size[@description="Medium"]/color_swatch'>
                                                                <tr>
                                                                    <td><xsl:value-of select="." /></td>
                                                                    <td><xsl:value-of select='@image'/></td>
                                                                </tr>
                                                            </xsl:for-each>
                                                        </xsl:if>
                                                        <xsl:else>
                                                            <tr></tr>
                                                        </xsl:else>
                                                        
                                                    </table>
                                                </td>
                                                <td>
                                                    <table border="1">
                                                        
                                                        <tr bgcolor="#ed3d3d"> 
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select='size[@description="Large"]/color_swatch'>
                                                            <tr>
                                                                <td><xsl:value-of select="." /></td>
                                                                <td><xsl:value-of select='@image'/></td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table border="1">
                                                        <tr bgcolor="#000c7a">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select='size[@description="Extra Large"]/color_swatch'>
                                                            <tr>
                                                                <td><xsl:value-of select="." /></td>
                                                                <td><xsl:value-of select='@image'/></td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </li>
                                </xsl:for-each>
                            </article>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
