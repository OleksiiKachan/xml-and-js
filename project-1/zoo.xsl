<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Zoo</h2> 
        <table border="1"> 
          <tr> 
            <th>Id</th>
            <th>Open Time</th>
            <th>Close Time</th>
            <th>Location</th>
            <th>Animals</th>
            <th>Employees</th>
          </tr> 
          <xsl:for-each select="list/zoo"> 
            <tr>
                <td><xsl:value-of select="id"/></td>
                <td><xsl:value-of select="openTime"/></td>
                <td><xsl:value-of select="closeTime"/></td>
                <td><xsl:value-of select="location"/></td>
                <td>
                    <table border="1">
                        <tr>
                            <th>Given Name</th>
                            <th>Common Name</th>
                            <th>Scientific Name</th>
                            <th>Date of Birth</th>
                            <th>Sex</th>
                        </tr>
                        <xsl:for-each select="animals">
                        <tr>
                        <td><xsl:value-of select="giveName"/></td>
                          <td><xsl:value-of select="commonName"/></td>
                         <td><xsl:value-of select="scientificName"/></td>
                         <td><xsl:value-of select="dob"/></td>
                         <td><xsl:value-of select="sex"/></td>
                        </tr>    
                        </xsl:for-each>
                    </table>
                </td>
                <td>
                    <table border="1">
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Position</th>
                        </tr>
                        <xsl:for-each select="employees">
                        <tr>
                           <td><xsl:value-of select="id"/></td>
                          <td><xsl:value-of select="firstName"/></td>
                         <td><xsl:value-of select="lastName"/></td>
                         <td><xsl:value-of select="dob"/></td>
                         <td><xsl:value-of select="position"/></td>         
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