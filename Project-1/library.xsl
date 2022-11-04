<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

  <xsl:template match="/">
    <html> 
      <body>
      <h2>Library</h2>   
        <table border="1">
        <tr>
          <th> ID</th>
          <th>  Name</th>
          <th> Specialty </th>
          <th> Address </th>
        </tr>
        
        <xsl:for-each select="//element"> 
        <tr>
            <td><xsl:value-of select="id"/></td>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="specialty"/></td>
            <td>
            <p>
              <xsl:value-of select="address/street"/>, <xsl:value-of select="address/region"/>, <xsl:value-of select="address/city"/> - <xsl:value-of select="address/country"/>
            </p>
            </td>
        </tr>
          </xsl:for-each>
        </table>

        <h2>Catalog</h2>   
        <table border="1">
        <tr>
          <th> Libraby ID</th>
          <th> ISBN </th>
          <th> Title </th>
          <th> Description </th>
          <th> genre </th>
          <th> author </th>
          <th> year </th>
          <th> availability </th>
        </tr>
        
        <xsl:for-each select="//element/catalog/book"> 
        <tr>
            <td><xsl:value-of select="../../id"/></td>
            <td><xsl:value-of select="isbn"/></td>
            <td><xsl:value-of select="title"/></td>
            <td><xsl:value-of select="description"/></td>
            <td><xsl:value-of select="genre"/></td>
            <td><xsl:value-of select="author"/></td>
            <td><xsl:value-of select="year"/></td>
            <td><xsl:value-of select="availability"/></td>
        </tr>
          </xsl:for-each>
        </table>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>