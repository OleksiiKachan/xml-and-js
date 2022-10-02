<!--<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

    <xsl:template>

        <html>

            <body>
                <h2><center> Table 1 </center></h2>
                <table border="2">
                    <tr>
                        <th>Product Name </th>
                        <th> manufacturer id </th>
                        <th> description </th>
                        <th> USD price </th>

                    </tr>
                    <xsl:for-each select="/products/product">
                        <xsl:if shippable = "true">
                            <tr>
                                <td> <xsl:value-of select="productName" /></td>
                                <td><xsl:value-of select="manufacturer/@id" /></td>
                                <td><xsl:value-of select="description" /></td>
                                
                                <td><xsl:value-of select="prices" /></td>

                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>-->

<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

    <xsl:template match="/">

        <html>
            <body>
                <h2><center> Products </center></h2>

                <table border="2">
                    <tr bgcolor="aqua">
                        <th> sku </th>
                        <th> created date </th>
                        <th> Shippable item? </th>
                        <th> name </th>
                        <th> manufacturer id </th>
                        <th> manufacturer </th>
                        <th> description </th>
                        <th> prices </th>
                        <th> product items </th>
                    </tr>

                    <xsl:for-each select="/products/product">

                        <tr>
                            <td><xsl:value-of select="@sku" /></td>
                            <td><xsl:value-of select="@createdAt" /></td>
                            <td><xsl:value-of select="@shippable" /></td>
                            <td><xsl:value-of select="productName" /></td>
                            <td><xsl:value-of select="manufacturer/@id" /></td>
                            <td><xsl:value-of select="manufacturer" /></td>
                            <td><xsl:value-of select="description" /></td>
                            <td><xsl:value-of select="prices" /></td>
                            <td><xsl:value-of select="productItems" /></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>  
</xsl:stylesheet>