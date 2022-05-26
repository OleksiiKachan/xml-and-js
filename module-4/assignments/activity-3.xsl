<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
        <body>
        <h2 style="background-color:teal;color:white;font-size:40px;width:max-content">Products</h2>
            <span style="font-weight:bold;font-family:Times New Roman;color:Blue">
                <xsl:for-each select="products/product">
                    <h4>
                        <span>&#11088;<xsl:value-of select="productName"/></span>
                    </h4>
                </xsl:for-each>
            </span>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>