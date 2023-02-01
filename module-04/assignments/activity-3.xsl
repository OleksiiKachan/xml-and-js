<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">

    <xsl:template match="/">
        <html>
            <body>
                <h2>Product List</h2>
                <ul>
                    <xsl:for-each select="//product">
                        <li>
                            <xsl:value-of select="productName"/>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
