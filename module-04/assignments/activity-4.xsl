<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- Name: Naitik Panchal-->
<!-- N-No: N01512962-->
    <xsl:template match="/">
        <html>
            <body>
                <ul>
                    <li>
                        <h2>Products table 1: </h2>
                        <table border="1">
                            <tr bgcolor="#eab676">
                                <th>Product name</th>
                                <th>Manufacturer id</th>
                                <th>Description</th>
                                <th>USD price</th>
                            </tr>
                            <!-- Selecting only shippable products-->    
                            <xsl:for-each select="products/product[@shippable='true']">
                            <tr bgcolor="#dbeef2">
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="manufacturer/@id"/></td>
                                <td><xsl:value-of select="description"/></td>
                                <td><xsl:value-of select="prices/price"/></td>
                            </tr>
                            </xsl:for-each>
                        </table>
                    </li>
                    <br/>
                    <li>
                        <h2>Products table 2: </h2>
                        <table border="1">
                            <tr bgcolor="#eab676">
                                <th>Product name</th>
                                <th>Description</th>
                                <th>USD price</th>
                                <th>Euro Price</th>
                            </tr>
                            <!-- Selecting products with manufacturing id as 'acme'-->
                            <xsl:for-each select="products/product/manufacturer[@id='acme']/..">
                            <tr bgcolor="#dbeef2">
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="description"/></td>
                                <td><xsl:value-of select="prices/price[1]"/></td>
                                <td><xsl:value-of select="prices/price[3]"/></td>
                            </tr>
                            </xsl:for-each>
                        </table>
                    </li>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>