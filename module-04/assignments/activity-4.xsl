<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

    <xsl:template match="/">

        <html>

            <body>
                <h2><center> Activity - 04 </center></h2>
                <h2><center> Table 1 </center></h2>
                <table border="2">
                    <tr bgcolor="aqua">
                        <th>Product Name </th>
                        <th> manufacturer id </th>
                        <th> description </th>
                        <th> USD price </th>

                    </tr>
                    <xsl:for-each select="products/product">
                        <xsl:if test="@shippable = 'true'">
                            <tr>
                                <td> <xsl:value-of select="productName" /></td>
                                <td><xsl:value-of select="manufacturer/@id" /></td>
                                <td><xsl:value-of select="description" /></td>
                                
                                <td><xsl:value-of select="prices/price[1]" /></td>

                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>

                <h2><center> Table 2 </center></h2>
                <table border="2">
                    <tr bgcolor="pink">
                        <th>Product Name </th>
                        <th> description </th>
                        <th> Euro price </th>
                    </tr>
                    <xsl:for-each select="products/product">
                        <xsl:if test="//manufacturer/@id = 'acme'">
                            <tr>
                                <td> <xsl:value-of select="productName" /></td>
                                <td><xsl:value-of select="description" /></td>              
                                <td><xsl:value-of select="prices/price[3]" /></td>

                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
