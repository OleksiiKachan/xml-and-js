<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
 <xsl:template match="/"> 
        <html>
            <body>
                <h1> Catalog </h1>
                    <ul>
                        <xsl:for-each select="catalog/product">
                            <li>
                                <article>
                                    <h3> <xsl:value-of select="@product_id"/>   </h3>
                                    <p>  <xsl:value-of select="@description"/>    </p>
                                        <table border="10" bgcolor="#708090" >
                                            <tr>
                                                <th  bgcolor="#90EE90"> Item number </th>
                                                <th  bgcolor="#90EE90"> price </th>
                                                <th  bgcolor="#90EE90"> Gender </th>
                                                <th  bgcolor="#90EE90"> Small </th>
                                                <th  bgcolor="#90EE90"> Medium </th>
                                                <th  bgcolor="#90EE90"> Large </th>
                                                <th  bgcolor="#90EE90"> Extra large </th>
                                            </tr>
                                                <xsl:for-each select="catalog_item">
                                                    <tr>
                                                        <td> <xsl:value-of select="item_number"/> </td>
                                                        <td> <xsl:value-of select="price"/> </td>
                                                        <td>
                                                            <xsl:choose>
                                                                <xsl:when test="@gender='Men'"> M </xsl:when>
                                                                <xsl:when test="@gender='Women'"> W </xsl:when>
                                                                <xsl:otherwise></xsl:otherwise>
                                                            </xsl:choose>
                                                        </td>

                                                        <td>
                                                            <xsl:for-each select="size[@description='Small']">
                                                                <table border="10" bgcolor="#708090">
                                                                <tr>
                                                                    <th bgcolor="#90EE90">Color</th>
                                                                    <th bgcolor="#90EE90">Image</th>
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="."/></td>
                                                                        <td><xsl:value-of select="@image"/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                                </table>
                                                            </xsl:for-each>
                                                        </td>
                                                        
                                                        <td>
                                                            <xsl:for-each select="size[@description='Large']">
                                                                <table border="10" bgcolor="#708090">
                                                                <tr>
                                                                    <th bgcolor="#90EE90">Color</th>
                                                                    <th bgcolor="#90EE90">Image</th>
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="."/></td>
                                                                        <td><xsl:value-of select="@image"/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                                </table>
                                                            </xsl:for-each>
                                                        </td>

                                                        <td>
                                                            <xsl:for-each select="size[@description='Medium']">
                                                                <table border="10" bgcolor="#708090">
                                                                <tr>
                                                                    <th bgcolor="#90EE90">Color</th>
                                                                    <th bgcolor="#90EE90">Image</th>
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="."/></td>
                                                                        <td><xsl:value-of select="@image"/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                                </table>
                                                            </xsl:for-each>
                                                        </td>

                                                        <td>
                                                            <xsl:for-each select="size[@description='Extra Large']">
                                                                <table border="10" bgcolor="#708090">
                                                                <tr>
                                                                    <th bgcolor="#90EE90">Color</th>
                                                                    <th bgcolor="#90EE90">Image</th>
                                                                </tr>
                                                                <xsl:for-each select="color_swatch">
                                                                    <tr>
                                                                        <td><xsl:value-of select="."/></td>
                                                                        <td><xsl:value-of select="@image"/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                                </table>
                                                            </xsl:for-each>
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