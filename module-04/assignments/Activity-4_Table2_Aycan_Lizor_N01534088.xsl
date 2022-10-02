<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
 
  <xsl:template match="/"> 
   
		
    <html> 
      <body> 
        <h2>Table1</h2> 
				
        <table border="1"> 
          <tr bgcolor="#9acd32">
            <th>Product Name</th> 
            <th>Description</th> 
            <th>Prices</th> 
            
          </tr> 
				
               
          <xsl:for-each select="products/product">
          <xsl:if test=" manufacturer/@id='acme' " >
      
          
       
            <tr> 
            
              <td><xsl:value-of select="productName"/></td> 
              <td><xsl:value-of select="description"/></td> 
              <td><xsl:value-of select="prices"/></td> 
             
			</tr>
               
            </xsl:if >          
           
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>