<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/">
    <html>
        <body>
            <h2 style= "color:blue; text-align:center"> All Prodoucts</h2>
            <div>
             <xsl:for-each select="products/product">
            <h2>Product 
                 sku: <xsl:value-of select="@sku"/>
            </h2>
            <h4>Product Name:
                  <xsl:value-of select="productName"/>
            </h4>
            <h4>Manufacturer:
                   <xsl:value-of select="manufacturer"/>
             </h4>
            <h4>Description: 
                  <xsl:value-of select="description"/>    
            </h4>
            <h3>Prices:</h3>
              <ul>
              <xsl:for-each select="prices/price">
                <li>Price:
                    <xsl:value-of select="text()"/> 
                </li>
                 </xsl:for-each>
            </ul>
            <h4>Product Items: 
                   <xsl:value-of select="productItems"/>
            </h4>
            </xsl:for-each>
            </div>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>  