<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
        
            <body>
            
                <h1>Catalog</h1>

                
                <ul>
                    <xsl:for-each select="catalog/product">
                        <h3><xsl:value-of select="@product_id"></xsl:value-of></h3>
                        <p><xsl:value-of select="@description"></xsl:value-of></p>
                        
                        <li>
                            <article>
                                
                                <table border="4">
                                
                                    <tr bgcolor="lightgreen">
                                        <th style="text-align:center;font-weight:bold">Item_number</th>
                                        <th style="text-align:center;font-weight:bold">Price</th>
                                        <th style="text-align:center;font-weight:bold">Gender</th>
                                        <th style="text-align:center;font-weight:bold">Small</th>
                                        <th style="text-align:center;font-weight:bold">Medium</th>
                                        <th style="text-align:center;font-weight:bold">Large</th>
                                        <th style="text-align:center;font-weight:bold">Extra large</th>
                                    </tr>
                                    <xsl:for-each select="catalog_item">
                                    
                                        <tr>
                                                
                                            <xsl:for-each select="size">
                                                <tr bgcolor="lightblue"> <!--Creating a new table row so as to have a new row for each iteration of size as one catalog item has multiple sizes which in return have multiple colors-->
                                                    <td><xsl:value-of select="../item_number"></xsl:value-of></td>
                                                    <td><xsl:value-of select="../price"></xsl:value-of></td>
                                                    <xsl:choose>
                                                        <xsl:when test="../@gender='Men'">
                                                            <td>M</td>
                                                         </xsl:when>
                                                        <xsl:otherwise>
                                                            <td>F</td>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                    
                                                    
                                                    <xsl:choose>
                                                        <xsl:when test="@description='Small'">
                                                            <td>
                                                                <!-- <p style="text-align:center;font-weight:bold"><xsl:value-of select="@description"/></p>  This was a test to print and check if the size values are goint to their desired location-->
                                                                <table border="1" bgcolor="pink">
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                    <xsl:for-each select="color_swatch"> 
                                                                        <tr>
                                                                            <td><xsl:value-of select="."/></td>
                                                                            <td><xsl:value-of select="@image"/></td>
                                                                        </tr>    
                                                                    </xsl:for-each> 
                                                                </table>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </xsl:when>
                                                        <xsl:when test="@description='Medium'">
                                                            
                                                            <td></td>
                                                            <td>
                                                                <!-- <xsl:value-of select="@description"/> -->
                                                                <table border="1" bgcolor="pink">
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                    <xsl:for-each select="color_swatch"> 
                                                                        <tr>
                                                                            <td><xsl:value-of select="."/></td>
                                                                            <td><xsl:value-of select="@image"/></td>
                                                                        </tr>    
                                                                    </xsl:for-each> 
                                                                </table>
                                                            </td>
                                                            
                                                            <td></td>
                                                            <td></td>
                                                        </xsl:when>
                                                        <xsl:when test="@description='Large'">
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <!-- <xsl:value-of select="@description"/> -->
                                                                <table border="1" bgcolor="pink">
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                    <xsl:for-each select="color_swatch"> 
                                                                        <tr>
                                                                            <td><xsl:value-of select="."/></td>
                                                                            <td><xsl:value-of select="@image"/></td>
                                                                        </tr>    
                                                                    </xsl:for-each> 
                                                                </table>
                                                            </td>
                                                            
                                                            <td></td>
                                                        </xsl:when>
                                                        <xsl:when test="@description='Extra Large'">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <!-- <xsl:value-of select="@description"/> -->
                                                                <table border="1" bgcolor="pink">
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                    <xsl:for-each select="color_swatch"> 
                                                                        <tr>
                                                                            <td><xsl:value-of select="."/></td>
                                                                            <td><xsl:value-of select="@image"/></td>
                                                                        </tr>    
                                                                    </xsl:for-each> 
                                                                </table>
                                                            </td>
                                                            
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                            <td></td>
                                                        </xsl:otherwise>
                                                    </xsl:choose>

                                                </tr>
                                            </xsl:for-each>

                                        </tr>

                                    </xsl:for-each>

                                </table>
                            
                            </article>

                        </li>
                    </xsl:for-each>
                </ul>
                
            </body>

        </html>
    
    </xsl:template>

</xsl:stylesheet>

<!-- 
    Name: Nrup Patel 
    Student ID: N01546128
-->