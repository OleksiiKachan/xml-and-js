<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Automotive</title>
            </head>
            <body>
                <h1>ShowRoom</h1>
                <table border="1">
                    <tr>
                        <th>ShowRoom ID</th>
                        <th>ShowRoom Name</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Region</th>
                        <th>Country</th>
                        <th>Car Models</th>
                        <th>Cars</th>
                    </tr>
                    <xsl:for-each select="automotive/showRoom">
                        <tr>
                            <td><xsl:value-of select="showId" /></td>
                            <td><xsl:value-of select="showName" /></td>
                            <td><xsl:value-of select="street" /></td>
                            <td><xsl:value-of select="city" /></td>
                            <td><xsl:value-of select="region" /></td>
                            <td><xsl:value-of select="country" /></td>
                            <td><xsl:apply-templates select="carModels"/></td>
                            <td><xsl:apply-templates select="cars"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>   
        </html>
    </xsl:template>

    <xsl:template match="carModels">  
            <xsl:for-each select="carModel">
                <ul>
                    <li>Car ID : <xsl:value-of select="carId" /></li>
                    <li>car name : <xsl:value-of select="carName" /></li>
                    <li>year : <xsl:value-of select="year" /></li>
                    <li>usd price : <xsl:value-of select="usdPrice" /></li>
                    <li>cad price : <xsl:value-of select="cadPrice" /></li>
                    <li>euro price : <xsl:value-of select="euroPrice" /></li>
                    <li>Pound Price : <xsl:value-of select="poundPrice" /></li>
                </ul>
            </xsl:for-each>
        
    </xsl:template>
    <xsl:template match="cars">
            <xsl:for-each select="car">
                <ul>
                    <li>VIN : <xsl:value-of select="vin" /></li>
                    <li>Color : <xsl:value-of select="color" /></li>
                    <li>Buyer : <xsl:value-of select="buyer" /></li>
                </ul>
            </xsl:for-each>  
    </xsl:template>
</xsl:stylesheet>