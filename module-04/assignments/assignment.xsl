<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/">
    <html>
      <body>
        <h1>Catalog</h1>

        <ol>
          <li>
            <article>
              <h3><xsl:value-of select="catalog/product/@product_id" /></h3>
            </article>
          </li>
          <li>
            <article>
              <p><xsl:value-of select="catalog/product/@description" /></p>
            </article>
          </li>
        </ol>

        <table border="1">
          <tr>
            <th>Item Number</th>
            <th>Price</th>
            <th>Gender</th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
            <th>Extra Large</th>
          </tr>
          <xsl:for-each select="catalog/product/catalog_item">
            <tr>
              <td><xsl:value-of select="item_number" /></td>
              <td><xsl:value-of select="price" /></td>
              <td>
                <xsl:choose>
                  <xsl:when test="@gender='Men'">M</xsl:when>
                  <xsl:when test="@gender='Women'">W</xsl:when>
                </xsl:choose>
              </td>
              <td><xsl:apply-templates select="size[@description='Small']" /></td>
              <td><xsl:apply-templates select="size[@description='Medium']" /></td>
              <td><xsl:apply-templates select="size[@description='Large']" /></td>
              <td><xsl:apply-templates select="size[@description='Extra Large']" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="size">
    <table broder="1">
      <tr>
        <th>Color</th>
        <th>Image</th>
      </tr>
      <xsl:for-each select="color_swatch">
        <tr>
          <td><xsl:value-of select="." /> </td>
          <td><xsl:value-of select="@image" /> </td>
        </tr>
      </xsl:for-each>
  </table>
    
  </xsl:template>
</xsl:stylesheet>