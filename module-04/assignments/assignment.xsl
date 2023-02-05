<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <head>
            <title>
                Catalog
            </title>
        </head>
        <body>
            <ul><h1>Catalog</h1>
            <xsl:for-each select="//catalog/product">
                <li>
                    <article>
                        <h3><xsl:value-of select="//catalog/product/@product_id"/></h3>
                        <p><xsl:value-of select="//catalog/product/@description"/></p>

                        <table border="1">
                            <tr bgcolor="#778899">
                                <th>Items number</th>
                                <th>Price</th>
                                <th>Gender</th>
                                <th>Small</th>
                                <th>Medium</th>
                                <th>Large</th>
                                <th>Extra Large</th>
                            </tr>

                                    <xsl:for-each select="//catalog/product/catalog_item">
                                        <tr>
                                            <td><xsl:value-of select="item_number"/></td>
                                            <td><xsl:value-of select="price"/></td>
                                            <td>
                                                <xsl:choose>
                                                    <xsl:when test="@gender='Men'">M
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                     W
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </td>
                                            <td>
                                                <xsl:for-each select="size[@description='Small']">
                                                    <table border ="1">
                                                        <tr bgcolor="#778899">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="color_swatch">
                                                            <tr>
                                                                <td><xsl:value-of select="."/></td>
                                                                <td><xsl:value-of select="@image"/></td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:for-each>
                                            </td>
                                            <td>
                                                <xsl:for-each select="size[@description='Medium']">
                                                    <table border ="1">
                                                        <tr bgcolor="#778899">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="color_swatch">
                                                            <tr>
                                                                <td><xsl:value-of select="."/></td>
                                                                <td><xsl:value-of select="@image"/></td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:for-each>
                                            </td>
                                            <td>
                                                <xsl:for-each select="size[@description='Large']">
                                                    <table border ="1">
                                                        <tr bgcolor="#778899">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="color_swatch">
                                                            <tr>
                                                                <td><xsl:value-of select="."/></td>
                                                                <td><xsl:value-of select="@image"/></td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:for-each>
                                            </td>
                                            <td>
                                                <xsl:for-each select="size[@description='Extra Large']">
                                                    <table border ="1">
                                                        <tr bgcolor="#778899">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="color_swatch">
                                                            <tr>
                                                                <td><xsl:value-of select="."/></td>
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