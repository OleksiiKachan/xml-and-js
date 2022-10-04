<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 
        <html> 
            <body> 
                <h1>Catalog</h1> 
                    <ul>
                        
                        <xsl:for-each select="//product"> 
                            <li> 
                                <article>
                                    <h3><xsl:value-of select="@product_id"/></h3>
                                    <p><xsl:value-of select="@description"/></p>
                                </article>
                            </li> 
                        </xsl:for-each> 

                    </ul>
                
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
                        
                        <xsl:for-each select="//product/catalog_item"> 
                            <tr> 
                                <td><xsl:value-of select="item_number"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <!--M or W-->
                                <td>
                                    <xsl:if test="@gender='Men'">M</xsl:if>
                                    <xsl:if test="@gender='Women'">W</xsl:if>
                                </td>
                                <!--SMALL-->
                                <td>
                                    <xsl:if test="size/@description='Small'">
                                        <table border="1">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                              
                                            </tr>

                                                <xsl:for-each select="size" groupby="size[@description='Small']/color_swatch">
                                                    <tr>
                                                        <td><xsl:value-of select="color_swatch/text()" /></td>
                                                        <td><xsl:value-of select="color_swatch/@image" /></td>
                                                    </tr>
                                                </xsl:for-each>

                                        </table>
                                    </xsl:if>
                                </td>

                                <!--MEDIUM-->
                                <td>
                                    <xsl:if test="size/@description='Medium'">
                                        <table border="1">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>

                                            <xsl:for-each select="size">
                                                <tr>
                                                    <td><xsl:value-of select="color_swatch"/></td>
                                                    <td><xsl:value-of select="color_swatch/@image"/></td>
                                                </tr>
                                            </xsl:for-each>

                                        </table>
                                    </xsl:if>
                                </td>

                                <!--LARGE-->
                                <td>
                                    <xsl:if test="size/@description='Large'">
                                        <table border="1">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>

                                            <xsl:for-each select="size">
                                                <tr>
                                                    <td><xsl:value-of select="color_swatch"/></td>
                                                    <td><xsl:value-of select="color_swatch/@image"/></td>
                                                </tr>
                                            </xsl:for-each>

                                        </table>
                                    </xsl:if>
                                </td>

                                <!--EXTRA LARGE-->
                                <td>
                                    <xsl:if test="size/@description='Extra Large'">
                                        <table border="1">
                                            <tr>
                                                <th>Color</th>
                                                <th>Image</th>
                                            </tr>

                                            <xsl:for-each select="size">
                                            <tr>
                                                <td><xsl:value-of select="color_swatch"/></td>
                                                <td> <xsl:value-of select="color_swatch/@image"/></td>
                                            </tr>
                                            </xsl:for-each>

                                        </table>
                                    </xsl:if>
                                </td>


                            </tr> 
                        </xsl:for-each> 
                    </table>
            </body> 
        </html> 
    </xsl:template>  
</xsl:stylesheet>