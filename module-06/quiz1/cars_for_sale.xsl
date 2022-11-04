<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 
        <html> 
            <body> 
                <h2>Cars For Sale</h2>
                    <table border="1"> 
                    
                        <tr> 
                            <th>Brand</th>
                            <th>Car ID</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Price</th>  
                            <th>Body Type</th> 
                            <th>Fuel Type</th>
                            <th>Transmission</th>  
                            <th>Image</th>                     
                        </tr>  
                        
                        <xsl:for-each select="//brand/car"> 
                            <tr> 
                                <td><xsl:value-of select="../@name"/></td>
                                <td><xsl:value-of select="@id"/></td>
                                <td><xsl:value-of select="model"/></td>
                                <td><xsl:value-of select="year"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <td><xsl:value-of select="type/body"/></td>
                                <td><xsl:value-of select="type/fuel"/></td>
                                <td><xsl:value-of select="transmission"/></td>
                                <td><xsl:value-of select="image"/></td>
                            </tr> 
                        </xsl:for-each> 
                    </table>
                
            </body> 
        </html> 
    </xsl:template>  
</xsl:stylesheet>