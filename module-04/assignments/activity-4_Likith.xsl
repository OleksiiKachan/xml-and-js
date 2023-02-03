<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head></head>
            <body>
                <h2>Table-I</h2>
                <table border = "2">
                    <tr>
                        <th>Product Name</th>
                        <th>Manufacturer ID</th>
                        <th>Description</th>
                        <th>USD Price</th>
                    </tr>

                    <xsl:for-each select = "products/product[@shippable='true']">
                            <tr>
                                <td><xsl:value-of select = "productName"/></td>
                                <td><xsl:value-of select = "manufacturer"/></td>
                                <td><xsl:value-of select = "description"/></td>
                                <td><xsl:value-of select = "prices/price[1]"/></td>
                            </tr>
                    </xsl:for-each>
                </table>
                <br/>
                <h2>TABLE-II</h2>
                <table border = "1">
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>USD Price</th>
                        <th>EURO Price</th>
                    </tr>

                    <xsl:for-each select = "products/product[manufacturer/@id='acme']">
                            <tr>
                                <td><xsl:value-of select = "productName"/></td>
                                <td><xsl:value-of select = "description"/></td>
                                <td><xsl:value-of select = "prices/price[1]"/></td>
                                <td><xsl:value-of select = "prices/price[3]"/></td>
                            </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>