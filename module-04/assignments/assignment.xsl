<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
        <html> 
            <body> 
                <h1>Catalog</h1>
                <article style="margin-top: 20px;">
                    <ul>
                        <li>
                            <h3><xsl:value-of select="//product/@product_id"/></h3>
                        </li>
                        <li>
                            <p><xsl:value-of select="//product/@description"/></p>
                        </li>
                    </ul>
                </article>

                <xsl:for-each select="//product/catalog_item"> 
                    <table border="1">
                        <tr> 
                            <th>Item number</th> 
                            <th>Price</th> 
                            <th>Gender</th> 
                            <th>Small</th> 
                            <th>Medium</th> 
                            <th>Large</th> 
                            <th>Extra Large</th> 
                        </tr>

                        <tr>
                            <td>
                                <xsl:value-of select="item_number"/>
                            </td>
                            <td>
                                <xsl:value-of select="price"/>
                            </td>
                            <td>
                                <xsl:if test="@gender = 'Men'">
                                    <p>M</p>
                                </xsl:if>
                                <xsl:if test="@gender = 'Women'">
                                    <p>W</p>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:value-of select="size[@description='Small']"/>
                            </td>
                            <td>
                                <xsl:value-of select="size[@description='Medium']"/>
                            </td>
                            <td>
                                <xsl:value-of select="size[@description='Large']"/>
                            </td>
                            <td>
                                <xsl:value-of select="size[@description='Extra Large']"/>
                            </td>
                        </tr>
                    </table>
                </xsl:for-each>

                <xsl:for-each select="//product/catalog_item"> 
                    <table border="1">
                        <tr> 
                            <th colspan="2">Small</th>
                            <th colspan="2">Medium</th>
                            <th colspan="2">Large</th>
                            <th colspan="2">Extra Large</th>
                        </tr>
                        
                        <tr>
                            <th>Color</th> 
                            <th>Image</th>  
                            <th>Color</th> 
                            <th>Image</th>  
                            <th>Color</th> 
                            <th>Image</th>  
                            <th>Color</th> 
                            <th>Image</th>  
                        </tr>
                        
                        <!-- For Small element in the table 2 -->
                        <tr>
                            <xsl:if test="catalog_item[@gender='Men'] or item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="catalog_item[@gender='Men'] or item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[1]"/></td>
                                <td><xsl:value-of select="size/color_swatch[1]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="size[@description='Small']">
                                <td><xsl:value-of select="size/color_swatch[1]"/></td>
                                <td><xsl:value-of select="size/color_swatch[1]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Medium'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[1]"/></td>
                                <td><xsl:value-of select="size/color_swatch[1]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="size[@description='Large'] and item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[1]"/></td>
                                <td><xsl:value-of select="size/color_swatch[1]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Large'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[2]"/></td>
                                <td><xsl:value-of select="size/color_swatch[2]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="catalog_item[@gender='Men'] or item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>                            

                            <xsl:if test="size[@description='Extra Large']">
                                <td><xsl:value-of select="size/color_swatch[3]"/></td>
                                <td><xsl:value-of select="size/color_swatch[3]/@image"/></td>
                            </xsl:if>

                        </tr>

                        <tr>
                            <xsl:if test="catalog_item[@gender='Men'] or item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="catalog_item[@gender='Men'] or item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[2]"/></td>
                                <td><xsl:value-of select="size/color_swatch[2]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="size[@description='Small']">
                                <td><xsl:value-of select="size/color_swatch[2]"/></td>
                                <td><xsl:value-of select="size/color_swatch[2]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Medium'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[2]"/></td>
                                <td><xsl:value-of select="size/color_swatch[2]/@image"/></td>
                            </xsl:if>


                            <xsl:if test="size[@description='Large'] and item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[2]"/></td>
                                <td><xsl:value-of select="size/color_swatch[2]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="size[@description='Large'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[4]"/></td>
                                <td><xsl:value-of select="size/color_swatch[4]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="catalog_item[@gender='Men'] or item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Extra Large']">
                                <td><xsl:value-of select="size/color_swatch[4]"/></td>
                                <td><xsl:value-of select="size/color_swatch[4]/@image"/></td>
                            </xsl:if>
                        </tr>

                        <tr>
                            <xsl:if test="size[@description='Small'] and item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                            <xsl:if test="size[@description='Small']">
                                <td><xsl:value-of select="size/color_swatch[3]"/></td>
                                <td><xsl:value-of select="size/color_swatch[3]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Medium'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[3]"/></td>
                                <td><xsl:value-of select="size/color_swatch[3]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Large'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                            <xsl:if test="size[@description='Extra Large'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                        </tr>
                        
                        <tr>
                            <xsl:if test="size[@description='Small'] and item_number = 'QWZ5671'">
                                <td><xsl:value-of select="size[1]/@description"/></td>
                                <td><xsl:value-of select="size/color_swatch[1]"/></td>
                                <td><xsl:value-of select="size/color_swatch[1]/@image"/></td>
                            </xsl:if>

                            <xsl:if test="size[@description='Small'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Medium'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[4]"/></td>
                                <td><xsl:value-of select="size/color_swatch[4]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Large'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                            
                            <xsl:if test="size[@description='Extra Large'] and item_number = 'RRX9856'">
                                <td><xsl:value-of select="size/color_swatch[0]"/></td>
                                <td><xsl:value-of select="size/color_swatch[0]/@image"/></td>
                            </xsl:if>
                        </tr>
                    </table>
                </xsl:for-each>
            </body> 
        </html>
    </xsl:template>  
</xsl:stylesheet>