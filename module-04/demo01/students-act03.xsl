<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

        <html>
            <body>
                <h2> Students Info</h2>

                <ul>
                    <xsl:for-each select="class/student">
                        <li>
                            <xsl:value-of select="concat(//firstname, ' ', //lastname)" />
                            <ul>
                                <li>ID <xsl:value-of select="@rollno" />
                                </li>
                                <li>Nick Name: <xsl:value-of select="nickname" />
                                </li>
                                <li>Mark: <xsl:value-of select="marks" />
                                </li>
                            </ul>
                        </li>

                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>