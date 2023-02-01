<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<xsl:template match="/"> 
<html>
<body>
<h2> Product names </h2>
<table>
<tr>
<th>Product names</th>
</tr>
<xsl:for-each select = "products/product">
<tr>
<td>
<xsl:value-of select="productName"/>
</td> 
</tr>
</xsl:for-each >
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>