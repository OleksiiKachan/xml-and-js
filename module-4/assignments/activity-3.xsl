<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.8" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Products</h2>
<div class="Header" style="font:Arial">
<h2>productName</h2>
<h2>manufacturer</h2>
<h2>description</h2>
</div>
</div>
<xsl:for-each select="class/product">
<div class="Header" style="font:Arial">
<xsl:value-of select="productName">
</xsl:for-each>
<div class="Header">
<xsl:value-of select="manufacturer">
</div>
<div class="Header">
<xsl:value-of select="description">
</div>
</div>
</div>
</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
