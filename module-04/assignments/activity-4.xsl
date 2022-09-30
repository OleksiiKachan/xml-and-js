<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
        <html>
            <body>
                <h2>Products Activity 4</h2>
                    <table border="6" style="margin-bottom: 50px; font-family: Verdana">
                    <tr bgcolor="ADD8E6">
                        <th>Product name</th>
                        <th>Manufacturer id</th>
                        <th>Description</th>
                        <th>USD price</th>
                        
                        <xsl:for-each select="products/product">
                        <xsl:if test= "@shippable='true'">
                            <tr>
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="manufacturer"/></td>
                                <td><xsl:value-of select="description"/></td>
                                <td><xsl:value-of select="prices/price[1]"/></td>
                            </tr>
                            </xsl:if>
                        </xsl:for-each>
                    </tr>
                    </table>

                    <table border="6" style="font-family: Verdana;">
                    <tr bgcolor="FFCCCB">
                        <th>Product name</th>
                        <th>Description</th>
                        <th>USD Price</th>
                        <th>Euro price</th>
                        
                        <xsl:for-each select="products/product">
                        <xsl:if test= "manufacturer[@id = 'acme']">
                            <tr>
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="description"/></td>
                                <td><xsl:value-of select="prices/price[1]"/></td>
                                <td><xsl:value-of select="prices/price[3]"/></td>
                            </tr>
                            </xsl:if>
                        </xsl:for-each>
                    </tr>
                    </table>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>