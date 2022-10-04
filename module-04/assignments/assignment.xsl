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
                    <li><article><h3> Catalog </h3></article></li>
                    <li><article><h3><xsl:value-of select="//product/@product_id" /></h3></article></li>
                    <li><article><p><xsl:value-of select="//product/@description" /></p></article></li>
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
                            <td><xsl:if test="@gender = 'Men'">M</xsl:if></td>
                            <td><xsl:if test="@gender = 'Women'">W</xsl:if></td>

                            <td>
                                <!--<p>out  small</p>-->
                                <xsl:if test="//catalog_item/size/@desciption='Small'">
                                    <p>in small</p>
                                        <!--<xsl:for-each select="size" >
                                            <xsl:value-of select="color_swatch" />
                                        </xsl:for-each>-->
                                    
                                </xsl:if>
                            </td>

                            <td><xsl:apply-templates select="size[@descsription='Small']" /></td>
                            <td><xsl:apply-templates select="size[@descsription='Medium']" /></td>
                            <td><xsl:apply-templates select="size[@descsription='Large']" /></td>
                            <td><xsl:apply-templates select="size[@descsription='Extra Large']" /></td>
                            <!--<xsl:choose>
                                <xsl:when test="size/@description = 'Small'">
                                    <td>
                                    <xsl:if test="size/@description = 'Small'">
                                        <xsl:for-each select="size" >
                                            <xsl:value-of select="color_swatch" />
                                        </xsl:for-each>
                                    </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:for-each select="size">
                                            <xsl:value-of select="color_swatch/@image" />
                                        </xsl:for-each>
                                    </td>
                                    
                                </xsl:when>
                                <xsl:when test="size/@description = 'Medium'">
                                    <td>
                                        <xsl:for-each select="//size" >
                                            <xsl:value-of select="size/color_swatch" />
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
                                            <xsl:value-of select="size/color_swatch" />
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
                                            <xsl:value-of select="size/color_swatch" />
                                        </xsl:for-each>
                                    </td>
                                    <td>
                                        <xsl:for-each select="//size">
                                            <xsl:value-of select="size/color_swatch/@image" />
                                        </xsl:for-each>
                                    </td>
                                </xsl:when>
                                <xsl:otherwise><td></td><td></td></xsl:otherwise>
                            </xsl:choose>-->
                        </tr>
                    </xsl:for-each>
                </table>

            </body>
        </html>
    </xsl:template>

    <xsl:template match="size">
        <table border="1">
            <tr>
                <th>Color </th>
                <th>Image </th>
            </tr>
            <xsl:for-each select="color_swatch">
                <tr>
                    <td><xsl:value-of select="." /></td>
                    <td><xsl:value-of select="@image" /></td>
                </tr>
            </xsl:for-each>
        </table>        
    </xsl:template>
</xsl:stylesheet>