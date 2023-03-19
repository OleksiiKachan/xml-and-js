<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
    <xsl:template match="/">
        <html>
            <head>
                <title>Catalog</title>
                <style type="text/css">
                table {
                    border-collapse: collapse;
                    width: 80%;
                }

                th, td {
                    border: 1px solid grey;
                    padding: 8px;
                    text-align: left;
                }

                #insidetable{
                    width:100%;
                    background-color: lightgrey;
                }

                </style>
            </head>
            <body>
                <h1>Catalog</h1>
                <ul>
                <xsl:for-each select="catalog/product">
                    <li>
                        <article>
                            <h3>
                                <xsl:value-of select="@product_id"/>
                            </h3>
                            <p>
                                <xsl:value-of select="@description"/>
                            </p>
                            <table>
                                <tr>
                                    <th>Item Number</th>
                                    <th>Price</th>
                                    <th>Gender</th>
                                    <th>Small</th>
                                    <th>Medium</th>
                                    <th>Large</th>
                                    <th>Extra-Large</th>
                                </tr>

                                <xsl:for-each select="catalog_item">
                                <tr>
                                    <td>
                                        <xsl:value-of select="item_number"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="price"/>
                                    </td>
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender='Men'">Men</xsl:when>
                                            <xsl:when test="@gender='Women'">Women</xsl:when>
                                            <xsl:otherwise></xsl:otherwise>
                                        </xsl:choose>
                                    </td>

                                    <td>
                                    <xsl:for-each select="size[@description='Small']">
                                        <table id="insidetable">
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                        </xsl:for-each>
                                        </table>
                                    </xsl:for-each>
                                    </td>

                                    <td>
                                    <xsl:for-each select="size[@description='Medium']">
                                        <table id="insidetable">
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                        </xsl:for-each>
                                        </table>
                                    </xsl:for-each>
                                    </td>

                                    <td>
                                    <xsl:for-each select="size[@description='Large']">
                                        <table id="insidetable">
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                        </xsl:for-each>
                                        </table>
                                    </xsl:for-each>
                                    </td>

                                    <td>
                                    <xsl:for-each select="size[@description='Extra Large']">
                                        <table id="insidetable">
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="."/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                        </xsl:for-each>
                                        </table>
                                    </xsl:for-each>
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