<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2> Books catalog </h2>
        <ul>
          <xsl:for-each select="books/book"> 
            <li>
              <h3>
                <xsl:value-of select="title" />
              </h3>
            </li>
            <div>
                Book was written in <xsl:value-of select="year"/>
            </div>
            <div>
                Retail price is <xsl:value-of select="price"/>
            </div>
          </xsl:for-each> 
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>