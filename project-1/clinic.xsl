<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Clinics</h1>     
                    <table id="main">
                        <tr>
                            <th>ID</th>
                            <th>Address</th>
                            <th>Employees</th>
                            <th>Drugs</th>
                        </tr>
                        <xsl:for-each select="clinics/clinic">
                        <tr>
                            <td><xsl:value-of select="@id"/></td>
                            <td><xsl:value-of select="address/street"/>,<xsl:value-of select="address/city"/>,<xsl:value-of select="address/region"/>,<xsl:value-of select="address/country"/></td>
                            <td>
                                <table id="emp">
                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Employement Type</th>
                                    </tr>
                                    <xsl:for-each select="employees/employee">
                                    <tr>
                                        <td><xsl:value-of select="@id"/></td>
                                        <td><xsl:value-of select="firstName"/></td>
                                        <td><xsl:value-of select="lastName"/></td>
                                        <td><xsl:value-of select="empType"/></td>
                                    </tr>
                                    </xsl:for-each>
                                </table>                                                                                
                            </td>
                            <td>
                                <table id="drugs">
                                    <tr>
                                        <th>Manufacturer</th>
                                        <th>Brand</th>
                                        <th>Name</th>
                                        <th>Code</th>
                                        <th>Diagnosis Code</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                    </tr>
                                    <xsl:for-each select="drugs/drug">
                                    <tr>
                                        <td><xsl:value-of select="manufacturer"/></td>
                                        <td><xsl:value-of select="brand"/></td>
                                        <td><xsl:value-of select="name"/></td>
                                        <td><xsl:value-of select="code"/></td>
                                        <td><xsl:value-of select="diagnosisCode"/></td>
                                        <td><xsl:value-of select="diagnosisDescription"/></td>
                                        <td><xsl:value-of select="qty"/></td>
                                    </tr>                                        
                                    </xsl:for-each>                                    
                                </table>                                    
                                </td>
                            </tr>
                            </xsl:for-each>
                    </table>  
            </body>
            <style>
            h1{
                font-family: calibri;
                font-size: 45px;
            }
            #main{
                border: 2px solid black;
                border-collapse: collapse;
            }
            #main tr td{
                border: 1px solid black;
                border-collapse: collapse;
                margin: 5px;
            }
            #main th{
                font-size: 18px;
                font-family: cambria;
                border: 1px solid black;
                background-color: lightblue;
            }
            #emp{
                margin:5px;
                border: 1px solid black;
                border-collapse: collapse;
            }
            #emp th{
                font-size: 15px;
                background-color: lightgreen;
                border: 1px solid black;
            }
            #drugs th{
                font-size: 15px;
                border: 1px solid black;
                background-color: lightgreen;
            }
            #drugs{
                border-collapse: collapse;
                margin: 5px;
            }
            </style>
        </html>
    </xsl:template>
</xsl:stylesheet>