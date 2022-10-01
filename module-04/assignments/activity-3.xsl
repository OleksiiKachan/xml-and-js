<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 

  <html> 
      <body> 
        <h2>Product</h2> 
				
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>ProductName</th> 
            <th>manufacturer</th> 
            <th>description</th> 
            <th>prices</th> 
            <th>productItems</th> 
          </tr> 

          <xsl:for-each select="products/product"> 
            <tr> 
              <td> 
              <!-- value-of processing instruction 
                  process the value of the element matching the XPath expression 
                --> 
                <xsl:value-of select="productName"/> 
              </td> 
              <td><xsl:value-of select="manufacturer"/></td> 
              <td><xsl:value-of select="description"/></td> 
              <td><xsl:value-of select="prices"/></td> 
              <td><xsl:value-of select="productItems"/></td>
						</tr> 
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>
