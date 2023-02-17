<?xml version="1.0" encoding="UTF-8"?>
<!-- 
    Q02
    name: Wenhao Fang 
    id: n01555914 
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="en">
            <head>
                <title>Q02</title>
            </head>
            <body>
                <h2>Book information</h2>

                <ul>
                    <xsl:for-each select="//book">

                        <li>
                            <h3>
                                <xsl:value-of select="title" />
                            </h3>
                            <p> Book was written in <xsl:value-of select="year" />
                            </p>
                            <p> Retail price is $<xsl:value-of select="price" />
                            </p>
                        </li>

                        <!-- <li>
                            <xsl:value-of test="price" />
                        </li>  -->
                    </xsl:for-each>
                </ul>
            </body>
        </html>


    </xsl:template>

</xsl:stylesheet>