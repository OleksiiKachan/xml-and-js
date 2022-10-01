<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/">
    <html> 
    <head>
<style>
b{    color:#c53c12; text-decoration: underline;      text-decoration-color: blue;}
h1{color:magenta;}
</style>
    </head>
        <body>

        <h1>Products details </h1>
         <xsl:for-each select="products/product"><p>
    <ul><li>
<b>Name:</b> <xsl:value-of select="productName"/>, <b>Sku: </b> <xsl:value-of select="@sku"/>,
<b>Created at: </b> <xsl:value-of select="@createdAt"/>,
 <b>Shippable: </b> <xsl:value-of select="@shippable"/>, 
<b>Manufacturer: </b> <xsl:value-of select="manufacturer"/>,   
<b>Description: </b> <xsl:value-of select="description"/>,<br></br>                                                  
<b>Product Items: </b> <xsl:value-of select="productItems"/> ,
<b>Prices in Usd: </b> <xsl:value-of select="prices/price"/> ,
<b>Prices in cad: </b> <xsl:value-of select="prices/price[2]"/> ,
<b>Prices in euros: </b> <xsl:value-of select="prices/price[3]"/> ,
    </li>
    </ul></p>
        </xsl:for-each>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>  