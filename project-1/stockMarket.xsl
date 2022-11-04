<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
    <xsl:template match="/">
        <html>
            <body>
                <h2 align="center">Stock Market</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Branch ID</th>
                        <th>Name</th>
                        <th>Currency</th>
                        <th>Address</th>
                        <th>Stocks</th>
                        <th>Accounts</th>
                    </tr>
                    <xsl:for-each select="market/branch"> 
                        <tr>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="currency"/></td>
                            <td>
                                <xsl:for-each select="address">      
                                    <xsl:value-of select="street"/> , <xsl:value-of select="city"/>, <xsl:value-of select="region"/>, <xsl:value-of select="country"/>
                                </xsl:for-each>
                            </td>
                            <td>
                                <table border="1" width="800px" height="200px">
                                    <tr bgcolor="yellow">
                                        <th width="60px">Symbol</th>
                                        <th width="270px">Stock Name</th>
                                        <th width="80px">Sector</th>
                                        <th width="240px">Industry</th>
                                        <th width="90px">MarketCap</th>
                                        <th width="60px">Price</th>
                                    </tr>
                                    <xsl:for-each select="stocks">
                                        <tr>
                                            <td><xsl:value-of select="symbol"/></td>
                                            <td><xsl:value-of select="stockName"/></td>
                                            <td><xsl:value-of select="sector"/></td>
                                            <td><xsl:value-of select="industry"/></td>
                                            <td><xsl:value-of select="marketCap"/></td>
                                            <td><xsl:value-of select="price"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td>
                                <table border="1" width="800px" height="200px">
                                    <tr bgcolor="orange">
                                        <th width="100px">First Name</th>
                                        <th width="100px">Last Name</th>
                                        <th width="100px">Gender</th>
                                        <th width="200px">Occupation</th>
                                        <th width="300px">iban</th>
                                    </tr>
                                    <xsl:for-each select="accounts">
                                        <tr>
                                            <td><xsl:value-of select="holder/firstName"/></td>
                                            <td><xsl:value-of select="holder/lastName"/></td>
                                            <td><xsl:value-of select="holder/gender"/></td>
                                            <td><xsl:value-of select="holder/occupation"/></td>
                                            <td><xsl:value-of select="bank/iban"/></td>
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