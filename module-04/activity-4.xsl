<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Products</h2> 
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>Product name</th>
            <th>Manufacturer id</th>
            <th>Description</th> 
            <th>USD price</th> 
          </tr> 
          <xsl:for-each select="//product[@shippable='true']"> 
            <tr> 
              <td><xsl:value-of select="productName"/></td> 
              <td><xsl:value-of select="manufacturer/@id"/></td> 
              <td><xsl:value-of select="description"/></td> 
              <td>
                <xsl:for-each select="prices/price[1]"> 
                  <xsl:value-of select="." />
                </xsl:for-each>
              </td> 
            </tr> 
          </xsl:for-each> 
        </table> 
        <table border="1"> 
            <tr bgcolor="#9acd32"> 
                <th>Product name</th>
                <th>Description</th> 
                <th>Manufacturer</th> 
                <th>USD price</th>
                <th>Euro price</th> 
            </tr> 
            <xsl:for-each select="products/product[manufacturer/@id='acme']"> 
            <tr> 
              <td><xsl:value-of select="productName"/></td> 
              <td><xsl:value-of select="description"/></td> 
              <td><xsl:value-of select="manufacturer"/></td>
              <td>
                <xsl:for-each select="prices/price[1]"> 
                  <xsl:value-of select="." />
                </xsl:for-each>
              </td> 
              <td>
                <xsl:for-each select="prices/price[3]"> 
                  <xsl:value-of select="." />
                </xsl:for-each>
              </td> 
            </tr> 
            </xsl:for-each>  
          </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>
