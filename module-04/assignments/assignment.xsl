<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

    <xsl:template match="/">

        <html>
            <head>
                <title> Catalog </title>
            </head>
            <body>
                <h2> Assignment module-04 </h2>
                
                <ul>
                    <li><h3> Catalog </h3></li>
                    <li><h3><xsl:value-of select="//product/@product_id" /></h3></li>
                    <li><p><xsl:value-of select="//product/@description" /></p></li>
                </ul>
                <table border="1">
                    <tr>
                        <th>item number</th>
                        <th>price</th>
                        <th>gender</th>
                        <th>small</th>
                        <th>medium</th>
                        <th>large</th>
                        <th>exta large</th>
                    </tr>
                    <xsl:for-each select="catalog/product/catalog_item">
                        <tr>
                        
                            <td><xsl:value-of select="item_number" /></td>
                            <td><xsl:value-of select="price" /></td>
                            <xsl:if test="@gender = 'Men'">
                                <td>M</td>
                            </xsl:if>
                            <xsl:if test="@gender = 'Women'">
                                <td>W</td>
                            </xsl:if>
                            <xsl:choose>
                                <xsl:when test="size/@description = 'Small'">
                                    <td>
                                        <xsl:for-each select="//size" >
                                            <xsl:value-of select="size/color_swatch">
                                        </xsl:for-each>
                                    </td>
                                    <td>
                                        <xsl:for-each select="//size">
                                            <xsl:value-of select="size/color_swatch/@image" />
                                        </xsl:for-each>
                                    </td>
                                </xsl:when>
                                <xsl:when test="size/@description = 'Medium'">
                                    <td>
                                        <xsl:for-each select="//size" >
                                            <xsl:value-of select="size/color_swatch">
                                        </xsl:for-each>
                                    </td>
                                    <td>
                                        <xsl:for-each select="//size">
                                            <xsl:value-of select="size/color_swatch/@image" />
                                        </xsl:for-each>
                                    </td>
                                </xsl:when>
                                <xsl:when test="size/@description = 'Large'">
                                    <td>
                                        <xsl:for-each select="//size" >
                                            <xsl:value-of select="size/color_swatch">
                                        </xsl:for-each>
                                    </td>
                                    <td>
                                        <xsl:for-each select="//size">
                                            <xsl:value-of select="size/color_swatch/@image" />
                                        </xsl:for-each>
                                    </td>
                                </xsl:when>
                                <xsl:when test="size/@description = 'Exrta Large'">
                                    <td>
                                        <xsl:for-each select="//size" >
                                            <xsl:value-of select="size/color_swatch">
                                        </xsl:for-each>
                                    </td>
                                    <td>
                                        <xsl:for-each select="//size">
                                            <xsl:value-of select="size/color_swatch/@image" />
                                        </xsl:for-each>
                                    </td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                </table>



                    <xsl:for-each select="catalog/product/catalog_item">
                    <li><article> </article></li>
                    <li><article></article></li>
                    </xsl:for-each>
                

            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>