<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/">
        <html>
            <body>
                <h2>Shippable items:</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Product Name</th>
                        <th>Manufacturer ID</th>
                        <th>Description</th>
                        <th>USD price</th>
                    </tr>
                    
                    <xsl:for-each select="products/product">
                        <xsl:if test="@shippable = 'true'">
                            <tr>
                                <th><xsl:value-of select="productName"/></th>
                                <th><xsl:value-of select="manufacturer/@id"/></th>
                                <th><xsl:value-of select="description"/></th>
                                <th><xsl:value-of select="prices/price[1]"/></th>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>

                <h2>Manufacturer ID is "acme":</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>USD price</th>
                        <th>Euro price</th>
                    </tr>

                    <xsl:for-each select="products/product">
                        <xsl:if test="manufacturer/@id = 'acme'">
                            <tr>
                                <th><xsl:value-of select="productName"/></th>
                                <th><xsl:value-of select="description"/></th>
                                <th><xsl:value-of select="prices/price[1]"/></th>
                                <th><xsl:value-of select="prices/price[3]"/></th>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>