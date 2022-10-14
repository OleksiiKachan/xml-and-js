<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> 
        <html>
            <body>
                <h1>Books Catalog</h1>
                    <ul>
                        <xsl:for-each select="//book"> 
                            <li>
                                <h2 style="display: inline; margin-right: 10px">
                                     <xsl:value-of select="title"/>
                                </h2> <br/>
                                <h4>
                                    Book was written in <xsl:value-of select="year"/>
                                </h4>
                                <h4>
                                     Retail price is $<xsl:value-of select="price"/>
                                </h4>
                            </li> 
                        </xsl:for-each>
                    </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>