<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> 
        <html> 
            <body>
                <h1 style="color:red">All Products</h1>
                <xsl:for-each select="products/product"> 
                    <ul type="circle">
                        <li>
                            <div style="margin-bottom: 50px;">
                                <h2>
                                    Product Name: 
                                </h2>
                                <p><xsl:value-of select="//productName"/></p>
                                <h2>Manufacture:</h2><p> <xsl:value-of select="//manufacturer"/></p>
                                <h2>Description:</h2><p> <xsl:value-of select="//description"/></p>
                                <h2>Prices:</h2><p>
                                    <xsl:for-each select="prices/price"> 
                                        <ul>
                                            <li>
                                                Price: <xsl:value-of select="text()"/>
                                            </li>
                                        </ul>       
                                    </xsl:for-each> 
                                </p>  
                                <h2>Product Items: </h2><p><xsl:value-of select="//productItems"/></p>
                            </div>
                        </li>
                    </ul>
                </xsl:for-each> 
            </body>
        </html>
    </xsl:template>  
</xsl:stylesheet>