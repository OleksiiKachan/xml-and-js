<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
    <head>
        <title>Catalog</title> <!-- title for tab -->
        <!-- applied some styles to the table -->
        <style>
            h2{
                background: -webkit-linear-gradient(rgb(237, 20, 20), rgb(237, 221, 51));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            table{
                border-collapse: collapse;
                border: solid blue 4px;
            }
            th{
                font-weight: bold;
                color: red;
                font-size: 18px;
                padding: 5px 5px;
                border: solid blue 3px;
            }
            td{
                color: green;
                padding: 0 10px;
                border: solid blue 2px;
            }
            th, td{
                text-align: center;
                
            }
            table tr table{
                margin: 10px auto;
            }
            table tr table td{
                width: 50px;
            }
        </style>
    </head>
      <body> 
        <h2>Clinics</h2> 
            <!-- creating main table -->
            <table border="1">
                <tr> 
                    <th>Clinic Id</th>
                    <th>Address</th> 
                    <th>Employee</th> 
                    <th>Drug</th> 
                </tr> 
                <!-- Loop trough all clinics -->
                <xsl:for-each select="clinics/clinic"> 
                    <tr>
                        <td>
                            <xsl:value-of select="@id"/>
                        </td>
                        <td>
                            <!-- inner table for displaying address -->
                            <table border="1">
                                <tr>
                                    <th>Street</th>
                                    <th>City</th> 
                                    <th>Region</th> 
                                    <th>Country</th>
                                </tr>
                                <tr>
                                    <!-- Display address of clinic -->
                                    <td><xsl:value-of select="address/street"/></td>
                                    <td><xsl:value-of select="address/city"/></td>
                                    <td><xsl:value-of select="address/region"/></td>
                                    <td><xsl:value-of select="address/country"/></td>
                                </tr>
                            </table> 
                        </td>
                        <td>
                            <!-- inner table for displaying Each Employee -->
                            <table border="1">
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th> 
                                    <th>Emp Type</th> 
                                </tr>
                                <!-- Loop trough all employees -->
                                <xsl:for-each select="employee"> 
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
                            <!-- inner table for displaying Each Drug -->
                            <table border="1">
                                <tr>
                                    <th>Code</th>
                                    <th>Manufacturer</th>
                                    <th>Brand</th> 
                                    <th>Name</th> 
                                    <th>Diagnosis Code</th> 
                                    <th>Diagnosis Description</th> 
                                    <th>Qty</th> 
                                </tr>
                                <!-- Loop trough all Drug -->
                                <xsl:for-each select="drug"> 
                                    <tr>
                                        <td><xsl:value-of select="@code"/></td>
                                        <td><xsl:value-of select="manufacturer"/></td>
                                        <td><xsl:value-of select="brand"/></td>
                                        <td><xsl:value-of select="name"/></td>
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
    </html>
  </xsl:template>  
</xsl:stylesheet>