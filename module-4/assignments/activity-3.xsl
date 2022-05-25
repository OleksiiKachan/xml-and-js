<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 style="margin-left:0.5em">Products</h1>
                <xsl:for-each select="products/product">
                    <div style="margin:1em">
                        <xsl:value-of select="productName" />
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>