<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 
        <html> 
            <body> 
                <h2>Table 1</h2> 
                    <table border="1"> 
                        <tr> 
                            <th>Product Name</th>
                            <th>Manufacture ID</th>
                            <th>Description</th>  
                            <th>USD Price</th>                       
                        </tr>  
                        
                        <xsl:for-each select="products/product[@shippable='true']"> 
                            <tr> 
                                <td><xsl:value-of select="productName"/></td>
                                <td><xsl:value-of select="manufacturer/@id"/></td>
                                <td><xsl:value-of select="description"/></td>
                                <td><xsl:value-of select="prices/price[@id='usd']"/></td>
                                
                            </tr> 
                        </xsl:for-each> 

                    </table>

                <h2>Table 2</h2> 
                    <table border="1"> 
                        <tr> 
                            <th>Product Name</th>
                            <th>Description</th>  
                            <th>USD Price</th>
                            <th>Euro Price</th>                       
                        </tr>  
                        
                        <xsl:for-each select="/products/product/manufacturer[@id='acme']"> 
                            <tr> 
                                <td><xsl:value-of select="../productName"/></td>
                                <td><xsl:value-of select="../description"/></td>
                                <td><xsl:value-of select="../prices/price[@id='usd']"/></td>
                                <td><xsl:value-of select="../prices/price[@id='euro']"/></td>
                                
                            </tr> 
                        </xsl:for-each> 
                    </table> 
            </body> 
        </html> 
    </xsl:template>  
</xsl:stylesheet>