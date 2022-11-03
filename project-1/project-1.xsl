<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
        <style>
            td{
            border: 1px solid black;
            border-collapse: collapse;
            }
        </style>
      <body> 
        <h2>company Details</h2>
        <table border="1">
            <tr> 
                <th>Name</th> 
                <th>Stock Symbol</th> 
                <th>Domain</th>
                <th>Apps</th> 
                <th>Employees</th>
            </tr> 
            <xsl:for-each select="companyDetails/company"> 
                <tr>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="stockSymbol"/></td>
                    <td><xsl:value-of select="domain"/></td>
                    <td>
                        <table>
                            <tr>
                                <td>App Id</td>
                                <td>Name</td>
                                <td>Current Version</td>
                                <td>Url</td>
                            </tr>
                            <xsl:for-each select="appDetails/apps"> 
                                <tr>
                                    <td><xsl:value-of select="appId"/></td>
                                    <td><xsl:value-of select="appName"/></td>
                                    <td><xsl:value-of select="currentVersion"/></td>
                                    <td><xsl:value-of select="url"/></td>
                                </tr>
                            </xsl:for-each> 
                           
                        </table>
                    </td>
                    <td>
                        <br />
                        <table>
                            <tr>
                                <td>Id</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>User Name</td>
                                <td>Occupation</td>
                                <td>Department</td>
                                <td>Devices</td>
                            </tr>
                                <xsl:for-each select="empDetails/employees">
                                <tr> 
                                    <td> <xsl:value-of select="id"/></td>
                                    <td> <xsl:value-of select="firstName"/> </td>
                                    <td> <xsl:value-of select="lastName"/> </td>
                                    <td> <xsl:value-of select="email"/> </td>
                                    <td> <xsl:value-of select="userName"/> </td>
                                    <td> <xsl:value-of select="occupation"/> </td>
                                    <td> <xsl:value-of select="department"/> </td>
                                    <td> <xsl:for-each select="devices/device"> 
                                            <ul>
                                            <li>ip:   <xsl:value-of select="ip"/> </li>
                                            <li>mac:   <xsl:value-of select="mac"/> </li>
                                            </ul>
                                            </xsl:for-each>
                                           
                                    </td>
                                </tr>
                                </xsl:for-each> 
                        </table>
                        <br />
                    </td>
                </tr>
            </xsl:for-each> 
        </table>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>