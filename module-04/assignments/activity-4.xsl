<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<xsl:template match="/">
<html> 
      <body> 
        <h2>product</h2>
        <h2>Table1</h2>
         <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>productName</th> 
            <th>manufacturer</th> 
            <th>description</th> 
            <th>USDprices</th> 
          </tr> 
          <xsl:for-each select="products/product"> 
            <xsl:if test = "@shippable = 'true'"> 
            <tr> 
              <td><xsl:value-of select="productName"/></td> 
              <td><xsl:value-of select="manufacturer"/></td> 
              <td><xsl:value-of select="description"/></td> 
              <td><xsl:for-each select="prices/price[1]">
                     <xsl:value-of select="text()"/>
                     </xsl:for-each>
              </td>
			</tr> 
            </xsl:if>
          </xsl:for-each> 
        </table> 

        <h2>Table2</h2>
         <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>productName</th>  
            <th>description</th> 
            <th>USD prices</th> 
            <th>EURO prices</th>
          </tr> 
          <xsl:for-each select="products/product">
          <xsl:if test = "manufacturer/@id = 'acme'"> 
            <tr>  
              <td><xsl:value-of select="productName"/></td>  
              <td><xsl:value-of select="description"/></td> 
              <td><xsl:for-each select="prices/price[2]">
                     <xsl:value-of select="text()"/>
                     </xsl:for-each> 
              </td>
              <td><xsl:for-each select="prices/price[3]">
                     <xsl:value-of select="text()"/>
                     </xsl:for-each>
              </td>
			</tr> 
         </xsl:if>
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>