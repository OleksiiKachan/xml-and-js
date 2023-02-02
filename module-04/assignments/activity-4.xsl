<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h3>Table - 1</h3>
                <table border="1">
                    <tr>
                        <th>Product name</th>
                        <th>Manufacturer id</th>
                        <th>Description</th>
                        <th>USD price</th>
                    </tr>
                    <xsl:for-each select="products/product[@shippable = 'true']">
                            <tr>
                                <td>
                                    <xsl:value-of select="productName"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="manufacturer/@id"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="description"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="prices/price[1]"></xsl:value-of>
                                </td>
                            </tr>
                    </xsl:for-each>
                </table>
                <h3>Table - 2</h3>
                <table border="1">
                    <tr>
                        <th>Product name</th>
                        <th>Manufacturer id</th>
                        <th>USD price</th>
                        <th>Euro price</th>
                    </tr>
                    <xsl:for-each select="products/product[manufacturer/@id = 'acme']">
                            <tr>
                                <td>
                                    <xsl:value-of select="productName"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="manufacturer/@id"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="prices/price[1]"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="prices/price[3]"></xsl:value-of>
                                </td>
                            </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>