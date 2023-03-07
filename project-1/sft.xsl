<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/s">

        <html>
            <head>
                <title>Software Companies</title>
            </head>

            <body>
                <h1>Software Companies</h1>

                <table border="10">
                    <thead>
                        <tr bgcolor="#923596" style="color:#ffffff">
            
                            <th>Name</th>
                            <th>Stock Symbol</th>
                            <th>Domain</th>
                            <th>Employees Details</th>
                            <th>Applications</th>
                        </tr>
                    </thead>

                    <tbody valign="top">
                        <xsl:for-each select="//JSON_ARRAY">
                            <tr>
                                <td>
                                    <strong>
                                    <xsl:value-of select="cName"/>
                                    </strong>
                                </td>
                                <td>
                                    <xsl:value-of select="stockSymbol"/>
                                </td>
                                <td>
                                    <xsl:value-of select="domain"/>
                                </td>
                                <td>
                                    <ol>
                                        <xsl:for-each select="employees/employee">
                                            <li style="margin: 5px">
                                                <strong>Employee ID: </strong>
                                                <xsl:value-of select="eId"/>
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>First Name: </strong>
                                                    <xsl:value-of select="fName"/>
                                                </li>
                                                <li>
                                                    <strong>Last Name: </strong>
                                                    <xsl:value-of select="lName"/>
                                                </li>
                                                <li>
                                                    <strong>Email: </strong>
                                                    <xsl:value-of select="email"/>
                                                </li>
                                                <li>
                                                    <strong>User Name: </strong>
                                                    <xsl:value-of select="userName"/>
                                                </li>
                                                <li>
                                                    <strong>Occupation: </strong>
                                                    <xsl:value-of select="occupation"/>
                                                </li>
                                                <li>
                                                    <strong>Department: </strong>
                                                    <xsl:value-of select="department"/>
                                                </li>
                                                <li>
                                                    <xsl:for-each select="device">
                                                        <ul>
                                                            <li>
                                                                <strong>IP: </strong>
                                                                <xsl:value-of select="ip"/>
                                                            </li>
                                                            <li>
                                                                <strong>MAC Address: </strong>
                                                                <xsl:value-of select="mac"/>
                                                            </li>
                                                        </ul>
                                                    </xsl:for-each>
                                                </li>
                                            </ul>
                                        </xsl:for-each>
                                    </ol>
                                </td>
                                <td>
                                    <ol>
                                        <xsl:for-each select="apps/app">
                                            <li style="margin:5px;">
                                                <strong>App ID: </strong>
                                                <xsl:value-of select="appsID"/>
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>App Name: </strong>
                                                    <xsl:value-of select="appsName"/>
                                                </li>
                                                <li>
                                                    <strong>Current Version: </strong>
                                                    <xsl:value-of select="currentVersion"/>
                                                </li>
                                                <li>
                                                    <strong>URL: </strong>
                                                    <xsl:value-of select="url"/>
                                                </li>
                                            </ul>
                                        </xsl:for-each>
                                    </ol>
                                </td>                               
                            </tr>
                        </xsl:for-each>
                    </tbody>

                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>  