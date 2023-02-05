<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/"> 
    <html>
      <head>
        <title>Catalog</title>
      </head>
      <body>    
        <h1>Catalog</h1>
        <ul>
          <xsl:for-each select="catalog/product/catalog_item">
            <li>
              <article>
                <h3>
                  <xsl:value-of select="../@product_id"/>
                </h3>
                <p>
                  <xsl:value-of select="../@description"/>
                </p>
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
                <xsl:for-each select="catalog_item">
                    <tr>
                      <td>
                        <xsl:value-of select="item_number"/>
                      </td>
                      <td>
                        <xsl:value-of select="price"/>
                      </td>
                      <td>
                        <xsl:value-of select="if (@gender='Men') then 'M' else 'W'"/>
                      </td>
                      <td>
                        <xsl:for-each select="size[@description='Small']">
                          <table>
                              <tr>
                            <th>color</th>
                            <th>image</th>
                            </tr>
                              <xsl:for-each select="color_swatch">
                                <tr>
                                  <td>
                                    <xsl:value-of select="."/>
                                  </td>
                                  <td>
                                    <xsl:value-of select="@image"/>
                                  </td>
                                </tr>
                              </xsl:for-each>
                          </table>
                        </xsl:for-each>
                      </td>
                      <td>
                        <xsl:for-each select="size[@description='Medium']">
                          <table>
                            <tr>
                            <th>color</th>
                            <th>image</th>
                            </tr>
                             
                              <xsl:for-each select="color_swatch">
                                <tr>
                                  <td>
                                    <xsl:value-of select="."/>
                                  </td>
                                  <td>
                                    <xsl:value-of select="@image"/>
                                  </td>
                                </tr>
                              </xsl:for-each>
                             
                          </table>
                          </xsl:for-each>
                        </td>
                        <td>
                           <xsl:for-each select="size[@description='Large']">
                          <table>
                            <tr>
                            <th>color</th>
                            <th>image</th>
                            </tr>
                             
                              <xsl:for-each select="color_swatch">
                                <tr>
                                  <td>
                                    <xsl:value-of select="."/>
                                  </td>
                                  <td>
                                    <xsl:value-of select="@image"/>
                                  </td>
                                </tr>
                              </xsl:for-each>
                             
                          </table>
                          </xsl:for-each>
                       </td>
                       <td>
                        <xsl:for-each select="size[@description='Extra Large']">
                          <table>
                            <tr>
                            <th>color</th>
                            <th>image</th>
                            </tr>

                              <xsl:for-each select="color_swatch">
                                <tr>
                                  <td>
                                    <xsl:value-of select="."/>
                                  </td>
                                  <td>
                                    <xsl:value-of select="@image"/>
                                  </td>
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