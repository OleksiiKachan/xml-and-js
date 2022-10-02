<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html>
    <body>
        <h1 style="color:red">Products</h1>
        <xsl:for-each select="products/product">
            <label style="font-weight:bold;color:blue">Product Name: </label><xsl:value-of select="productName"/><br/>
            <label style="font-weight:bold;color:blue">Manufacturer: </label><xsl:value-of select="manufacturer"/><br/>
            <label style="font-weight:bold;color:blue">Description: </label><xsl:value-of select="description"/><br/>
            <label style="font-weight:bold;color:blue">Prices: </label><xsl:value-of select="prices"/><br/>
            <label style="font-weight:bold;color:blue">Product Items: </label><xsl:value-of select="productItems"/><br/><br/>
        </xsl:for-each>
    </body>    
</html>

</xsl:template>
</xsl:stylesheet>