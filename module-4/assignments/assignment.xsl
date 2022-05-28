<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Catalog</h1>
                <xsl:for-each select="catalog/product/catalog_item">
                    <ul>
                        <li>
                            <article>
                                <xsl:value-of select="item_number" />
                                <xsl:value-of select="price" />
                                <xsl:for-each select="size">
                                    <ul>
                                        <li>
                                            <article>
                                                <xsl:value-of select="@description" />
                                                :
                                                <xsl:for-each select="color_swatch">
                                                    <xsl:value-of select="text()" />
                                                </xsl:for-each>
                                            </article>
                                        </li>
                                    </ul>
                                </xsl:for-each>
                            </article>
                        </li>
                    </ul>
                </xsl:for-each>
                <hr />
                <h3>
                    Product Id :
                    <xsl:value-of select="catalog/product/@product_id" />
                </h3>
                <p>
                    Description :
                    <xsl:value-of select="catalog/product/@description" />
                </p>
                <table border="1">
                    <tr bgcolor="#1E90FF">
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
                            <td>
                                <xsl:value-of select="item_number" />
                            </td>
                            <td>
                                <xsl:value-of select="price" />
                            </td>
                            <xsl:if test="@gender='Men'">
                                <td>M</td>
                            </xsl:if>
                            <xsl:if test="@gender='Women'">
                                <td>W</td>
                            </xsl:if>
                            <td>
                                <xsl:if test="size/@description='Small'">
                                    <table>
                                        <tr>
                                            <th>color</th>
                                            <th>image</th>
                                        </tr>
                                        <xsl:for-each select="./size/color_swatch">
                                            <xsl:if test="../@description='Small'">
                                                <tr>
                                                    <td>
                                                        <xsl:value-of select="." />
                                                    </td>
                                                    <td>
                                                        <xsl:value-of select="./@image" />
                                                    </td>
                                                </tr>
                                            </xsl:if>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size/@description='Medium'">
                                    <table>
                                        <tr>
                                            <th>color</th>
                                            <th>image</th>
                                        </tr>
                                        <xsl:for-each select="./size/color_swatch">
                                            <xsl:if test="../@description='Medium'">
                                                <tr>
                                                    <td>
                                                        <xsl:value-of select="." />
                                                    </td>
                                                    <td>
                                                        <xsl:value-of select="./@image" />
                                                    </td>
                                                </tr>
                                            </xsl:if>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size/@description='Large'">
                                    <table>
                                        <tr>
                                            <th>color</th>
                                            <th>image</th>
                                        </tr>
                                        <xsl:for-each select="./size/color_swatch">
                                            <xsl:if test="../@description='Large'">
                                                <tr>
                                                    <td>
                                                        <xsl:value-of select="." />
                                                    </td>
                                                    <td>
                                                        <xsl:value-of select="./@image" />
                                                    </td>
                                                </tr>
                                            </xsl:if>
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size/@description='Extra Large'">
                                    <table>
                                        <tr>
                                            <th>color</th>
                                            <th>image</th>
                                        </tr>
                                        <xsl:for-each select="./size/color_swatch">
                                            <xsl:if test="../@description='Extra Large'">
                                                <tr>
                                                    <td>
                                                        <xsl:value-of select="." />
                                                    </td>
                                                    <td>
                                                        <xsl:value-of select="./@image" />
                                                    </td>
                                                </tr>
                                            </xsl:if>
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