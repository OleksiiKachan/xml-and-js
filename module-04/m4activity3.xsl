<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Product Names</h2>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="catalog">
    <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="product">
    <h3>
      <xsl:value-of select="@description"/>
    </h3>
  </xsl:template>
</xsl:stylesheet>
