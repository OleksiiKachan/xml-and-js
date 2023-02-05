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
                    <xsl:for-each select="catalog/product">
                        <li>
                            <article>
                                <h3>
                                    <xsl:value-of select="@product_id" />
                                </h3>
                            </article>
                        </li>
                        <li>
                            <article>
                                <p>
                                    <xsl:value-of select="@description" />
                                </p>
                            </article>
                        </li>
                    </xsl:for-each>
                    <li>
                        <article>

                            <table border="1">
                                <tr>
                                    <th>item number</th>
                                    <th>price</th>
                                    <th>gender</th>
                                    <th>small</th>
                                    <th>medium</th>
                                    <th>large</th>
                                    <th>extra large</th>
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
                                            </xsl:choose>
                                        </td>
                                        <td>
                                            <xsl:if test="size[@description='Small']">
                                                <table border="1">
                                                    <tr>
                                                        <th>color</th>
                                                        <th>image</th>
                                                    </tr>
                                                    <xsl:for-each
                                                        select="size[@description='Small']/color_swatch">
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="."></xsl:value-of>
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="@image"></xsl:value-of>

                                                            </td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test="size[@description='Medium']">
                                                <table border="1">
                                                    <tr>
                                                        <th>color</th>
                                                        <th>image</th>
                                                    </tr>
                                                    <xsl:for-each
                                                        select="size[@description='Medium']/color_swatch">
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="."></xsl:value-of>
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="@image"></xsl:value-of>

                                                            </td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test="size[@description='Large']">
                                                <table border="1">
                                                    <tr>
                                                        <th>color</th>
                                                        <th>image</th>
                                                    </tr>
                                                    <xsl:for-each
                                                        select="size[@description='Large']/color_swatch">
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="."></xsl:value-of>
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="@image"></xsl:value-of>

                                                            </td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test="size[@description='Extra Large']">
                                                <table border="1">
                                                    <tr>
                                                        <th>color</th>
                                                        <th>image</th>
                                                    </tr>
                                                    <xsl:for-each
                                                        select="size[@description='Extra Large']/color_swatch">
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="."></xsl:value-of>
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="@image"></xsl:value-of>

                                                            </td>
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