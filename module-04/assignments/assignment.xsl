<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/">

    
        <html>
            <body>
                <h1>Catalog</h1>
                <ul>
                    <xsl:for-each select="catalog">
                        <li>
                            <article>
                                <h3><xsl:value-of select="product/@product_id" /></h3>
                                <p><xsl:value-of select="product/@description"/></p>
                                <table border="1">
                                    <tr bgcolor="#FFCCC5">
                                        <th>item number</th>
                                        <th>price</th>
                                        <th>gender</th>
                                        <th>small</th>
                                        <th>medium</th>
                                        <th>large</th>
                                        <th>extra large</th>
                                    </tr>
                                    
                                    <xsl:for-each select="product/catalog_item">
                                        <tr>
                                            <td><xsl:value-of select="item_number"/></td>
                                            <td><xsl:value-of select="price"/></td>
                                            <td>
                                                <xsl:if test="@gender='Men'">M</xsl:if>
                                                <xsl:if test="@gender='Women'">W</xsl:if>
                                            </td>

                                            <td>
                                                <xsl:if test="size/@description='Small'">
                                                    <table border="1">
                                                        <tr bgcolor="#FFFD55">
                                                            <th>color</th>
                                                            <th>image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <th><xsl:value-of select="color_swatch"/></th>
                                                                <th><xsl:value-of select="color_swatch/@image"/></th>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:if>
                                            </td>

                                            <td>
                                                <xsl:if test="size/@description='Medium'">
                                                <table border="1">
                                                    <tr bgcolor="#FFFD55">
                                                            <th>color</th>
                                                            <th>image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <th><xsl:value-of select="color_swatch"/></th>
                                                                <th><xsl:value-of select="color_swatch/@image"/></th>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:if>
                                            </td>

                                            <td>
                                                <xsl:if test="size/@description='Large'">
                                                <table border="1">
                                                    <tr bgcolor="#FFFD55">
                                                            <th>color</th>
                                                            <th>image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <th><xsl:value-of select="color_swatch"/></th>
                                                                <th><xsl:value-of select="color_swatch/@image"/></th>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:if>
                                            </td>

                                            <td>
                                                <xsl:if test="size/@description='Extra Large'">
                                                <table border="1">
                                                    <tr bgcolor="#FFFD55">
                                                            <th>color</th>
                                                            <th>image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <th><xsl:value-of select="color_swatch"/></th>
                                                                <th><xsl:value-of select="color_swatch/@image"/></th>
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