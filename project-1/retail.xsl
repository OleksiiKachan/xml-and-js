<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/"> 
    <html> 
        <body>
            <h2>Retail Catalog</h2>
                <table border="1">
                    <tr>
                        <td>ID</td>
                        <td>Address</td>
                        <td>Employee Details</td>
                        <td>Product Details</td>
                    </tr>
                    <xsl:for-each select="//retailDetails/dataRows"> 
                    <tr>
                        <td><xsl:value-of select="id"/></td>
                        <td>
                            <ul>
                                <li>Street : <xsl:value-of select="address/street"/></li>
                                <li>City : <xsl:value-of select="address/city"/></li>
                                <xsl:choose>
                                    <xsl:when test="address/region">
                                        <li>Region : <xsl:value-of select="address/region"/></li>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <li>Region : NA</li>
                                    </xsl:otherwise>
                                </xsl:choose>
                                <li>Country : <xsl:value-of select="address/country"/></li>
                            </ul>
                        </td>
                        <td>
                            <xsl:for-each select="employees"> 
                            <ul>
                                <li>ID : <xsl:value-of select="@id"/></li>
                                <li>First Name : <xsl:value-of select="firstName"/></li>
                                <li>Last Name : <xsl:value-of select="lastName"/></li>
                                <li>Position : <xsl:value-of select="position"/></li>
                                <li>Type : <xsl:value-of select="empType"/></li>
                            </ul>
                            </xsl:for-each>
                        </td>
                        <td>
                            <xsl:for-each select="products"> 
                            <ul>
                                <li>ID : <xsl:value-of select="@id"/></li>
                                <li>Name : <xsl:value-of select="name"/></li>
                                <li>Quantity : <xsl:value-of select="qty"/></li>
                                <li>USD Price : <xsl:value-of select="usdPrice"/></li>
                                <li>Euro Price : <xsl:value-of select="euroPrice"/></li>
                                <li>Pound Price : <xsl:value-of select="poundPrice"/></li>
                            </ul>
                            </xsl:for-each>
                        </td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>