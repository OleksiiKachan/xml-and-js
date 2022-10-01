<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/">
        <html>
            <body>
                <h2>Products</h2>
                
                <xsl:for-each select="/products/product">
                    <ul>
                        <li>
                            <h4 style="display:inline;">Product Name:   </h4>
                            <xsl:value-of select="productName"></xsl:value-of>
                        </li>
                        <li>
                            <h4 style="display:inline;">Manufacturer:   </h4>
                            <xsl:value-of select="manufacturer"></xsl:value-of>
                        </li>
                        <li>
                            <h4 style="display:inline;">Description:   </h4>
                            <xsl:value-of select="description"></xsl:value-of>
                        </li>
                        <li> 
                            <h4 style="display:inline;">Prices:   </h4>
                            <ul>
                                <xsl:for-each select="prices/price">
                                    <li>
                                        <xsl:value-of select="text()"></xsl:value-of>
                                    </li>
                                </xsl:for-each>
                            </ul>
                        </li>
                        <li>
                            <h4 style="display:inline;">Product Items:   </h4>
                            <xsl:value-of select="productItems"></xsl:value-of>
                        </li>
                    </ul>
                    <hr/>
                    
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>