<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <html>
      <head>
        <title>Product Information</title>
      </head>
      <body>
        <h1>Product Information</h1>
        <table border="1">
          <tr>
            <th>Product Name</th>
            <th>Description</th>
          </tr>
          <xsl:apply-templates select="//product"/>
        </table>
        <br />
        <table border="1">
          <tr>
            <th>Product Name</th>
            <th>Prices</th>
          </tr>
          <xsl:apply-templates select="//product"/>
        </table>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="product">
    <tr>
      <td><xsl:value-of select="productName"/></td>
      <td><xsl:value-of select="description"/></td>
    </tr>
  </xsl:template>
  
  <xsl:template match="product">
    <tr>
      <td><xsl:value-of select="productName"/></td>
      <td>
        <xsl:for-each select="prices/price">
          <xsl:value-of select="."/><br />
        </xsl:for-each>
      </td>
    </tr>
  </xsl:template>
  
</xsl:stylesheet>
