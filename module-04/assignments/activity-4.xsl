<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Products</h2> 
				
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>Product Name</th> 
            <th>Manufacturer ID</th> 
            <th>Description</th> 
            <th>USD Price</th>
          </tr> 
          <xsl:for-each select="products/product">
            <xsl:if test="@shippable='true'">
                <tr> 
                    <td><xsl:value-of select="productName"/></td> 
                    <td><xsl:value-of select="manufacturer"/></td> 
                    <td><xsl:value-of select="description"/></td> 
                    <td><xsl:value-of select="prices/price[starts-with(., 'US$')]"/></td>
                </tr> 
            </xsl:if>
          </xsl:for-each>
        </table> 
        <br />
        <table border="1"> 
          <tr bgcolor="#fc6b03"> 
            <th>Product Name</th> 
            <th>Description</th> 
            <th>USD Price</th>
            <th>Euro price</th>
          </tr> 
          <xsl:for-each select="products/product">
            <xsl:if test="manufacturer[@id='acme']">
                <tr> 
                    <td><xsl:value-of select="productName"/></td> 
                    <td><xsl:value-of select="description"/></td> 
                    <td><xsl:value-of select="prices/price[starts-with(., 'US$')]"/></td>
                    <td><xsl:value-of select="prices/price[starts-with(., '&#8364;')]"/></td>
                </tr> 
            </xsl:if>
          </xsl:for-each>
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>