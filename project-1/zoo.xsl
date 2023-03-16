<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- match or link the attribute with xml elements(/ for whole doc) Xpath -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Zoo Data</title>
        <link rel="stylesheet" href="zoo.css"/>
      </head>
      <body>
        <table>
          <tr>
            <th>Zoo ID</th>
            <th>Open Time</th>
            <th>Close Time</th>
            <th>City</th>
            <th>Region</th>
            <th>Country</th>
            <th>Animals</th>
            <th>Employees</th>
          </tr>
          <xsl:apply-templates select="zoos/zoo" />
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="zoo">
    <tr>
      <td>
        <xsl:value-of select="id" />
      </td>
      <td>
        <xsl:value-of select="openTime" />
      </td>
      <td>
        <xsl:value-of select="closeTime" />
      </td>
      <td>
        <xsl:value-of select="location/city" />
      </td>
      <td>
        <xsl:value-of select="location/region" />
      </td>
      <td>
        <xsl:value-of select="location/counry" />
      </td>
      <td>
        <table border="1">
          <tr>
            <th>Animal Give Name</th>
            <th>Common Name</th>
            <th>Scientific Name</th>
            <th>Date of Birth</th>
            <th>Sex</th>
          </tr>
          <xsl:for-each select="animals">
            <tr>
              <td>
                <xsl:value-of select="giveName" />
              </td>
              <td>
                <xsl:value-of select="commonName" />
              </td>
              <td>
                <xsl:value-of select="scientificName" />
              </td>
              <td>
                <xsl:value-of select="dob" />
              </td>
              <td>
                <xsl:value-of select="sex" />
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </td>
      <td>
        <table>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Position</th>
          </tr>
          <xsl:for-each select="employees">
            <tr>
              <td>
                <xsl:value-of select="id" />
              </td>
              <td>
                <xsl:value-of select="firstName" />
              </td>
              <td>
                <xsl:value-of select="lastName" />
              </td>
              <td>
                <xsl:value-of select="dob" />
              </td>
              <td>
                <xsl:value-of select="position" />
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </td>
    </tr>
  </xsl:template>

</xsl:stylesheet>    