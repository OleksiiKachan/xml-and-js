<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <h2>Airlines</h2>
        </body>

    </html>
    <airlines>
        <xsl:for-each select="/airlines/carrier">
            <carrier>
                <id><xsl:value-of select="./id"/></id>
                <name><xsl:value-of select="./name"/></name>
                <street><xsl:value-of select="./street"/></street>
                <city><xsl:value-of select="./city"/></city>
                <region><xsl:value-of select="./region"/></region>
                <country><xsl:value-of select="./country"/></country>
                <xsl:for-each select="./park">
                    <park>
                        <id><xsl:value-of select="./id"/></id>
                        <routeType><xsl:value-of select="./routeType"/></routeType>
                        <manufacturer><xsl:value-of select="./manufacturer"/></manufacturer>
                        <year><xsl:value-of select="./year"/></year>
                    </park>
                </xsl:for-each>
                <xsl:for-each select="./routes">
                    <routes>
                        <vehicle><xsl:value-of select="./vehicle"/></vehicle>
                        <departure>
                            <airport><xsl:value-of select="./departure/airport"/></airport>
                            <city><xsl:value-of select="./departure/city"/></city>
                            <country><xsl:value-of select="./departure/country"/></country>
                        </departure>
                        <destination>
                            <airport><xsl:value-of select="./destination/airport"/></airport>
                            <city><xsl:value-of select="./destination/city"/></city>
                            <region><xsl:value-of select="./destination/region"/></region>
                            <country><xsl:value-of select="./destination/country"/></country>
                        </destination>
                    </routes>
                </xsl:for-each>
            </carrier>
        </xsl:for-each>
    </airlines>
</xsl:template>
</xsl:stylesheet>