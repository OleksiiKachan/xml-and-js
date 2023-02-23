<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <head>
            <title>Book Catalog</title>
            <style type="text/css">
            h1{
                font-weight: bold;
            }

            h2 {
                font-weight: bold;
            }

            </style>
        </head>
        <body>
        <h1>Books catalog</h1>
        <ul>
            <xsl:for-each select="books/book">
                <li>
                    <article>
                        <h2><xsl:value-of select="title"/></h2>
                        <p>Book was writen in: <xsl:value-of select="year"/></p>
                        <p>Retail price is $<xsl:value-of select="price"/></p>
                        <p> Authors:
                        <xsl:for-each select="authors/author">
                            <xsl:if test="position() &gt; 1">,</xsl:if>
                            <xsl:value-of select="."/>    
                        </xsl:for-each>
                        </p>
                    </article>
                </li>
            </xsl:for-each>
        </ul>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>