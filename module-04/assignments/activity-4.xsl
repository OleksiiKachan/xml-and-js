<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 	
    <html> 
      <body> 
        <h2>Products</h2> 
				
        <table border="1"> 
          <tr bgcolor="#9acd32">
            <th>Product Name</th> 
            <th>ID</th>
            <th>Description</th>
            <th>Prices in USD</th> 
          </tr> 
			<xsl:for-each select="products/product[@shippable='true']"> 
                <tr>
                    <td><xsl:value-of select="productName"/></td> 
                    <td><xsl:value-of select="manufacturer/@id"/></td> 
                    <td><xsl:value-of select="description"/></td> 
                    <td><xsl:value-of select="prices/price[1]"/></td>
				        </tr> 
            </xsl:for-each> 
        </table> 
        <table border="1"> 
          <tr bgcolor="#9acd32">
            <th>Product Name</th> 
            <th>Description</th>
            <th>Prices in USD</th> 
            <th>Prices in Euros</th> 
          </tr> 
			<xsl:for-each select='products/product/manufacturer[@id="acme"]'> 
                <tr>
                    <td> <xsl:value-of select="../productName"/></td> 
                    <td> <xsl:value-of select="../description"/></td> 
                    <td> <xsl:value-of select="../prices/price[1]"/></td> 
                    <td> <xsl:value-of select="../prices/price[3]"/></td>
				        </tr> 
            </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>