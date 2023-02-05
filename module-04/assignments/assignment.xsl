<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/"> 
    <html>
        <body> 
            <h1>Catalog</h1>
            <ul>
                <xsl:for-each select="catalog/product">
                    <li>
                        <article>
                            <h3><xsl:value-of select="@product_id"/></h3>
                            <p><xsl:value-of select="@description"/></p>
                            <h2>Catalog Items</h2>
                            <table border="1" width="100%">
                                <tr>
                                    <th>Item_Number</th>
                                    <th>Price</th>
                                    <th>Gender</th>
                                    <th>Small
                                        <table border="1" width="100%"><!--Subtable Headings-->
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>
                                        </table>
                                    </th>
                                   
                                    <th>Medium
                                        <table border="1" width="100%">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>
                                        </table>
                                    </th>
                                    <th>Large
                                        <table border="1" width="100%">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>
                                        </table>
                                    </th>
                                    
                                    <th>Extra Large
                                        <table border="1" width="100%">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>
                                        </table>
                                    </th> 
                                </tr> 

                                <xsl:for-each select="//product/catalog_item">
                                    <tr>
                                        <td><xsl:value-of select="item_number"/></td>
                                        <td><xsl:value-of select="price"/></td>
                                        <td>
                                            <xsl:if test="@gender='Men'">M</xsl:if>
                                            <xsl:if test="@gender='Women'">W</xsl:if>
                                        </td>
                                        <!--Subtable for Small-->
                                        <td>
                                            <xsl:for-each select="size[@description='Small']">
                                                <table border="1" width="100%">
                                                    <xsl:for-each select='color_swatch'>
                                                        <tr>
                                                            <td><xsl:value-of select="."/></td>
                                                            <td><xsl:value-of select="@image"/></td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:for-each>
                                        </td>
                                        <!--Subtable for Medium-->
                                        <td>
                                            <xsl:for-each select="size[@description='Medium']">
                                                <table border="1" width="100%">
                                                    <xsl:for-each select='color_swatch'>
                                                        <tr>
                                                            <td><xsl:value-of select="."/></td>
                                                            <td><xsl:value-of select="@image"/></td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:for-each>
                                        </td>
                                        <!--Subtable for Large-->
                                        <td>
                                            <xsl:for-each select="size[@description='Large']">
                                                <table border="1" width="100%">
                                                    <xsl:for-each select='color_swatch'>
                                                        <tr>
                                                            <td><xsl:value-of select="."/></td>
                                                            <td><xsl:value-of select="@image"/></td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:for-each>
                                        </td>
                                        <!--Subtable for Extra Large-->
                                        <td>
                                            <xsl:for-each select="size[@description='Extra Large']">
                                                <table border="1" width="100%">
                                                    <xsl:for-each select='color_swatch'>
                                                        <tr>
                                                            <td><xsl:value-of select="."/></td><!--For current node-->
                                                            <td><xsl:value-of select="@image"/></td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:for-each>
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