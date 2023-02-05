<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Catalog</title>
            </head>
            <body>
                <h2>catalog</h2>
                <ul>
                    <li>
                        <article>
                            <h3>
                                <xsl:value-of select="catalog/product/@product_id"></xsl:value-of>
                            </h3>
                            <p>
                                <xsl:value-of select="catalog/product/@description"></xsl:value-of>
                            </p>
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
                                <xsl:for-each select="catalog/product/catalog_item">
                                <tr>
                                    <td>
                                        <xsl:value-of select="item_number"></xsl:value-of>
                                    </td>
                                    <td>
                                        <xsl:value-of select="price"></xsl:value-of>
                                    </td>
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender='Men'">M</xsl:when>
                                            <xsl:when test="@gender='Women'">W</xsl:when>
                                            <xsl:otherwise></xsl:otherwise>
                                        </xsl:choose>
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
                                </xsl:for-each>
                            </table>
                        </article>
                    </li>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>