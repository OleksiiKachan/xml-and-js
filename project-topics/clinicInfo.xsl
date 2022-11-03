<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 	
    <html> 
      <body> 
        <h2>Clinical Informtion</h2> 
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>Id</th> 
            <th>Address</th> 
            <th>Employee data</th> 
            <th>Drug data</th> 
          </tr> 
	
          <xsl:for-each select="info/clinic"> 
            <tr> 
              <td><xsl:value-of select="id"/></td> 

              <td>
                <table border="1"> 
                  <tr> <th>Street</th> <td><xsl:value-of select="address/street"/></td> </tr>
                  <tr> <th>City</th> <td><xsl:value-of select="address/city"/></td> </tr>
                  <tr> <th>Region</th> <td><xsl:value-of select="address/region"/></td> </tr>
                  <tr> <th>Country</th> <td><xsl:value-of select="address/country"/></td> </tr>
                </table>
              </td>

              <td>
                <xsl:for-each select="employees/empData"> 
                  <table border="1"> 
                    <tr> <th>Id</th> <td><xsl:value-of select="id"/></td> </tr>
                    <tr> <th>FirstName</th> <td><xsl:value-of select="firstName"/></td></tr>
                    <tr> <th>LastName</th> <td><xsl:value-of select="lastName"/></td></tr>
                    <tr><th>Employee type</th> <td><xsl:value-of select="empType"/></td></tr>
                  </table>
                </xsl:for-each>   
              </td>

              <td>
                <xsl:for-each select="drugs/drugData"> 
                  <table border="1"> 
                    <tr> <th>Manufacturer</th><td><xsl:value-of select="manufacturer"/></td> </tr>
                    <tr> <th>Brand</th> <td><xsl:value-of select="brand"/></td></tr>
                    <tr> <th>Name</th><td><xsl:value-of select="name"/></td></tr>
                    <tr><th>Code</th> <td><xsl:value-of select="code"/></td></tr>
                    <tr><th>Diagnosis code</th> <td><xsl:value-of select="diagnosisCode"/></td></tr>
                    <tr><th>Diagnosis Description</th> <td><xsl:value-of select="diagnosisDescription"/></td></tr>
                    <tr><th>Quantity</th> <td><xsl:value-of select="qty"/></td></tr>
                  </table>
                </xsl:for-each>   
              </td>       
			      </tr>
          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>