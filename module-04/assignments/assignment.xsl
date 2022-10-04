<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <head>
                <style>
                    div {
                        text-align: center;
                    }
                    ul {
                        list-style: none;
                    }
                    h1 {
                        font-size: 40px;
                        color: #444;
                    }
                    li h1 {
                        font-size: 30px;
                    }
                    li p {
                        font-size: 30px;
                    }
                    table {
                        margin: 0 auto;
                    }
                    table, th, td {
                        border: 1px solid #999;
                        border-collapse: collapse;
                    }
                    th {
                        color: white; background-color: #999;
                    }
                    th, td {
                        padding: 4px 8px;
                    }
                </style>
            </head>
            <body>

            <div>
                <h1>Catalog</h1>
                <ul>
                    <xsl:for-each select="catalog/product">
                        <li>
                <article>
                                <h1><xsl:value-of select="@product_id"/></h1>
                                <p><xsl:value-of select="@description"/></p>
            </article>
                        </li>
                    </xsl:for-each>
                </ul>

                <table>
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
                        <tr> 
                            <td><xsl:value-of select="item_number"/></td> 
                            <td><xsl:value-of select="price"/></td> 
                            <xsl:if test="@gender='Men'">
                                <td>M</td>
                            </xsl:if>
                            <xsl:if test="@gender='Women'">
                                <td>W</td>
                            </xsl:if>
                            <td>
                                <xsl:if test="size[@description='Small']">
                                    <table>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th> 
                                        </tr>
                                            
                                        <xsl:for-each select="size[@description='Small']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td> 
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>  
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>

                            </td>
                            <td>
                                <xsl:if test="size[@description='Medium']">
                                    <table>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th> 
                                        </tr>
                                            
                                        <xsl:for-each select="size[@description='Medium']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td> 
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>  
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Large']">
                                    <table>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th> 
                                        </tr>
                                            
                                        <xsl:for-each select="size[@description='Large']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td> 
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>   
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:if test="size[@description='Extra Large']">
                                    <table>
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th> 
                                        </tr>
                                            
                                        <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                            <tr>
                                                <td><xsl:value-of select="."/></td> 
                                                <td><xsl:value-of select="@image"/></td>
                                            </tr>  
                                        </xsl:for-each>
                                    </table>
                                </xsl:if>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>