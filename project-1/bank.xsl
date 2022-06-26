<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Banks</h2>
                <table border="1">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Clients</th>
                    </tr>

                    <xsl:for-each select="banks/bank">
                        <tr>ß
                            <td>
                                <xsl:value-of select="@id" />
                            </td>
                            <td>
                                <xsl:value-of select="name" />
                            </td>
                            <td>
                                <xsl:value-of select="address/street" />
                                <br />
                                <xsl:value-of select="address/city" />
                                <br />
                                <xsl:value-of select="address/region" />
                                <br />
                                <xsl:value-of select="address/country" />
                            </td>
                            <td>
                                <table border="1">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Cards</th>
                                    </tr>

                                    <xsl:for-each select="clients/client">
                                        <tr>
                                            <td>
                                                <xsl:value-of select="@id" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="lastName" />
                                                ,
                                                <xsl:value-of select="firstName" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="email" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="phoneNumber" />
                                            </td>
                                            <td>
                                                <table border="1">
                                                    <tr>
                                                        <th>Number</th>
                                                        <th>Type</th>
                                                        <th>CVV</th>
                                                        <th>Expires At</th>
                                                    </tr>
                                                    <xsl:for-each select="cards/card">
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="@number" />
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="type" />
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="cvv" />
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="expiresAt" />
                                                            </td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </td>
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