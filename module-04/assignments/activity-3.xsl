<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <h2>Products</h2>
            <table border="1">
                <tr bgcolor="#23873e">
                    <th>Product Name</th>
                </tr>
                <xsl:for-each select="products/product">
                    <tr bgcolor="#eeeee4">
                        <td>
                            <xsl:value-of select="productName"></xsl:value-of>
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>   