<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<!--main title is "Catalog"-->
<h1>CATALOG</h1>
    <xsl:for-each select="catalog/product/catalog_item">
    <ul>
        <!--use html list tag to display catalog-->
        <li>
            <!--render each item as `<article>` inside list item tag-->
            <article>
                <xsl:value-of select="item_number"/>
                <xsl:value-of select="price"/>
                <xsl:for-each select="size">
                    <ul>
                        <li>
                            <article>
                                <xsl:value-of select="@description"/>
                                <xsl:for-each select="color_swatch">
                                <xsl:value-of select="text()"/>
                                </xsl:for-each>
                            </article>
                        </li>
                    </ul>
                </xsl:for-each>
            </article>
        </li>
    </ul>
    </xsl:for-each>
        <!--display product id as h3-->
        <h3>PRODUCT ID-----<xsl:value-of select="catalog/product/@product_id"/></h3>
        <!--display product description as paragraph-->
        <p>DSECRIPTION-----<xsl:value-of select="catalog/product/@description"/></p>
        <table border="2">
            <tr>
                <!--render table of catalog items with columns: item number, price, gender, small, medium, large, extra large-->
                <th>ITEM NUMBER</th>
                <th>PRICE</th>
                <th>GENDER</th>
                <th>SMALL</th>
                <th>MEDIUM</th>
                <th>LARGE</th>
                <th>EXTRA LARGE</th>
            </tr>
            <xsl:for-each select="catalog/product/catalog_item">
                <tr>
                    <td><xsl:value-of select="item_number"/></td>
                    <td><xsl:value-of select="price"/></td>
                        <!--for gender column render M for Men, W for Women-->
                        <xsl:if test="@gender='Men'"><td>M</td></xsl:if>
                        <xsl:if test="@gender='Women'"><td>W</td></xsl:if>
                    <!--inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image-->
                    <td><xsl:if test="size/@description='Small'">
                        <table>
                            <tr>
                                <th>COLOR</th>
                                <th>IMAGE</th>
                            </tr>
                                <xsl:for-each select="./size/color_swatch">
                                    <xsl:if test="../@description='Small'">
                                         <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="./@image"/></td>
                                         </tr>
                                    </xsl:if>
                                </xsl:for-each>
                        </table>
                        </xsl:if>
                    </td>
                    <td><xsl:if test="size/@description='Medium'">
                        <table>
                            <tr>
                                <th>COLOR</th>
                                <th>IMAGE</th>
                            </tr>
                                <xsl:for-each select="./size/color_swatch">
                                    <xsl:if test="../@description='Medium'">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="./@image"/></td>
                                        </tr>
                                    </xsl:if>
                                </xsl:for-each>
                        </table>
                        </xsl:if>
                    </td>
                    <td><xsl:if test="size/@description='Large'">
                        <table>
                            <tr>
                                <th>COLOR</th>
                                <th>IMAGE</th>
                            </tr>
                                <xsl:for-each select="./size/color_swatch">
                                    <xsl:if test="../@description='Large'">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="./@image"/></td>
                                        </tr>
                                    </xsl:if>
                                </xsl:for-each>
                        </table>
                        </xsl:if>
                    </td>
                    <td><xsl:if test="size/@description='Extra Large'">
                        <table>
                            <tr>
                                <th>COLOR</th>
                                <th>IMAGE</th>
                            </tr>
                                <xsl:for-each select="./size/color_swatch">
                                    <xsl:if test="../@description='Extra Large'">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="./@image"/></td>
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