<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <html>
      <head>
        <title>Library Catalog</title>
      </head>
      <body>
        <h1>Library Catalog</h1>
        <table border="1" cellspacing="0">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Specialty</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Availability</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Author</th>
          </tr>
          <xsl:for-each select="root/element/catalog/book">
            <tr>
              <td><xsl:value-of select="../../id"/></td>
              <td><xsl:value-of select="../../name"/></td>
              <td>
                <xsl:value-of select="../../address/street"/>, 
                <xsl:value-of select="../../address/city"/>, 
                <xsl:value-of select="../../address/region"/>, 
                <xsl:value-of select="../../address/country"/>
              </td>
              <td><xsl:value-of select="../../specialty"/></td>
              <td><xsl:value-of select="isbn"/></td>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="availability"/></td>
              <td><xsl:value-of select="year"/></td>
              <td><xsl:value-of select="genre"/></td>
              <td><xsl:value-of select="description"/></td>
              <td><xsl:value-of select="author"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>