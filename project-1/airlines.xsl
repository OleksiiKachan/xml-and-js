<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Airlines</h2>

                <table border="1"> 
                    <tr bgcolor="#9acd32"> 
                      <th>ID</th>                       
                      <th>Name</th>                       
                      <th>Street</th>                       
                      <th>City</th>                       
                      <th>Region</th>                       
                      <th>Country</th>                       
                      <th> List of Parks</th>                       
                      <th> List of Routes</th>                       
                    </tr>

                    <xsl:for-each select="airlines/airline">
                        <tr>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="street"/></td>
                            <td><xsl:value-of select="city"/></td>
                            <td><xsl:value-of select="region"/></td>
                            <td><xsl:value-of select="country"/></td>
                            <td>
                                <ol>
                                    <xsl:for-each select="parks/park">
                                    <li>
                                        <ul>
                                        <li><b>ID: </b><xsl:value-of select="parking_id"/></li>
                                        <li><b>Manufacturer: </b><xsl:value-of select="manufacturer"/></li>
                                        <li><b>Route Type: </b><xsl:value-of select="routeType"/></li>
                                        <li><b>Year: </b><xsl:value-of select="year"/></li>
                                        </ul>
                                    </li>
                                    </xsl:for-each>
                                </ol>
                            </td>
                            <td>
                                
                                <table border="1">
                                    <tr>
                                        <th>Vehicle</th>
                                        <th>Depart Airport</th>
                                        <th>Depart city</th>
                                        <th>Depart Region</th>
                                        <th>Depart Country</th>
                                        <th>Depart Airport</th>
                                        <th>Depart City</th>
                                        <th>Depart Region</th>
                                        <th>Depart Country</th>
                                    </tr>
                                    <xsl:for-each select="routes/route">
                                    <tr>
                                        <td><xsl:value-of select="vehicle"/></td>
                                        <td><xsl:value-of select="departure/dep_airport"/></td>
                                        <td><xsl:value-of select="departure/dep_city"/></td>
                                        <td><xsl:value-of select="departure/dep_region"/></td>
                                        <td><xsl:value-of select="departure/dep_country"/></td>
                                        <td><xsl:value-of select="destination/dest_airport"/></td>
                                        <td><xsl:value-of select="destination/dest_city"/></td>
                                        <td><xsl:value-of select="destination/dest_region"/></td>
                                        <td><xsl:value-of select="destination/dest_country"/></td>
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