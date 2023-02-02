<?xml version="1.0" encoding="UTF-8"?>

    <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> 
        <html> 
            <body>
                <h2>Products 1</h2>
                    <ol>
                        <xsl:for-each select="products/product[@shippable='true']"> 
                        <li>
                            <ul>
                                <li>
                                    <xsl:value-of select="productName"/>
                                </li>
                                <li>
                                    <xsl:value-of select="manufacturer"/>
                                </li>
                                <xsl:if test="description">
                                    <li>
                                        <xsl:value-of select="description"/>
                                    </li>
                                </xsl:if>
                                <ul>
                                    <li>
                                        <xsl:value-of select="prices/price[1]"/>
                                    </li>
                                </ul>
                            </ul>
                            </li>
                        </xsl:for-each>
                    </ol>
                        <h2>Products 2</h2>
                        <ol>
                        <xsl:for-each select="products/product"> 
                        <xsl:if test="manufacturer[@id='acme']">
                        <li>
                            <ul>
                                <li>
                                    <xsl:value-of select="productName"/>
                                </li>
                                <li>
                                    <xsl:value-of select="manufacturer"/>
                                </li>
                                    <ul>
                                        <li>
                                            <xsl:value-of select="prices/price[1]"/>
                                        </li>
                                        <li>
                                            <xsl:value-of select="prices/price[3]"/>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                        </xsl:if>
                        </xsl:for-each>
                    </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>