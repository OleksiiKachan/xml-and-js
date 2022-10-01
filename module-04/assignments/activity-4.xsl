<?xml version="1.0" encoding="UTF-8"?>
<!-- xsl stylesheet declaration with xsl namespace:
Namespace informs the xlst processor which elements are to be processed and which are just used for output.
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- xsl template declaration:
The section of the xml document that has to be prepared is specified by the template to the xlst processor. XPath expressions are required.
It will instruct the processor to use this template to process the full document in our scenario because it matches the document root element.

-->

    <xsl:template match="/">
<!-- HTML tags
used to create formatting. The browser will just render them while the processor skips over them.
-->
<html>
<body>
<h2>Products</h2>
<h2>Table 1</h2>
<table border="3">
<tr bgcolor="lightred" color="black" font-weight="bold">
<th>Product Name</th>
<th>Manufacturer id</th>
<th>Description</th>
<th>USD price</th>
</tr>
<!-- for-each processing instruction
searches for every element that matches the XPath expression.
-->
<xsl:for-each select="products/product">
<xsl:if test="@shippable='true'">
<tr>
<td>
<!-- value-of processing instruction
process the element's value if it matches the XPath expression.
-->
<xsl:value-of select="productName"/>
</td>
<td><xsl:value-of select="manufacturer/@id"/></td>
<td><xsl:value-of select="description"/></td>
<td>
<xsl:for-each select="prices/price[1]">
<xsl:value-of select="text()"/>
</xsl:for-each>
</td>
</tr>
</xsl:if>
</xsl:for-each>
</table>
<h2>Table 2</h2>
<table border="4">
<tr bgcolor="lightred" color="black" font-weight="bold">
<th>Product Name</th>
<th>Description</th>
<th>USD price</th>
<th>Euro price</th>
</tr>
<!-- for-each processing instruction
Looks for each element matching the XPath expression
-->
<xsl:for-each select="products/product">
<xsl:if test="manufacturer/@id='acme'">
<tr>
<td>
<!-- value-of processing instruction
process the value of the element matching the XPath expression
-->
<xsl:value-of select="productName"/>
</td>
<td><xsl:value-of select="description"/></td>
<td>
<xsl:for-each select="prices/price[2]">
<xsl:value-of select="text()"/>
</xsl:for-each>
</td>
<td>
<xsl:for-each select="prices/price[3]">
<xsl:value-of select="text()"/>
</xsl:for-each>
</td>
</tr>
</xsl:if>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
