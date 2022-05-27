<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/">
        <html>
            <body>
                <h1>Catalog</h1>

                <ul>
                    <!-- create list display each catalog item -->
                    <xsl:for-each select="catalog/product/catalog_item">
                        <li>
                            <article>
                                Item Number: <xsl:value-of select="item_number"/><br/>
                                Price: <xsl:value-of select="price"/><br/>
                                Sizes: <br/>
                                <!-- for each size tag -->
                                <xsl:for-each select="size">
                                <!-- create a sublist -->
                                <ul>
                                    <li>
                                        <!-- get the size desc and its colors -->
                                        <xsl:value-of select="@description"/> /  
                                        Colors:
                                        <xsl:for-each select="color_swatch">
                                            <xsl:value-of select="text()"/>.  
                                        </xsl:for-each>
                                    </li>
                                </ul>
                                </xsl:for-each>
                            </article>
                        </li>
                    </xsl:for-each>
                </ul>

                <h3>Product ID: <xsl:value-of select="catalog/product/@product_id"/></h3>
                <p>Product description: <xsl:value-of select="catalog/product/@description"/></p>

                <table border="1"> 
                    <tr bgcolor="#9acd32"> 
                        <th>Item number</th> 
                        <th>Price</th> 
                        <th>Gender</th> 
                        <th>Small</th> 
                        <th>Medium</th> 
                        <th>Large</th> 
                        <th>Extra large</th>
                    </tr> 
                    <!-- create one table row for each catelog item -->
                    <xsl:for-each select="catalog/product/catalog_item"> 
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <!-- display W for woman, M for men -->
                            <td>                                
                                <xsl:choose>
                                    <xsl:when test="@gender='Women'">W</xsl:when>
                                    <xsl:when test="@gender='Men'">M</xsl:when>
                                </xsl:choose>
                            </td>
                            <!-- display content for Small size -->
                            <td>
                                <table>
                                    <!-- display one table row for each item color-->
                                    <xsl:for-each select="size[@description='Small']/color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="text()"/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <!-- display content for Medium size -->
                            <td>
                                <table>
                                    <!-- display one table row for each item color-->
                                    <xsl:for-each select="size[@description='Medium']/color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="text()"/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <!-- display content for Large size -->
                            <td>
                                <table>
                                    <!-- display one table row for each item color-->
                                    <xsl:for-each select="size[@description='Large']/color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="text()"/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <!-- display content for Extra Large size -->
                            <td>
                                <table>
                                    <!-- display one table row for each item color-->
                                    <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                        <tr>
                                            <td><xsl:value-of select="text()"/></td>
                                            <td><xsl:value-of select="@image"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                        </tr> 
                    </xsl:for-each> 
                </table> 
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>