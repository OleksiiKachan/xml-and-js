<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h2>Products name list: </h2>
                <ol>
                <xsl:for-each select="products/product">
                <h4> 
                    <li>
                        <xsl:value-of select="productName"/>
                    </li>
                </h4>
                <!-- <br/> -->
                </xsl:for-each>
            </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>