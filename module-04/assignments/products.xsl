<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

  <xsl:template match="/"> 
    
		
    <html> 
      <body> 
        <h2>Products</h2> 
				
        <table border="10"> 
          <tr bgcolor="green"> 
            <th>Product Name</th> 
             
          </tr> 
				
           
          <xsl:for-each select="products"> 
            <tr> 
              <td> 
                 
              </td> 
              <td><xsl:value-of select="productName"/></td> 
               
						</tr> 
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>