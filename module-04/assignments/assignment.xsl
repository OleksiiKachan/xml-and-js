<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h1>Catalog</h1> 

        <ul>
            <xsl:for-each select="catalog/product">
                <li>
                    <article>
                        <h3><xsl:value-of select="@product_id"/></h3>
                        <p><xsl:value-of select="@description"/></p>
                        <table border="1"> 
                            <tr bgcolor="#ff2f00"> 
                                <th>Item Number</th> 
                                <th>Price</th> 
                                <th>Gender</th> 
                                <th>Small</th>
                                <th>Medium</th>
                                <th>Large</th>
                                <th>Extra Large</th>
                            </tr> 
                            <xsl:for-each select="catalog_item">
                                <tr> 
                                    <td><xsl:value-of select="item_number"/></td> 
                                    <td><xsl:value-of select="price"/></td> 
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender='Men'">M</xsl:when>
                                            <xsl:when test="@gender='Women'">W</xsl:when>
                                            <xsl:otherwise>U</xsl:otherwise>
                                        </xsl:choose>
                                    </td> 
                                    <td>
                                        <xsl:if test="size[@description='Small']">
                                            <table border="1">
                                                <tr bgcolor="#5de3de"> 
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
                                            <table border="1">
                                                <tr bgcolor="#5de3de"> 
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
                                            <table border="1">
                                                <tr bgcolor="#5de3de"> 
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
                                            <table border="1">
                                                <tr bgcolor="#5de3de"> 
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
                    </article>
                </li>
            </xsl:for-each>
        </ul>
      </body> 
    </html> 
  </xsl:template>
</xsl:stylesheet>