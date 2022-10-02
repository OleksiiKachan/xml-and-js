<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<xsl:template match="/"> 
<html>
<body>
<h1> First Table</h1>
<table border='2'>
<tr>
<th>productName</th>
<th>id</th>
<th>description</th>
<th>prices</th>
</tr>
<xsl:for-each select="products/product"> 
    <xsl:if test="@shippable='true'">
                            <tr>
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="manufacturer/@id"/></td>
                                <td><xsl:value-of select="description"/></td>
                                <td><xsl:value-of select="prices/price[1]"/></td>
                            </tr>
    </xsl:if>
</xsl:for-each> 
</table>

<h1> Second Table</h1>

<table border='2'>
<tr>
<th>productName</th>
<th>description</th>
<th>price in USD</th>
<th>price in Euros</th>
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