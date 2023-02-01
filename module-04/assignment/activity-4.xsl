<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html>
    <body>
        <h2>Table 1</h2>
        <h3>**Columns**: Product name, Manufacturer id, Description, USD price</h3>
        <h3>**Condition**: shippable items</h3>
        <table border="1">
            <tr bgcolor="#9acd32">
                <th>Product Name</th>
                <th>Manufacturer id</th>
                <th>Description</th>
                <th>USD price</th>
            </tr>

            <xsl:for-each select="products/product">
            <xsl:if test="@shippable='true'">
                <tr>
                    <td><xsl:value-of select="productName"/></td>
                    <td><xsl:value-of select="manufacturer[@id]"/></td>
                    <td><xsl:value-of select="description"/></td>
                    <td><xsl:value-of select="prices/price[1]"/></td>
                </tr>
            </xsl:if>
            </xsl:for-each>
        </table>

        <h2>Table 2</h2>
        <h3>**Columns**: Product name, Description, USD price, Euro price</h3>
        <h3>**Condition**: manufacturer id is "acme"</h3>
        <table border="1">
            <tr bgcolor="#FFA500">
                    <th>product Name</th>
                    <th>Description</th>
                    <th>USD price</th>
                    <th>Euro price</th>
            </tr>
            <xsl:for-each select="products/product">
            <xsl:if test="manufacturer/@id='acme'">
            <tr>
                <td><xsl:value-of select="productName"/></td>
                <td><xsl:value-of select="description"/></td>
                <td><xsl:value-of select="prices/price[1]"/></td>
                <td><xsl:value-of select="prices/price[3]"/></td>
            </tr>
            </xsl:if>
            </xsl:for-each>

        </table>


    </body>
</html>
</xsl:template>
</xsl:stylesheet>