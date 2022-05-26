<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
    <head>
    <STYLE>
        li:first-child {font-family: Arial,Univers,sans-serif; font-size: 20pt; font-weight: bold; color: red; }
        h1 {color: blue;}
    </STYLE>
    </head>
      <body> 
        <h2>Products</h2> 
          <h1>productName</h1>
				<br/>
          <xsl:for-each select="products/product">
              <ul>
                <li><xsl:value-of select="@sku"></xsl:value-of></li>
                <li><xsl:value-of select="productName"></xsl:value-of></li>
                <li><xsl:value-of select="manufacturer"></xsl:value-of></li>
                <li><xsl:value-of select="description"></xsl:value-of></li>
                <li><xsl:value-of select="productItems"></xsl:value-of></li>
              </ul>
          </xsl:for-each>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>