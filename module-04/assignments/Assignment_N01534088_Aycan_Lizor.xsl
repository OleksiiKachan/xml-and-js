<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Catalog</h2>
        <ul>
            <xsl:for-each select="catalog/product">
                <li>
                    <article>
                        <hgroup>
                            <h3> <xsl:value-of select="@product_id"/></h3>
                            <p><xsl:value-of select="@description"/></p>  
                        </hgroup>       
                    </article>
                </li> 
            </xsl:for-each>
            

            <table border="1"> 
                        <tr>
                            <th>Item Number</th>
                            <th>Price</th>
                            <th>Gender</th>
                            <th>Small</th>
                            <th>Medium</th>
                            <th>Large</th>
                            <th>Extra Large</th>
                     
                         
                        </tr>

        
                      <xsl:for-each select="catalog/product/catalog_item"> 
                      <xsl:if test="@gender = 'Men' and size/@description='Small'">
                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>M</td> 
                            <td>Small</td> 
                            <td></td> 
                            <td></td>
                            <td></td> 
                        </tr>

                        </xsl:if>

                         <xsl:if test="@gender = 'Men' and size/@description='Medium'">
                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>M</td> 
                            <td></td> 
                            <td>Medium</td> 
                            <td></td>
                            <td></td> 
                        </tr>

                        </xsl:if>

                        <xsl:if test="@gender = 'Men' and size/@description='Large'">
                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>M</td> 
                            <td></td> 
                            <td></td> 
                            <td>Large</td>
                            <td></td> 
                        </tr>

                        </xsl:if>

                         <xsl:if test="@gender = 'Men' and size/@description='Extra Large'">
                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>M</td> 
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Extra Large</td> 
                        </tr>

                        </xsl:if>
                       
                       </xsl:for-each>


                      <xsl:for-each select="catalog/product/catalog_item">
                      <xsl:if test="@gender = 'Women' and size/@description='Small'">
                                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>W</td>
                            <td>Small</td> 
                            <td></td> 
                            <td></td>
                            <td></td>  
                        </tr>

                        </xsl:if>

                      <xsl:if test="@gender = 'Women' and size/@description='Medium'">
                                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>W</td>
                            <td></td> 
                            <td>Medium</td> 
                            <td></td>
                            <td></td>  
                        </tr>
                    </xsl:if>

                    <xsl:if test="@gender = 'Women' and size/@description='Large'">
                                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>W</td>
                            <td></td> 
                            <td></td> 
                            <td>Large</td> 
                            <td></td> 
                        </tr>
                    </xsl:if>

                    <xsl:if test="@gender = 'Women' and size/@description='Extra Large'">
                                                          
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <td>W</td>
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Extra Large</td>  
                        </tr>
                    </xsl:if>
                   
                    </xsl:for-each>

                      
                       

            
            </table>

        </ul>  
           
                
           

            
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>