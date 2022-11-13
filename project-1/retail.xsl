<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <head>
                <style>
                    body {
                        font-size: 16px;
                        font-family: sans-serif;
                        color: #444;
                    }
                    ul {
                    list-style: none;
                    }
                    h1 {
                    font-size: 40px;
                    }
                    li h1 {
                    font-size: 30px;
                    }
                    li p {
                    font-size: 30px;
                    }
                </style>
            </head>
            <body>
                <h1 align="center">Project 1 - Retail</h1>
                <h5 align="center">Submitted by:</h5>
                <h3 style="margin: -10px 0;" align="center">Gunveet Singh Dhillon</h3>
                <h3 align="center">N01285626</h3>
                <xsl:for-each select="retail/data">
                    <ul style="margin-top: 50px; margin-bottom: 5px;">
                        <li><strong style="font-size: 34px;">#<xsl:value-of select="id"/></strong></li>
                        <li><strong style="font-size: 24px;">Address: </strong><xsl:value-of select="concat(address/street,', ',address/city,', ',address/country)"/></li>
                        <li>
                            <h2 style="font-size: 24px; margin-top: 30px; margin-bottom: 5px;">Employees</h2>
                            <xsl:for-each select="employees/detail">
                            <br/>
                            <ul style="background-color: rgba(0, 0, 0, 0.05); padding: 20px 40px; border-radius: 20px; margin-right: 40px;">
                                <li style="line-height: 1.4;"><strong>Emp. ID: </strong><xsl:value-of select="id"/></li>
                                <li style="line-height: 1.4;"><strong>Name: </strong><xsl:value-of select="concat(firstName,' ',lastName)"/></li>
                                <li style="line-height: 1.4;"><strong>Position: </strong><xsl:value-of select="position"/></li>
                                <li style="line-height: 1.4;"><strong>Type: </strong><xsl:value-of select="empType"/></li>
                            </ul>
                            </xsl:for-each>
                        </li>
                        <li>
                            <h2 style="font-size: 24px; margin-top: 50px; margin-bottom: 5px;">Products</h2>
                            <xsl:for-each select="products/detail">
                            <br/>
                            <ul style="background-color: rgba(0, 0, 0, 0.05); padding: 20px 40px; border-radius: 20px; margin-right: 40px;">
                                <li style="line-height: 1.4;"><strong>Product #: </strong><xsl:value-of select="id"/></li>
                                <li style="line-height: 1.4;"><strong>Product Name: </strong><xsl:value-of select="name"/></li>
                                <li style="line-height: 1.4;"><strong>Quantity: </strong><xsl:value-of select="qty"/></li>
                                <li style="line-height: 1.4;"><h3 style="text-decoration: underline; margin-bottom: 4px;">Price</h3></li>
                                <li style="line-height: 1.4;"><strong>USD: </strong><xsl:value-of select="usdPrice"/></li>
                                <li style="line-height: 1.4;"><strong>EUR: </strong><xsl:value-of select="euroPrice"/></li>
                                <li style="line-height: 1.4;"><strong>Pound: </strong><xsl:value-of select="poundPrice"/></li>
                            </ul>
                            </xsl:for-each>
                        </li>
                    </ul>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>