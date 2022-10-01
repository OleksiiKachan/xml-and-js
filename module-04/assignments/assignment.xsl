<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">  
    <xsl:template match="/"> 
        <html>
            <body>
                <h2>Catalog</h2> 
                    <ol>
                        <xsl:for-each select="catalog/product">
                            <li>
                                <article>
                                    <h3> product id: <xsl:value-of select="@product_id"/></h3>
                                    <p> description: <xsl:value-of select="@description"/></p>
                                    <table border="2"> 
                                        <tr> 
                                            <th>item number</th> 
                                            <th>price</th> 
                                            <th>gender</th> 
                                            <th>small</th>
                                            <th>medium</th>
                                            <th>large</th>
                                            <th>extra large</th>
                                        </tr> 
                                        <xsl:for-each select="catalog_item">
                                            <tr> 
                                                <td><xsl:value-of select="item_number"/></td> 
                                                <td><xsl:value-of select="price"/></td> 
                                                <td> 
                                                    <xsl:choose>
                                                        <xsl:when test="@gender='Men'">M</xsl:when>
                                                        <xsl:otherwise>W</xsl:otherwise>
                                                    </xsl:choose>
                                                </td> 
                                                <td>
                                                    <xsl:for-each select="size">
                                                        <xsl:if test="@description='Small'">
                                                            <table border="2">
                                                                <tr> 
                                                                    <th>Color</th> 
                                                                    <th>Image</th> 
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="text()"/></td> 
                                                                        <td><xsl:value-of select="@image"/></td> 
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </table> 
                                                        </xsl:if>
                                                    </xsl:for-each>
                                                </td>
                                                <td>
                                                    <xsl:for-each select="size">
                                                        <xsl:if test="@description='Medium'">
                                                            <table border="2">
                                                                <tr> 
                                                                    <th>Color</th> 
                                                                    <th>Image</th> 
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="text()"/></td> 
                                                                        <td><xsl:value-of select="@image"/></td> 
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </table> 
                                                        </xsl:if>
                                                    </xsl:for-each>
                                                </td>
                                                <td>
                                                     <xsl:for-each select="size">
                                                        <xsl:if test="@description='Large'">
                                                            <table border="2">
                                                                <tr> 
                                                                    <th>Color</th> 
                                                                    <th>Image</th> 
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="text()"/></td> 
                                                                        <td><xsl:value-of select="@image"/></td> 
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </table> 
                                                        </xsl:if>
                                                    </xsl:for-each>
                                                </td>
                                                <td>
                                                    <xsl:for-each select="size">
                                                        <xsl:if test="@description='Extra Large'">
                                                            <table border="2">
                                                                <tr> 
                                                                    <th>Color</th> 
                                                                    <th>Image</th> 
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="text()"/></td> 
                                                                        <td><xsl:value-of select="@image"/></td> 
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </table> 
                                                        </xsl:if>
                                                    </xsl:for-each>
                                                </td>
                                            </tr> 
                                        </xsl:for-each>
                                    </table> 
                                </article>
                            </li>
                        </xsl:for-each>
                    </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>