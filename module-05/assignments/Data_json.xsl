<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Books catalog</h2> 
				
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>title</th> 
            <th>author</th> 
            <th>category</th> 
            <th>year</th> 
            <th>price</th> 
          </tr> 
          <xsl:for-each select="data/book"> 
            <tr> 
              <td> 
                <xsl:value-of select="@year"/> 
                <xsl:value-of select="@price"/> 

              </td> 
              <td><xsl:value-of select="title"/></td> 
              <td><xsl:value-of select="author"/></td> 
              <td><xsl:value-of select="category"/></td> 
						</tr> 
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>