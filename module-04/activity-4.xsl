<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Table 1</h2>
                <table border="1">
                    <tr>
                        <th>Product name</th>
                        <th>Manufacturer id</th>
                        <th>Description</th>
                        <th>USD price</th>
                    </tr>
                    <xsl:for-each select="//product[@shippable='true']">
                        <tr>
                            <td>
                                <xsl:value-of select="productName" />
                            </td>
                            <td>
                                <xsl:value-of select="manufacturer/@id" />
                            </td>
                            <td>
                                <xsl:value-of select="description" />
                            </td>
                            <td>
                                <xsl:value-of select="prices/price" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h2>Table 2</h2>
                <table border="1">
                    <tr>
                        <th>Product name</th>
                        <th>Description</th>
                        <th>USD price</th>
                        <th>Price</th>
                    </tr>
                    <xsl:for-each select="//manufacturer[@id='acme']/..">
                            <tr>
                            <td>
                                <xsl:value-of select="productName" />
                            </td>
                            <td>
                                <xsl:value-of select="description" />
                            </td>
                            <td>
                                <xsl:value-of select="prices/price[1]" />
                            </td>
                            <td>
                                <xsl:value-of select="prices/price[3]" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>