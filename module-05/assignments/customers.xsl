<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">


<html>
<body>
<h1 style="text-align:center">Catalog</h1>
    <ul>
        <xsl:for-each select="catalog">
        <li>
            <article>

                <h3>
                    <xsl:value-of select="product/@product_id" />
                </h3>
            </article>
         </li>
             <li>
                <article>

                     <p>
                     <xsl:value-of select="product/@description" />
                 </p>
            </article>
      </li>
            <li>
                 <article>


                     <table border="3">
                            <tr bgcolor="#9999FF">
                                <th>Item number</th>
                                <th>Price</th>
                                <th>Gender</th>
                                <th>Small</th>
                                <th>Medium</th>
                                <th>Large</th>
                                <th>Extra large</th>
                            </tr>
                                <xsl:for-each select="product/catalog_item">
                                    <tr>
                                        <td>
                                <xsl:value-of select="item_number" />
                                        </td>
                                            <td>
                                             <xsl:value-of select="price" />
                                            </td>
                                        <td>
                                            <xsl:if test="@gender='Men'">M</xsl:if>
                                                <xsl:if test="@gender='Women'">W</xsl:if>
                                        </td>
                                            <td>
                                                <xsl:if test="size/@description='Small'">
                                                    <table border="2">
                                                        <tr bgcolor="#FFCC99">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch/@image" />
                                                                </td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:if>
                                            </td>
                                            <td>
                                                <xsl:if test="size/@description='Medium'">
                                                    <table border="2">
                                                        <tr bgcolor="#ffa500">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch/@image" />
                                                                </td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:if>
                                            </td>
                                            <td>
                                                <xsl:if test="size/@description='Large'">
                                                    <table border="2">
                                                        <tr bgcolor="#ffa500">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch/@image" />
                                                                </td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:if>
                                            </td>
                                            <td>
                                                <xsl:if test="size/@description='Extra large'">
                                                    <table border="2">
                                                        <tr bgcolor="#ffa500">
                                                            <th>Color</th>
                                                            <th>Image</th>
                                                        </tr>
                                                        <xsl:for-each select="size">
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="color_swatch/@image" />
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
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>