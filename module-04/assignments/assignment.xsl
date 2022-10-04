<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
        <body>
            <h2>Catalog</h2>
                <ul>
                    <xsl:for-each select="/catalog/product">
                            <article style="margin-bottom: 50px;">
                                    <hgroup>
                                       <h3 style="display: inline;">
                                        <xsl:value-of select="@product_id"/>
                                       </h3>
                                        <p style="display: inline;">
                                         <xsl:value-of select="@description"/>
                                        </p>
                                    </hgroup>
                                        <table border="1">
                                            <tr> 
                                             <th>item number</th> 
                                             <th>price</th> 
                                             <th>gender</th>
                                             <th>size</th>
                                             
                                            </tr>
                                             
                                                <xsl:for-each select="/catalog/product/catalog_item">
                                                <li>
                                                    <td><xsl:value-of   select="./item_number"/></td>
                                                    <td><xsl:value-of   select="./price"/></td>
                                                    <td><xsl:choose>
                                                        <xsl:when test="@gender ='Men'">M
                                                        </xsl:when>
                                                        <xsl:otherwise>W</xsl:otherwise>
                                                    </xsl:choose></td>
                                                    <xsl:for-each select="./size"> 
                                                    <td><xsl:value-of select="@description"/></td>
                                                    </xsl:for-each>   
                                                    <table border="1">   
                                                        <tr>                                
                                                            <th>color</th>
                                                            <th>imagen</th>  
                                                        </tr>                 
                                                            <xsl:for-each select="./size">  
                                                                <tr>
                                                                    <td><xsl:value-of select="./color_swatch"/></td>                                        
                                                                    <xsl:for-each select="./color_swatch">
                                                                            <td><xsl:value-of select="@image"/></td>    
                                                                    </xsl:for-each>  
                                                                 </tr>          
                                                            </xsl:for-each>
                                                    </table>
                                                </li>
                                                </xsl:for-each>
                                            
                                        </table>
                            </article>
                    </xsl:for-each> 
                </ul>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>