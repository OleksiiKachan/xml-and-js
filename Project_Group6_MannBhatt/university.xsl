<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
<html> 
      <body> 
        <h2>Row</h2>
        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th>Street</th> 
            <th> City </th> 
            <th> Region</th> 
            <th> Country </th> 
            <th> Zipcode </th> 
            </tr> 

          <xsl:for-each select="root/row"> 
            <tr> 
              <td> 
                <!-- value-of processing instruction 
                  process the value of the element matching the XPath expression 
                --> 
                <!-- <xsl:value-of select="@rollno"/>  -->
              </td> 
              <td><xsl:value-of select="Street"/></td> 
              <td><xsl:value-of select="City"/></td> 
              <td><xsl:value-of select="Region"/></td> 
              <td><xsl:value-of select="Country"/></td> 
              <td><xsl:value-of select="Zipcode"/></td> 
			</tr> 
          </xsl:for-each> 
        </table> 

        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th> id </th>
            <th> firstname </th>
             <th> lastname </th>
            <th> dob </th>
            <th> email </th>
          </tr> 

          <xsl:for-each select="root/row"> 
            <tr> 
              <td> 
                <!-- value-of processing instruction 
                  process the value of the element matching the XPath expression 
                --> 
                <!-- <xsl:value-of select="@rollno"/>  -->
              </td> 
             

              <td><xsl:value-of select="id"/></td> 
              <td><xsl:value-of select="firstname"/></td> 
              <td><xsl:value-of select="lastname"/></td> 
              <td><xsl:value-of select="dob"/></td> 
              <td><xsl:value-of select="email"/></td> 

              <td><xsl:value-of select="phoneNumber"/></td> 
			</tr> 
          </xsl:for-each> 
        </table> 

        <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th> id </th>
            <th> title </th>
            <th> description </th>
          </tr> 

          <xsl:for-each select="root/row"> 
            <tr> 
              <td>   
                <!-- <xsl:value-of select="@rollno"/>  -->
              </td> 
              
              <td><xsl:value-of select="id"/></td> 
              <td><xsl:value-of select="title"/></td> 
              <td><xsl:value-of select="description"/></td> 
			</tr> 
          </xsl:for-each> 
        </table> 

         <table border="1"> 
          <tr bgcolor="#9acd32"> 
            <th> id </th>
            <th> firstname </th>
            <th> lastname </th>
            <th> email </th>
            <th> phoneNumber </th>
          </tr> 

          <xsl:for-each select="root/row"> 
            <tr> 
              <td>   
                <!-- <xsl:value-of select="@rollno"/>  -->
              </td> 
              
              <td><xsl:value-of select="id"/></td> 
              <td><xsl:value-of select="firstname"/></td> 
              <td><xsl:value-of select="lastname"/></td> 
              <td><xsl:value-of select="email"/></td> 
              <td><xsl:value-of select="phoneNumber"/></td> 
			</tr> 

          </xsl:for-each> 
        </table> 
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>
		