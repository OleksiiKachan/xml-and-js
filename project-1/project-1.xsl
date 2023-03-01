<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

        <html>
            <head>
                <title>Software Company</title>
            </head>

            <body>
                <h1>Software Company</h1>

                <table border="1">
                    <thead>
                        <tr bgcolor="#E2725B">
                            <th>Company Name</th>
                            <th>Stock Symbol</th>
                            <th>Domain</th>
                            <th>Apps</th>
                            <th>Employees</th>
                        </tr>
                    </thead>

                    <tbody>
                        <xsl:for-each select="//company">
                            <tr>
                                <td>
                                    <xsl:value-of select="companyName"/>
                                </td>
                                <td>
                                    <xsl:value-of select="stockSymbol"/>
                                </td>
                                <td>
                                    <xsl:value-of select="domain"/>
                                </td>
                                <td>
                                    <ol>
                                        <xsl:for-each select="apps/app">
                                            <li style="margin:10px;">
                                                <strong>App ID: </strong>
                                                <xsl:value-of select="appId"/>
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>App Name: </strong>
                                                    <xsl:value-of select="appName"/>
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

                                <td>
                                    <ol>
                                        <xsl:for-each select="employees/employee">
                                            <li style="margin: 10px">
                                                <strong>Employee ID: </strong>
                                                <xsl:value-of select="employeeId"/>
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>First Name: </strong>
                                                    <xsl:value-of select="firstName"/>
                                                </li>
                                                <li>
                                                    <strong>Last Name: </strong>
                                                    <xsl:value-of select="lastName"/>
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
                            </tr>
                        </xsl:for-each>
                    </tbody>










                </table>
            </body>



        </html>




    </xsl:template>
</xsl:stylesheet>  