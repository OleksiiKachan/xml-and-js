<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

  <xsl:template match="/"> 
    
		
    <html> 
      <body> 
        <h1><b>Books catalog</b></h1> 

        <xsl:for-each select="books/book">
            <ul>
                <li><h2><b><xsl:value-of select="title"/></b></h2></li>
            </ul> 
            <p style="margin-left:35px">Book was written in <xsl:value-of select="year"/></p>
            <p style="margin-left:35px">Retail price is: $<xsl:value-of select="price"/></p>
        </xsl:for-each>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>