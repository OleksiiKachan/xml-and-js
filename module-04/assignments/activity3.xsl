<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

  <xsl:template match="/"> 
  
    <html> 
      <body> 
        <h2>Products</h2> 
				
        <table border="1"> 
          <tr bgcolor="#654321"> 
            <th>Product Name</th> 
            <th>Sku</th>
            <th>Creted At</th>
            <th>Shipable</th>
            <th>Manufacturer</th> 
            <th>Description</th> 
            <th>Prices</th> 
            <th>Product Items</th> 
          </tr> 
				
           
          <xsl:for-each select="products/product"> 
            <tr> 
             <td><xsl:value-of select="productName"/></td> 
              <td> 
                <xsl:value-of select="@sku"/> 
              </td> 
              <td><xsl:value-of select="@createdAt"/></td> 
              <td><xsl:value-of select="@shippable"/></td> 
              <td><xsl:value-of select="manufacturer"/></td> 
              <td><xsl:value-of select="description"/></td>
              <td>
                <ul>
                    <li><xsl:value-of select="prices/price[1]"/></li> 
                    <li><xsl:value-of select="prices/price[2]"/></li>
                    <li><xsl:value-of select="prices/price[3]"/></li>
                </ul>
              </td>
              <td><xsl:value-of select="productItems"/></td> 
			</tr> 
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>