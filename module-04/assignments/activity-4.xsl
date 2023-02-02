<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head></head>
            <body>
                <h2>TABLE 1</h2>
                <table border = "1">
                    <tr>
                        <th>PRODUCT NAME</th>
                        <th>MANUFACTURER ID</th>
                        <th>DESCRIPTION</th>
                        <th>USD PRICE</th>
                    </tr>

                    <xsl:for-each select = "products/product">
                        <xsl:if test = "@shippable = 'true'">
                            <tr>
                                <td><xsl:value-of select = "productName"/></td>
                                <td><xsl:value-of select = "manufacturer"/></td>
                                <td><xsl:value-of select = "description"/></td>
                                <td><xsl:value-of select = "prices/price[1]"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <br/>
                <h2>TABLE 2</h2>
                <table border = "1">
                    <tr>
                        <th>PRODUCT NAME</th>
                        <th>DESCRIPTION</th>
                        <th>USD PRICE</th>
                        <th>EURO PRICE</th>
                    </tr>
                    
                    <xsl:for-each select = "products/product">
                        <xsl:if test = "manufacturer[@id = 'acme']">
                            <tr>
                                <td><xsl:value-of select = "productName"/></td>
                                <td><xsl:value-of select = "description"/></td>
                                <td><xsl:value-of select = "prices/price[1]"/></td>
                                <td><xsl:value-of select = "prices/price[3]"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>