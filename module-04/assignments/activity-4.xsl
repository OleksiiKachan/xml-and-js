<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/">
        <html>
            <body>
                <h2 style="color: #48C9B0; text-decoration: underline;">Shippable  items true table</h2>
                <table border="1">
                    <tr bgcolor="#BB8FCE">
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
                <h2 style="color: #EC7063; text-decoration: underline;" >Manufacturer ID is "acme" table</h2>
                <table border="1">
                    <tr bgcolor="#7FB3D5">
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