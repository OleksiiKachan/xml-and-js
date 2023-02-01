<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 

    <html>
        <head>
            <style>
                .main h3{
                    background-color: #2596be;
                    width:12%;
                    margin: 5px;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <h1>Products List</h1>
            <div class="main">
                <h3>Product Name</h3>               
            </div>
            <div class="main">
                <xsl:for-each select="products/product"> 
                    <h3><xsl:value-of select="productName"/></h3>
                </xsl:for-each>
            </div>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>