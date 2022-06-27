<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Stock Market</h1>
                <ol>
                    <xsl:for-each select="stockMarket/user">
                        <li>
                            <article style="margin-bottom: 50px;">
                                <h2>User Information</h2>
                                <table border="1">
                                    <tr bgcolor="#b0c4de">
                                        <th width="300px">ID</th>
                                        <th width="100px">Exchange</th>  
                                        <th width="100px">Currency</th> 
                                        <th width="150px">Street</th> 
                                        <th width="100px">City</th> 
                                        <th width="150px">Region</th> 
                                        <th width="100px">Country</th>  
                                    </tr>

                                    <tr>
                                        <td><xsl:value-of select="id"/></td>
                                        <td><xsl:value-of select="exchange"/></td>
                                        <td><xsl:value-of select="currency"/></td>
                                        <td><xsl:value-of select="address/street"/></td>
                                        <td><xsl:value-of select="address/city"/></td>
                                        <td><xsl:value-of select="address/region"/></td>
                                        <td><xsl:value-of select="address/country"/></td>
                                    </tr>
                                </table>

                                <h2>Stocks Information</h2>
                                <table border="1">
                                    <tr bgcolor="#b0c4de">
                                        <th width="100px">Symbol</th>
                                        <th width="300px">Name</th>  
                                        <th width="150px">Sector</th> 
                                        <th width="300px">Industry</th> 
                                        <th width="100px">MarketCap</th> 
                                        <th width="100px">Price</th>  
                                    </tr>
                                    
                                    <xsl:for-each select="stocks/stock"> 
                                        <tr>
                                            <td><xsl:value-of select="symbol"/></td>
                                            <td><xsl:value-of select="name"/></td>
                                            <td><xsl:value-of select="sector"/></td>
                                            <td><xsl:value-of select="industry"/></td>
                                            <td><xsl:value-of select="marketCap"/></td>
                                            <td><xsl:value-of select="price"/></td>
                                        </tr>
                                    </xsl:for-each> 
                                </table>

                                <h2>Accounts Information</h2>
                                <table border="1">
                                    <tr bgcolor="#b0c4de">
                                        <th width="100px">First Name</th>
                                        <th width="100px">Last Name</th>  
                                        <th width="100px">Gender</th> 
                                        <th width="150px">Occupation</th> 
                                        <th width="300px">iban</th> 
                                    </tr>
                                    
                                    <xsl:for-each select="accounts/account"> 
                                        <tr>
                                            <td><xsl:value-of select="holder/firstName"/></td>
                                            <td><xsl:value-of select="holder/lastName"/></td>
                                            <td><xsl:value-of select="holder/gender"/></td>
                                            <td><xsl:value-of select="holder/occupation"/></td>
                                            <td><xsl:value-of select="bank/iban"/></td>
                                        </tr>
                                    </xsl:for-each> 
                                </table>
                            </article>
                        </li>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
