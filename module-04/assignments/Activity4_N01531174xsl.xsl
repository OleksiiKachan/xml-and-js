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

        <h1>Shippable Products details </h1>
     

<table border='1'>
<tr>
<th>Product Name</th><th>Manufacturer id</th><th>Description</th><th>USD PRICE</th>
</tr>    <xsl:for-each select="products/product[@shippable='true']" >
<tr>
<td> <xsl:value-of select="productName"/></td> 
<td> <xsl:value-of select="manufacturer/@id"/></td> 
<td> <xsl:value-of select="description"/></td> 
<td> <xsl:value-of select="prices/price[1]"/></td> 

</tr>
  </xsl:for-each>
</table>

        <h1> Products details with USD AND Euro prices</h1>
<table border='1'>
<tr>
<th>Product Name</th><th>Description</th><th>USD PRICE</th><th>Euro PRICE</th>
</tr>    <xsl:for-each select='products/product/manufacturer[@id="acme"]' >
<tr>
<td> <xsl:value-of select="../productName"/></td> 
<td> <xsl:value-of select="../description"/></td> 
<td> <xsl:value-of select="../prices/price[1]"/></td> 
<td> <xsl:value-of select="../prices/price[3]"/></td> 
</tr>
  </xsl:for-each>
</table>
      
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>  