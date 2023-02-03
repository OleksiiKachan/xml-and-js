<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html>
    <title>Catalog</title>
    <body>
        <h2>Catalog</h2>
        <ul>
            <xsl:for-each select="catalog/product">
            <li><article>
                <h3>Proudct ID: <xsl:value-of select="@product_id"/></h3>
            </article></li>
            <li><article>
                <p>Description: <xsl:value-of select="@description"/></p>
            </article></li>
        
            <li><article><table border="1">
                <tr>
                   <th>item number</th>
                   <th>price</th>
                   <th>gender</th>
                   <th>small
                    <table border="1">
                        <tr>
                            <th>color</th>
                            <th>image</th>
                        </tr>                  
                    </table>
                   </th>
                   <th>medium
                    <table border="1">
                        <tr>
                            <th>color</th>
                            <th>image</th>
                        </tr>                  
                    </table>
                   </th>
                   <th>large
                    <table border="1">
                        <tr>
                            <th>color</th>
                            <th>image</th>
                        </tr>                  
                    </table>
                   </th>
                   <th>extra large
                    <table border="1">
                        <tr>
                            <th>color</th>
                            <th>image</th>
                        </tr>                  
                    </table>
                    </th>
                </tr>

                        <xsl:for-each select="catalog_item">
                        <tr>
                                <td><xsl:value-of select="item_number"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <td>
                                    <xsl:choose>
                                        <xsl:when test="@gender='Men'">M</xsl:when>
                                        <xsl:when test="@gender='Women'">W</xsl:when>
                                    </xsl:choose>
                                    <td>
                                    <xsl:for-each select="size/color_swatch">
                                        <xsl:if test="../@description='Small'">
                                        <table border="1">
                                            <tr>                                               
                                                <td><xsl:value-of select="../color_swatch"/></td>
                                                <td><xsl:value-of select="@image"/></td>                                                
                                            </tr>
                                        </table>
                                    </xsl:if>

                                    </xsl:for-each>
                                    </td>

                                    <td>
                                        <xsl:for-each select="size/color_swatch">
                                            <xsl:if test="../@description='Medium'">
                                            <table border="1">
                                                <tr>                                               
                                                    <td><xsl:value-of select="../color_swatch"/></td>
                                                    <td><xsl:value-of select="@image"/></td>                                                
                                                </tr>
                                            </table>
                                        </xsl:if>
    
                                        </xsl:for-each>
                                        </td>

                                        <td>
                                            <xsl:for-each select="size/color_swatch">
                                                <xsl:if test="../@description='Large'">
                                                <table border="1">
                                                    <tr>                                               
                                                        <td><xsl:value-of select="../color_swatch"/></td>
                                                        <td><xsl:value-of select="@image"/></td>                                                
                                                    </tr>
                                                </table>
                                            </xsl:if>
        
                                            </xsl:for-each>
                                            </td>

                                            <td>
                                                <xsl:for-each select="size/color_swatch">
                                                    <xsl:if test="../@description='Extra Large'">
                                                    <table border="1">
                                                        <tr>                                               
                                                            <td><xsl:value-of select="../color_swatch"/></td>
                                                            <td><xsl:value-of select="@image"/></td>                                                
                                                        </tr>
                                                    </table>
                                                </xsl:if>
            
                                                </xsl:for-each>
                                                </td>

                                </td>

                        </tr>

                        </xsl:for-each>


            </table></article></li>
        </xsl:for-each>
        </ul>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>