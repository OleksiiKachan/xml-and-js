<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 

  <html> 
      <body> 
        <h2>Product: shippable</h2> 
				
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>ProductName</th> 
            <th>Manufacturer id</th> 
            <th>Description</th> 
            <th>USD price</th> 
          </tr> 

          <xsl:for-each select = 'products/product[@shippable="true"]'>
            
            <tr> 
              <td> 
              <!-- value-of processing instruction 
                  process the value of the element matching the XPath expression 
                --> 
                <xsl:value-of select="productName"/> 
              </td> 
              <td><xsl:value-of select="manufacturer"/></td> 
              <td><xsl:value-of select="description"/></td> 
              <td><xsl:value-of select="prices/price[1]"/></td> 
			</tr> 			
            
          </xsl:for-each>   

        </table> 
        <h3> Product: Manufacturer - ACME</h3>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Product name</th>
                        <th>Description</th>
                        <th>USD price</th>
                        <th>Euro price</th>
                    </tr>
                    <xsl:for-each select = 'products/product/manufacturer[@id="acme"]'>
                        <tr>
                            <td><xsl:value-of select='../productName'/></td>
                            <td><xsl:value-of select='../description'/></td>
                            <td><xsl:value-of select='../prices/price[1]'/></td>
                            <td><xsl:value-of select='../prices/price[3]'/></td>
                        </tr>
                    </xsl:for-each>
                </table>            
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>