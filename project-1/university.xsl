<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>List of Universities</h2>
        <ul>
          <xsl:for-each select="universities/university"> 
            <li>
              <article style="margin-bottom: 50px;">
                <hgroup>
                  <h2 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="name"/>
                  </h2>
                </hgroup>
                <div>
                    <xsl:for-each select="addresses"> 
                        <tr>
                            <td><xsl:value-of select="address"/>,</td>
                            <td><xsl:value-of select="city"/></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td><xsl:value-of select="region"/>,</td>
                            <td><xsl:value-of select="country"/>,</td>
                            <td><xsl:value-of select="zipCode"/></td>
                        </tr>
                    </xsl:for-each> 
                </div>     

                <h3>Courses offered:</h3>
                <table border="1">
                  <tr bgcolor="#9acd32"> 
                    <th>Id</th> 
                    <th>Title</th> 
                    <th>Description</th> 
                  </tr> 
                  
                  <xsl:for-each select="courses"> 
                    <tr>
                      <td><xsl:value-of select="id"/></td>
                      <td><xsl:value-of select="title"/></td>
                      <td><xsl:value-of select="description"/></td>
                    </tr>
                  </xsl:for-each> 
                </table>

                <h3>Students enrolled:</h3>
                <table border="1">
                  <tr bgcolor="#9acd32"> 
                    <th>Id</th> 
                    <th>First Name</th> 
                    <th>Last Name</th> 
                    <th>Date of birth</th> 
                    <th>Email</th> 
                  </tr> 
                  
                  <xsl:for-each select="students"> 
                    <tr>
                      <td><xsl:value-of select="id"/></td>
                      <td><xsl:value-of select="firstName"/></td>
                      <td><xsl:value-of select="lastName"/></td>
                      <td><xsl:value-of select="dob"/></td>
                      <td><xsl:value-of select="email"/></td>
                    </tr>
                  </xsl:for-each> 
                </table>

                <h3>Faculties:</h3>
                <table border="1">
                  <tr bgcolor="#9acd32"> 
                    <th>Id</th> 
                    <th>First Name</th> 
                    <th>Last Name</th> 
                    <th>Email</th> 
                    <th>Phone Number</th> 
                  </tr> 
                  
                  <xsl:for-each select="faculty"> 
                    <tr>
                      <td><xsl:value-of select="id"/></td>
                      <td><xsl:value-of select="firstName"/></td>
                      <td><xsl:value-of select="lastName"/></td>
                      <td><xsl:value-of select="email"/></td>
                      <td><xsl:value-of select="phoneNumber"/></td>
                    </tr>
                  </xsl:for-each> 
                </table>

              </article>
            </li>
          </xsl:for-each> 
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>