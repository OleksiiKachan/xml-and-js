<!-- bank.xsl -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Bank Information</title>
      </head>
      <body>
      <h2>Bank Details</h2>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th>ID</th>
            <th>Name</th>
            <th>Street</th>
            <th>City</th>
            <th>Region</th>
            <th>Country</th>
            <th>Clients</th>
          </tr>
          <xsl:for-each select="banks/bank">
            <tr>
              <td><xsl:value-of select="id"/></td>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="street"/></td>
              <td><xsl:value-of select="city"/></td>
              <td><xsl:value-of select="region"/></td>
              <td><xsl:value-of select="country"/></td>
              <td>
                <table border="1">
                  <tr bgcolor="#AB82FF">
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Cards</th>
                  </tr>
                  <xsl:for-each select="clients">
                    <tr>
                      <td><xsl:value-of select="id"/></td>
                      <td><xsl:value-of select="firstName"/></td>
                      <td><xsl:value-of select="lastName"/></td>
                      <td><xsl:value-of select="email"/></td>
                      <td><xsl:value-of select="phoneNumber"/></td>
                      <td>
                        <table border="1">
                          <tr bgcolor="#FF7F00">
                            <th>Number</th>
                            <th>Type</th>
                            <th>CVV</th>
                            <th>Expires At</th>
                          </tr>
                          <xsl:for-each select="cards">
                            <tr>
                              <td><xsl:value-of select="number"/></td>
                              <td><xsl:value-of select="type"/></td>
                              <td><xsl:value-of select="cvv"/></td>
                              <td><xsl:value-of select="expiresAt"/></td>
                            </tr>
                          </xsl:for-each>
                        </table>
                      </td>
                    </tr>
                  </xsl:for-each>
                </table>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>