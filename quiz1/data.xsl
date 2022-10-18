<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html>
    <body>
        <h1>Book Catalogs</h1>
        <ul>
            <xsl:for-each select="root/info">
            <li>
                <h4><xsl:value-of select="title"/></h4>
                <p>Book was written in <xsl:value-of select="year"/></p>
                <p>Retail price <xsl:value-of select="price"/></p>
            </li>
            </xsl:for-each>
        </ul>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>