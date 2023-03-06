<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Records</title>
      </head>
      <body>
        <xsl:apply-templates select="/root/record"/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="record">
    <table border="5" cellspacing = "7">
      <tr>
        <th>ID</th>
        <td><xsl:value-of select="id"/></td>
      </tr>
      <tr>
        <th>Name</th>
        <td><xsl:value-of select="name"/></td>
      </tr>
      <tr>
        <th>Currency</th>
        <td><xsl:value-of select="currency"/></td>
      </tr>
      <tr>
        <th>Address</th>
        <td>
          <xsl:value-of select="address/street"/>,
          <xsl:value-of select="address/city"/>,
          <xsl:value-of select="address/region"/>,
          <xsl:value-of select="address/country"/>
        </td>
      </tr>
      <tr>
        <th>Stocks</th>
        <td>
          <table border="1">
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Sector</th>
              <th>Industry</th>
              <th>Market Cap</th>
              <th>Price</th>
            </tr>
            <xsl:for-each select="stocks">
              <tr>
                <td><xsl:value-of select="symbol"/></td>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="sector"/></td>
                <td><xsl:value-of select="industry"/></td>
                <td><xsl:value-of select="marketCap"/></td>
                <td><xsl:value-of select="price"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </td>
      </tr>
      <tr>
        <th>Accounts</th>
        <td>
          <table border="1">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>IBAN</th>
            </tr>
            <xsl:for-each select="accounts">
              <tr>
                <td><xsl:value-of select="holder/firstName"/></td>
                <td><xsl:value-of select="holder/lastName"/></td>
                <td><xsl:value-of select="holder/gender"/></td>
                <td><xsl:value-of select="holder/occupation"/></td>
                <td><xsl:value-of select="bank/iban"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </td>
      </tr>
    </table>
  </xsl:template>

</xsl:stylesheet>
