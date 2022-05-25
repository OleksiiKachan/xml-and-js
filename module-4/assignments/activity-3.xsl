<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Product Information</h1>
                <xsl:for-each select="products/product">
                    <h1>
                        <xsl:value-of select="@sku"></xsl:value-of>
                    </h1>
                    <ul>
                        <li>
                            <xsl:value-of select="productName"></xsl:value-of>
                        </li>
                        <li>
                            <xsl:value-of select="manufacturer"></xsl:value-of>
                        </li>
                        <li>
                            <xsl:value-of select="description"></xsl:value-of>
                        </li>
                        <li>
                            <xsl:value-of select="productItems"></xsl:value-of>
                        </li>
                    </ul>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>