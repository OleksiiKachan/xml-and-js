<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">


        <html>
            <body>
                <h1 style="text-align:center">Stock Market</h1>
                
                    <xsl:for-each select="stockmarket">
                        
                        
                        

                                <table border="3">
                                    <tr bgcolor="#9999FF">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Currency</th>
                                        <th>Address</th>
                                        <th>Stocks</th>
                                        <th>accounts</th>
                                       
                                    </tr>
                                    <xsl:for-each select="market">
                                        <tr>
                                            <td>
                                                <xsl:value-of select="@id" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="name" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="currency" />
                                            </td>
                                            
                                            <td>
                                                <xsl:for-each select="address">
                                                    <table border="2">
                                                        <tr bgcolor="#FFCC99">
                                                            <th>Street</th>
                                                            <th>City</th>
                                                            <th>Region</th>
                                                            <th>Country</th>
                                                        </tr>
                                                        
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="street" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="city" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="region" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="country" />
                                                                </td>
                                                            </tr>
                                                       
                                                    </table>
                                                </xsl:for-each>
                                            </td>
                                            <td>
                                                <xsl:for-each select="stocks">
                                                    <table border="2">
                                                        <tr bgcolor="#FFCC99">
                                                            <th>Symbol</th>
                                                            <th>Name</th>
                                                            <th>Sector</th>
                                                            <th>Industry</th>
                                                            <th>Market Cap</th>
                                                            <th>Price</th>
                                                        </tr>
                                                        <xsl:for-each select="stock">
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="@symbol" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="name" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="sector" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="industry" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="marketcap" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="price" />
                                                                </td>
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:for-each>
                                            </td>
                                            <td>
                                                <xsl:for-each select="accounts">
                                                    <table border="2">
                                                        <tr bgcolor="#FFCC99">
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Gender</th>
                                                            <th>Occupation</th>
                                                            <th>IBAN</th>
                                                            
                                                        </tr>
                                                        <xsl:for-each select="account">
                                                            <tr>
                                                                <td>
                                                                    <xsl:value-of select="holder/firstname" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="holder/lastname" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="holder/gender" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="holder/occupation" />
                                                                </td>
                                                                <td>
                                                                    <xsl:value-of select="bank/iban" />
                                                                </td>
                                                                
                                                            </tr>
                                                        </xsl:for-each>
                                                    </table>
                                                </xsl:for-each>
                                            </td>
                                            
                                            
                                            
                                        </tr>
                                    </xsl:for-each>
                                </table>
                          
                    </xsl:for-each>
                
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>