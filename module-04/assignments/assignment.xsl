<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<title>Catalog</title>
</head>
<body>
<h1>Catalog</h1>
<xsl:for-each select="catalog/product">
<ul>
<li><h3>Product Id : <xsl:value-of select="@product_id"></xsl:value-of></h3></li>
<li><p><xsl:value-of select="@description"/></p> </li>
<li>
<article>
<table border='8'>
<tr bgcolor="lightgrey">
<th>item_number</th>
<th>price</th>
<th>Gender</th>
<th>Small</th>
<th>Medium</th>
<th>Large</th>
<th>ExtraLarge</th>
</tr>
<xsl:for-each select="catalog_item">
<tr>
<td>

<xsl:value-of select="item_number"/>
</td>
<td>
<xsl:value-of select="price"/>
</td>
<td>
<xsl:choose>
<xsl:when test="@gender='Men'">M</xsl:when>
<xsl:when test="@gender='Women'">F</xsl:when>
</xsl:choose>
</td>

<td>
<xsl:apply-templates select="size[@description='Small']"/>
</td>
<td>
<xsl:apply-templates select="size[@description='Medium']"/>
</td>
<td>
<xsl:apply-templates select="size[@description='Large']"/>
</td>
<td>
<xsl:apply-templates select="size[@description='Extra Large']"/>
</td>
</tr>
</xsl:for-each>
</table>
</article>
</li>
</ul>
</xsl:for-each>
</body>
</html>
</xsl:template>


<xsl:template match="size">
<table border="5px solid black">
<tr>
<th>Color</th>
<th>Image</th>
</tr>
<xsl:for-each select="color_swatch">
<tr>

<td><xsl:value-of select="."/></td>
<td><xsl:value-of select="@image"/></td>

</tr>
</xsl:for-each>
</table>
</xsl:template>
</xsl:stylesheet>