<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:template match="/">
      <html>
         <head>
            <title>Catalog</title>
         </head>
         <body>
            <h1>Catalog</h1>
            <ul>
               <xsl:for-each select="catalog/item">
                  <li>
                     <article>
                        <h3>Product ID: <xsl:value-of select="productid"/></h3>
                        <p>Product Description: <xsl:value-of select="description"/></p>
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
                           <tr>
                              <td><xsl:value-of select="itemnumber"/></td>
                              <td><xsl:value-of select="price"/></td>
                              <td>
                                 <xsl:choose>
                                    <xsl:when test="gender='M'">M</xsl:when>
                                    <xsl:when test="gender='W'">W</xsl:when>
                                 </xsl:choose>
                              </td>
                              <td>
                                 <xsl:if test="small">
                                    <table>
                                       <tr>
                                          <th>Color</th>
                                          <th>Image</th>
                                       </tr>
                                       <xsl:for-each select="small/color">
                                          <tr>
                                             <td><xsl:value-of select="."/></td>
                                             <td><xsl:value-of select="../image"/></td>
                                          </tr>
                                       </xsl:for-each>
                                    </table>
                                 </xsl:if>
                              </td>
                              <td>
                                 <xsl:if test="medium">
                                    <table>
                                       <tr>
                                          <th>Color</th>
                                          <th>Image</th>
                                       </tr>
                                       <xsl:for-each select="medium/color">
                                          <tr>
                                             <td><xsl:value-of select="."/></td>
                                             <td><xsl:value-of select="../image"/></td>
                                          </tr>
                                       </xsl:for-each>
                                    </table>
                                 </xsl:if>
                              </td>
                              <td>
                                 <xsl:if test="large">
                                    <table>
                                       <tr>
                                       <th>Color</th>
                                       <th>Image</th>
                                       </tr>
                                       <xsl:for-each select="large/color">
                                          <tr>
                                             <td><xsl:value-of select="."/></td>
                                             <td><xsl:value-of select="../image"/></td>
                                          </tr>
                                       </xsl:for-each>
                                    </table>
                                 </xsl:if>
                              </td>
                              <td>
                                 <xsl:if test="extra_large">
                                    <table>
                                       <tr>
                                          <th>Color</th>
                                          <th>Image</th>
                                       </tr>
                                       <xsl:for-each select="extra_large/color">
                                          <tr>
                                             <td><xsl:value-of select="."/></td>
                                             <td><xsl:value-of select="../image"/></td>
                                          </tr>
                                       </xsl:for-each>
                                    </table>
                                 </xsl:if>
                              </td>
                           </tr>
                        </table>
                     </article>
                  </li>
               </xsl:for-each>
            </ul>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>