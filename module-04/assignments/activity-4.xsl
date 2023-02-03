<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 

        <html>
            <body>
                <h1>LIST OF PRODUCTS</h1>

            
                <table border = "10">
                    <tr bgcolor = "#32c5cd">
                        <td>Product Name</td>
                        <td>Manufacturer Id</td>
                        <td>Description</td>
                        <td>USD Price</td>
                    </tr>
            
                    <xsl:for-each select="products/product[@shippable='true']"> 
                        <tr bgcolor = "#acc2c2">
                            <td><xsl:value-of select="productName"/></td>
                            <td><xsl:value-of select="manufacturer/@id"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="prices/price[1]"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

            
                <table border="10">
                    <tr bgcolor="#32c5cd">
                        <td>Product Name</td>
                        <td>Description</td>
                        <td>USD Price</td>
                        <td>Euro Price</td>
                    </tr>
            
                    <xsl:for-each select="products/product/manufacturer[@id='acme']/.."> 
                        <tr bgcolor = "#acc2c2">
                            <td><xsl:value-of select="productName"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="prices/price[1]"/></td>
                            <td><xsl:value-of select="prices/price[3]"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>