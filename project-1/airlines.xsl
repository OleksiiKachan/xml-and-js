<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <style>
                tr,th{
                text-align:center;
                background-color:#EFEFEF;
                }
                td{
                background-color:#FFFFFF;
                }
            </style>
            <body>
                <table border="1" cellspacing="0" cellpadding="20">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Region</th>
                        <th>Country</th>
                        <th>Park</th>
                        <th>routes</th>
                    </tr>
                    <xsl:for-each select="airlines/info">
                        <tr>
                            <td>
                                <xsl:value-of select="id"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="name"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="street"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="city"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="region"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="country"></xsl:value-of>
                            </td>
                            <td>
                                <table border="1" cellspacing="0" cellpadding="5">
                                    <tr>
                                        <th>
                                            Id
                                        </th>
                                        <th>
                                            routeType
                                        </th>
                                        <th>
                                            manufacturer
                                        </th>
                                        <th>
                                            year
                                        </th>
                                    </tr>
                                    <xsl:for-each select="park">
                                        <tr>
                                            <td>
                                                <xsl:value-of select="id"></xsl:value-of>
                                            </td>
                                            <td>
                                                <xsl:value-of select="routeType"></xsl:value-of>
                                            </td>
                                            <td>
                                                <xsl:value-of select="manufacturer"></xsl:value-of>
                                            </td>
                                            <td>
                                                <xsl:value-of select="year"></xsl:value-of>
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td>
                                <table border="1" cellspacing="0" cellpadding="18">
                                    <tr>
                                        <th>vehicle</th>
                                        <th>departure</th>
                                        <th>destination</th>
                                    </tr>
                                    <xsl:for-each select="routes">
                                        <tr>
                                            <td>
                                                <xsl:value-of select="vehicle"></xsl:value-of>
                                            </td>
                                            <td>
                                                <table border="1" cellspacing="0" cellpadding="5">
                                                    <xsl:for-each select="departure">
                                                        <tr>
                                                            <th>airport</th>
                                                            <th>city</th>
                                                            <xsl:if test="region">
                                                                <th>region</th>
                                                            </xsl:if>
                                                            <th>country</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="airport"></xsl:value-of>
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="city"></xsl:value-of>
                                                            </td>
                                                            <xsl:if test="region">
                                                                <td>
                                                                    <xsl:value-of select="region"></xsl:value-of>
                                                                </td>
                                                            </xsl:if>
                                                            <td>
                                                                <xsl:value-of select="country"></xsl:value-of>
                                                            </td>
                                                        </tr>
                                                    </xsl:for-each>
                                                </table>
                                            </td>
                                            <td>
                                                <table border="1" cellspacing="0" cellpadding="5">
                                                    <xsl:for-each select="destination">
                                                        <tr>
                                                            <th>airport</th>
                                                            <th>city</th>
                                                            <xsl:if test="region">
                                                                <th>region</th>
                                                            </xsl:if>
                                                            <th>country</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <xsl:value-of select="airport"></xsl:value-of>
                                                            </td>
                                                            <td>
                                                                <xsl:value-of select="city"></xsl:value-of>
                                                            </td>
                                                            <xsl:if test="region">
                                                                <td>
                                                                    <xsl:value-of select="region"></xsl:value-of>
                                                                </td>
                                                            </xsl:if>
                                                            <td>
                                                                <xsl:value-of select="country"></xsl:value-of>
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