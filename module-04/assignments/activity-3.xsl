<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <head></head>
            <body>
                <h1>PRODUCT NAMES</h1>
                <br/>
                <xsl:for-each select = "products/product">
                    <ul>
                        <li><xsl:value-of select = "productName"/></li>
                    </ul>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>