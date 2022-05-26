<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">    
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>product</h2> 
				
          <tr bgcolor="#9acd32"> 
            <th>productName</th> 
          </tr> 
          <br/>
          <xsl:for-each select="products/product"> 
            <tr> 
              <td><xsl:value-of select="productName"/></td>
              <br/> 
						</tr> 
          </xsl:for-each> 
         
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>