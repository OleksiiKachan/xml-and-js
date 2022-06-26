<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>STREET</th>
                        <th>CITY</th>
                        <th>REGION</th>
                    </tr>
                    <tr></tr>
                    <xsl:for-each select="airlines/airline">
                        <tr>
                            <td>
                                <xsl:value-of select="id"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="name"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="street"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="city"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="region"></xsl:value-of>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>