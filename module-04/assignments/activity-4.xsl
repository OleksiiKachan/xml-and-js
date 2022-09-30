<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>table 1 - Shippable Products</h2>
        <table border="1">
          <tr bgcolor="yellow"> 
            <th>ProductName</th> 
            <th>manufacturer Id</th> 
            <th>description</th> 
            <th>USD price</th>
          </tr> 
          <xsl:for-each select="products/product"> 
            <xsl:if test="@shippable = 'true'">
              <tr bgcolor="lightyellow">
                <td><xsl:value-of select="productName"/></td>
                <td><xsl:value-of select="manufacturer/@id"/></td>
                <td><xsl:value-of select="description"/></td>
                <td>
                  <xsl:for-each select="prices/price[1]"> 
                        <xsl:value-of select="text()"/>
                  </xsl:for-each> 
                </td>
              </tr>
            </xsl:if>
          </xsl:for-each> 
        </table>

         <h2>table 2 - Products with manufacturer id acme</h2>
        <table border="1">
          <tr bgcolor="yellow"> 
            <th>ProductName</th> 
            <th>description</th> 
            <th>USD price</th>
            <th>Euro price</th>
          </tr> 
          <xsl:for-each select="products/product"> 
            <xsl:if test="manufacturer/@id = 'acme'">
              <tr bgcolor="lightyellow">
                <td><xsl:value-of select="productName"/></td>
                <td><xsl:value-of select="description"/></td>
                <td> <xsl:value-of select="prices/price[1]/text()" /> </td>
                <td><xsl:value-of select="prices/price[3]/text()" />  </td>
              </tr>
            </xsl:if>
          </xsl:for-each> 
        </table>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>