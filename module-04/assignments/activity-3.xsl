<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<?xml-stylesheet type="text/xsl" href="http://127.0.0.1:8080/module-04/assignments/activity-3.xml" ?>
    <xsl:template match="/"> 
        <html> 
            <body> 
                <h2>Products</h2>
                <xsl:for-each select="//products/product">
                    <p><xsl:value-of select="productName"/></p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>  
</xsl:stylesheet>
