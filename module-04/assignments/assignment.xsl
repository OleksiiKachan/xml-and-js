<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <head></head>
            <body>
                <h1>CATALOG</h1>
                <xsl:for-each select = "catalog/product">   
                    <ul>
                        <li>
                            <article>
                                <h3><xsl:value-of select = "@product_id"/></h3>
                            </article>
                        </li>
                        <li>
                            <article>
                                <p><xsl:value-of select = "@description"/></p>
                            </article>
                        </li>
                    </ul>
                </xsl:for-each>
                <ul>
                    <li>
                        <article>
                            <table border="1">
                                <tr bgcolor = "#00FF00">
                                    <th>ITEM NUMBER</th>
                                    <th>PRICE</th>
                                    <th>GENDER</th>
                                    <th>SMALL</th>
                                    <th>MEDIUM</th>
                                    <th>LARGE</th>
                                    <th>EXTRA LARGE</th>
                                </tr>

                                <xsl:for-each select = "catalog/product/catalog_item">
                                    <tr>
                                        <td><xsl:value-of select = "item_number"/></td>
                                        <td><xsl:value-of select = "price"/></td>
                                        <td>
                                            <xsl:choose>
                                                <xsl:when test = "@gender = 'Men'">M</xsl:when>
                                                <xsl:when test = "@gender = 'Women'">W</xsl:when>
                                            </xsl:choose>
                                        </td>
                                        <td>
                                            <xsl:if test = "size[@description = 'Small']">
                                                <table border = "1">
                                                    <tr bgcolor = "#DCDCDC">
                                                        <th>COLOR</th>
                                                        <th>IMAGE</th>
                                                    </tr>
                                                    <xsl:for-each select = "size[@description = 'Small']/color_swatch">
                                                        <tr>
                                                            <th><xsl:value-of select = "." /></th>
                                                            <th><xsl:value-of select = "@image"/></th>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test = "size[@description = 'Medium']">
                                                <table border = "1">
                                                    <tr bgcolor = "#DCDCDC">
                                                        <th>COLOR</th>
                                                        <th>IMAGE</th>
                                                    </tr>
                                                    <xsl:for-each select = "size[@description = 'Medium']/color_swatch">
                                                        <tr>
                                                            <th><xsl:value-of select = "." /></th>
                                                            <th><xsl:value-of select = "@image"/></th>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test = "size[@description = 'Large']">
                                                <table border = "1">
                                                    <tr bgcolor = "#DCDCDC">
                                                        <th>COLOR</th>
                                                        <th>IMAGE</th>
                                                    </tr>
                                                    <xsl:for-each select = "size[@description = 'Large']/color_swatch">
                                                        <tr>
                                                            <th><xsl:value-of select = "." /></th>
                                                            <th><xsl:value-of select = "@image"/></th>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test = "size[@description = 'Extra Large']">
                                                <table border = "1">
                                                    <tr bgcolor = "#DCDCDC">
                                                        <th>COLOR</th>
                                                        <th>IMAGE</th>
                                                    </tr>
                                                    <xsl:for-each select = "size[@description = 'Extra Large']/color_swatch">
                                                        <tr>
                                                            <th><xsl:value-of select = "." /></th>
                                                            <th><xsl:value-of select = "@image"/></th>
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