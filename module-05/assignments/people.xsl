<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>People</h2>
        <ul>
          <xsl:for-each select="People/row"> 
            <li>
              <article style="margin-bottom: 50px;">
                <hgroup>
                  <h2 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="concat(first_name, ' ', last_name)"/>
                  </h2>
                </hgroup>
                
                <h3>Orders</h3>
                <table border="1">
                  <tr> 
                    <th>Id</th> 
                    <th>email</th> 
                    <th>gender</th> 
                    <th>ip_address</th>
                  </tr> 
                  
                  <xsl:for-each select="people/row"> 
                    <tr>
                      <td><xsl:value-of select="@pid"/></td>
                      <td><xsl:value-of select="email"/></td>
                      <td><xsl:value-of select="gender"/></td>
                      <td><xsl:value-of select="ip_address"/></td>
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