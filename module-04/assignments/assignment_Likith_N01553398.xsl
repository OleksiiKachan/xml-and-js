<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Product Catalog</h1>

                <xsl:for-each select="catalog/product/catalog_item">

                <p><xsl:value-of select="../@product_id"/></p>
                <h3><xsl:value-of select="../@description"/></h3>

                <table border="10">
                    <tr>
                        <th>Item Number</th>
                        <th>Price</th> 
                        <th>Gender</th>
                        <th>Size</th>
                    </tr>
                        <xsl:for-each select=".">
                            <tr>
                                <td><xsl:value-of select="item_number"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <td>
                                    <xsl:choose>
                                        <xsl:when test="@gender='Men'">Male</xsl:when>
                                        <xsl:when test="@gender='Women'">Female</xsl:when>
                                        <xsl:otherwise>N/A</xsl:otherwise>
                                    </xsl:choose>
                                </td>
                               
                                <xsl:for-each select="size[@description='Small']">
                                 <td>
                                    <table border="10">
                                    <tr>
                                        <th> Small</th>
                                    </tr>

                                    <tr>
                                        <th> description</th>
                                        <th> color </th>
                                        <th> Image </th>
                                    </tr>

                                    <tr>
                                        <td><xsl:value-of select="./@description"/></td>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./color_swatch/@image"/></td>
                                    </tr>
                                    </table>
                                </td>
                                </xsl:for-each>

                                <xsl:for-each select="size[@description='Medium']">
                                 <td>
                                    <table border="10">
                                    <tr>
                                        <th> Medium</th>
                                    </tr>

                                    <tr>
                                        <th> description</th>
                                        <th> color </th>
                                        <th> Image </th>
                                    </tr>

                                    <tr>
                                        <td><xsl:value-of select="./@description"/></td>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./color_swatch/@image"/></td>
                                    </tr>
                                    </table>
                                </td>
                                </xsl:for-each>


                                <xsl:for-each select="size[@description='Large']">
                                 <td>
                                    <table border="10">
                                    <tr>
                                        <th> Large</th>
                                    </tr>

                                    <tr>
                                        <th> description</th>
                                        <th> color </th>
                                        <th> Image </th>
                                    </tr>

                                    <tr>
                                        <td><xsl:value-of select="./@description"/></td>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./color_swatch/@image"/></td>
                                    </tr>
                                    </table>
                                </td>
                                </xsl:for-each>

                                <xsl:for-each select="size[@description='Extra Large']">
                                 <td>
                                    <table border="10">
                                    <tr>
                                        <th> Extra Large</th>
                                    </tr>

                                    <tr>
                                        <th> description</th>
                                        <th> color </th>
                                        <th> Image </th>
                                    </tr>

                                    <tr>
                                        <td><xsl:value-of select="./@description"/></td>
                                        <td><xsl:value-of select="."/></td>
                                        <td><xsl:value-of select="./color_swatch/@image"/></td>
                                    </tr>
                                    </table>
                                </td>
                                </xsl:for-each>


                            </tr>
                        </xsl:for-each>
                 
                </table>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
