<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

  <xsl:template match="/"> 
      <html>
        <body>
          <h1> Products XSL </h1>
          <table border="2">
          <tr bgcolor="#90EE90"> 
              <th>Product Name</th>
              <th>Manufacturer Id</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            <xsl:for-each select = "products/product"> 
            <xsl:if test="@shippable='true'">
            <tr>
              <td><xsl:value-of select="productName" /></td>
              <td><xsl:value-of select="manufacturer/@id" /></td>
              <td><xsl:value-of select="description"/></td>
              <td><xsl:value-of select="prices/price[1]" /></td>

            </tr>
            </xsl:if>
            </xsl:for-each>
          </table >
          <table border="1 " style="margin-top:20px;" >
          <tr bgcolor="#E6E6FA"> 
              <th>Product Name</th>
              <th>Description</th>
              <th>Price USD</th>
              <th>Price Euro</th>
            </tr>
            <xsl:for-each select = "products/product"> 
            <xsl:if test="@shippable='true'">
            <tr>
              <td><xsl:value-of select="productName" /></td>
              <td><xsl:value-of select="description"/></td>
              <td><xsl:value-of select="prices/price[1]" /></td>
              <td><xsl:value-of select="prices/price[3]" /></td>
            </tr>
            </xsl:if>
            </xsl:for-each>
          </table>
        </body>
      </html>
    </xsl:template>
</xsl:stylesheet> 
