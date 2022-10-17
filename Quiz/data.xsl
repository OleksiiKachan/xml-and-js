<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<?xml-stylesheet type="text/xsl" href="data.xml"?>
  <xsl:template match="/">
    <html> 
      <body>  
        <ul>
        <h2>Book Catalogs</h2> 
        <xsl:for-each select="root/person"> 
            <li>
              <h4><xsl:value-of select="title"/></h4>
              <p>Book was written in <xsl:value-of select="year"/></p>
              <p>Retail Price is <xsl:value-of select="price"/></p>
            </li>
          </xsl:for-each>
        </ul>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>