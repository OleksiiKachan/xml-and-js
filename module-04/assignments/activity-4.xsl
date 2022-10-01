<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <body>
                <h2>Shippable Products</h2>

                <table border="1">
                    <tr bgcolor="#51b9ff"> 
                        <th>Product Name</th> 
                        <th>Manufacturer Id</th> 
                        <th>Description</th> 
                        <th>Price</th>
                    </tr> 

                    <xsl:for-each select="products/product">
                        <xsl:if test="@shippable">
                            <tr> 
                                <td><xsl:value-of select="productName"/></td> 
                                <td><xsl:value-of select="manufacturer/@id"/></td> 
                                <td><xsl:value-of select="description"/></td> 
                                <td><xsl:value-of select="prices/price[1]/text()"/></td>
                            </tr>
                        </xsl:if> 
                    </xsl:for-each>
                </table>


                <h2>Manufacturer ID is "acme"</h2>

                <table border="1">
                    <tr bgcolor="#51ff71"> 
                        <th>Product Name</th> 
                        <th>Description</th> 
                        <th>USD Price</th> 
                        <th>EUR Price</th>
                    </tr> 

                    <xsl:for-each select="products/product">
                        <xsl:if test="manufacturer/@id = 'acme'">
                            <tr> 
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="description"/></td> 
                                <td><xsl:value-of select="prices/price[1]/text()"/></td>
                                <td><xsl:value-of select="prices/price[2]/text()"/></td>
                            </tr>
                        </xsl:if> 
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>