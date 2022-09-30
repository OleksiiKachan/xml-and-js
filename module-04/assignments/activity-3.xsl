<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 
        <html>
            <body>
                 <h2 style="color:red">All the Products</h2>
                    <xsl:for-each select="products/product">

                        <h1 style="color:green">New product</h1>

                        <h3 style="color:blue" >Product Name</h3>
                        <xsl:value-of select="productName"/> <br/>
                       
                        <h3 style="color:blue">Manufacturer</h3>
                        <xsl:value-of select="productName"/> <br/>
                        
                        <h3 style="color:blue">Description</h3>
                        <xsl:value-of select="manufacturer"/> <br/>
                        
                        <h3 style="color:blue">Price</h3>
                        <ol>
                            <xsl:for-each select="prices/price">
                                <li>
                                    <xsl:value-of select="text()"/>
                                </li>
                            </xsl:for-each>
                        </ol>

                        <h3 style="color:blue">ProductItems</h3>
                        <xsl:value-of select="productItems"/>

                    </xsl:for-each>
            </body>
        </html>
    </xsl:template>  
</xsl:stylesheet>