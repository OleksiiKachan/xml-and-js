<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h1>Retailers</h1>
        <table border="1">
            <tr> 
                <th style="background-color: #96DFD1">Name</th> 
                <th style="background-color: #C9F3EB">Id</th> 
                <th style="background-color: #96DFD1">Street</th> 
                <th style="background-color: #C9F3EB">City</th> 
                <th style="background-color: #96DFD1">Region</th> 
                <th style="background-color: #C9F3EB">Country</th> 
                <th style="background-color: #96DFD1">Models</th>
                <th style="background-color: #C9F3EB">Cars</th>
            </tr> 

            <xsl:for-each select="retailers/retailer">
                <tr>
                    <td style="background-color: #96DFD1; font-weight: bold; text-align: center; color: #003027"><xsl:value-of select="name"/></td>
                    <td style="background-color: #C9F3EB"><xsl:value-of select="@id"/></td>
                    <td style="background-color: #96DFD1"><xsl:value-of select="street"/></td>
                    <td style="background-color: #C9F3EB"><xsl:value-of select="city"/></td>
                    <td style="background-color: #96DFD1"><xsl:value-of select="region"/></td>
                    <td style="background-color: #C9F3EB"><xsl:value-of select="country"/></td>
                    <td style="background-color: #96DFD1">
                        <table border="1" style="background-color: #FFFFFF; margin: auto">
                            <tr> 
                                <th style="background-color: #e6e6e6">Name</th> 
                                <th style="background-color: #f2f2f2">Id</th> 
                                <th style="background-color: #e6e6e6">Year</th> 
                                <th style="background-color: #f2f2f2">USD Price</th> 
                                <th style="background-color: #e6e6e6">CAD Price</th> 
                                <th style="background-color: #f2f2f2">EUR Price</th> 
                                <th style="background-color: #e6e6e6">GBP Price</th>
                            </tr>

                            <xsl:for-each select="carModels/carModel">
                                <tr>
                                    <td style="background-color: #e6e6e6"><xsl:value-of select="name"/></td>
                                    <td style="background-color: #f2f2f2"><xsl:value-of select="@id"/></td>
                                    <td style="background-color: #e6e6e6"><xsl:value-of select="year"/></td>
                                    <td style="background-color: #f2f2f2"><xsl:value-of select="usdPrice"/></td>
                                    <td style="background-color: #e6e6e6"><xsl:value-of select="cadPrice"/></td>
                                    <td style="background-color: #f2f2f2"><xsl:value-of select="euroPrice"/></td>
                                    <td style="background-color: #e6e6e6"><xsl:value-of select="poundPrice"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </td>
                    <td style="background-color: #C9F3EB">
                        <ul>
                            <xsl:for-each select="cars/car">
                                <li>
                                    <p style="margin: 0">VIN: <xsl:value-of select="@vin"/></p>
                                    <p style="margin: 0">Color: <xsl:value-of select="color"/></p>
                                    <p style="margin-top: 0">Buyer: <xsl:value-of select="buyer"/></p>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </td>
                </tr>
            </xsl:for-each>
        </table>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>