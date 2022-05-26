<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <div>
            <div>
                <div>
                   Products                    
                </div>
                <xsl:for-each select="products/product">
                    <div>
                        <xsl:value-of select="@sku"></xsl:value-of>
                    </div>
                    <ol>
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
                    </ol>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet> 