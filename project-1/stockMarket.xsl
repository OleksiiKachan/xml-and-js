<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html>
      <head>
        <title>Stock Market info</title>
      </head>  
      <body>
        <h1>Stock Market</h1>
        <table border="1">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Currency</th>
            <th>Address</th>
            <th>Stocks</th>
            <th>Accounts</th>
          </tr>
          <xsl:for-each select="/stockMarkets/market">
            <tr>
              <td><xsl:value-of select="id"/></td>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="currency"/></td>
              <td>
                <xsl:value-of select="concat(address/street, ', ', address/city , ', ', address/region, ', ', address/country)"/>
              </td>
              <td>
                <table border="1">
                  <tr>
                    <th>symbol</th>
                    <th>name</th>
                    <th>sector</th>
                    <th>industry</th>
                    <th>marketCap</th>
                    <th>price</th>
                  </tr>
                  <xsl:apply-templates select="stocks/stock"/>
                </table>
              </td>
              <td>
                <xsl:apply-templates select="accounts"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="stock">
    <tr>
      <td><xsl:value-of select="symbol" /></td>
      <td><xsl:value-of select="name" /></td>
      <td><xsl:value-of select="sector" /></td>
      <td><xsl:value-of select="industry" /></td>
      <td><xsl:value-of select="marketCap" /></td>
      <td><xsl:value-of select="price" /></td>
    </tr>
  </xsl:template>

  <xsl:template match="accounts">
    <table border="1">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Occupation</th>
        <th>iban</th>
      </tr>
      <tr>
        <td><xsl:value-of select="account/holder/firstName"/></td>
        <td><xsl:value-of select="account/holder/lastName"/></td>
        <td><xsl:value-of select="account/holder/gender"/></td>
        <td><xsl:value-of select="account/holder/occupation"/></td>
        <td><xsl:value-of select="account/bank/iban"/></td>
      </tr>
    </table>
  </xsl:template>
</xsl:stylesheet>