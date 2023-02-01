<?xml version="1.0" encoding="UTF-8"?>

    <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> 
        <html> 
            <body>
                <h2>Products</h2>
                    <ol>
                        <xsl:for-each select="products/product"> 
                        <xsl:if test=" ">
                        <li>
                            <ul>
                                <li>
                                    <xsl:value-of select="productName"/>
                                </li>
                                <li>
                                    <xsl:value-of select="manufacturer"/>
                                </li>
                                <li>
                                    <xsl:value-of select="description"/>
                                </li>
                                <xsl:for-each select="//product/prices"> 
                                    <ul>
                                        <li>
                                            <xsl:value-of select="price"/>
                                        </li>
                                    </ul>
                                </xsl:for-each>                            
                                <li>
                                    <xsl:value-of select="productItems"/>
                                </li>
                            </ul>
                        </li>
                        
                        </xsl:if>
                        
                        </xsl:for-each>
                    </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>