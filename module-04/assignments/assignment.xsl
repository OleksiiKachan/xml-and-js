<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- Name: Naitik Panchal-->
<!-- N-No: N01512962-->
    <xsl:template match="/">
        <html>
            <head>
                <title>Assignment</title>
            </head>
            <body>
                <h1>Catalog</h1>
                <ul>
                    <!-- selected the product node -->
                    <xsl:for-each select="//product">
                    <li>
                        <article>
                            <h3>Product ID: <xsl:value-of select="./@product_id"/></h3>
                        </article>
                    </li>
                    <li>
                        <article>
                            <p>Product Description: <xsl:value-of select="./@description"/></p>
                        </article>
                    </li>
                    <li>
                        <article>
                            <table border="1">
                                <!-- created the table -->
                                <tr bgcolor="#eab676">
                                    <th>Item Number</th>
                                    <th>Price</th>
                                    <th>Gender</th>
                                    <th>Small</th>
                                    <th>Medium</th>
                                    <th>Large</th>
                                    <th>Extra Large</th>
                                </tr>
                                <!-- used for each to traverse through all catalog items -->
                                <xsl:for-each select="//catalog_item">
                                
                                    <tr bgcolor="#dbeef2">
                                        <td><xsl:value-of select="./item_number"/></td>
                                        <td><xsl:value-of select="./price"/></td>
                                        <td>
                                            <!-- used the if statement to provide given output -->
                                            <xsl:if test="@gender='Men'">M</xsl:if>
                                            <xsl:if test="@gender='Women'">W</xsl:if>
                                        </td>

                                        <td>
                                            <!-- checked the condition with if to generate the table only if there is any value available -->
                                            <xsl:if test="./size[@description='Small']">

                                            <table border="1">
                                                <tr bgcolor="#9acd32">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <!-- selecting all the inner nodes values and attributes -->
                                                <!-- used the for loop to populate the sub-table -->
                                                <xsl:for-each select="./size[@description='Small']/color_swatch">
                                                <tr>
                                                    <td><xsl:value-of select="."/></td>
                                                    <td><xsl:value-of select="@image"/></td>
                                                </tr>
                                            </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                         
                                        </td>
                                        <td>
                                            <xsl:if test="./size[@description='Medium']">
                                                
                                                <table border="1">
                                                <tr bgcolor="#9acd32">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>

                                                <xsl:for-each select="./size[@description='Medium']/color_swatch">
                                                <tr>
                                                    <td><xsl:value-of select="."/></td>
                                                    <td><xsl:value-of select="@image"/></td>
                                                </tr>
                                            </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                            
                                        </td>
                                        <td>
                                            <xsl:if test="./size/@description='Large'">
                                                
                                           
                                            <table border="1">
                                                <tr bgcolor="#9acd32">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <xsl:for-each select="./size[@description='Large']/color_swatch">
                                                <tr>
                                                    <td><xsl:value-of select="."/></td>
                                                    <td><xsl:value-of select="@image"/></td>
                                                </tr>
                                            </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                        </td>
                                        <td>
                                            <xsl:if test="./size/@description='Extra Large'">
                                                
                                            
                                            <table border="1">
                                                <tr bgcolor="#9acd32">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <xsl:for-each select="./size[@description='Extra Large']/color_swatch">
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
                        </article>
                    </li>
                </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>