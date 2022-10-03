<?xml version="1.0" encoding="UTF-8"?>
<!-- xsl stylesheet declaration with xsl namespace: 
Namespace tells the xlst processor about which 
element is to be processed and which is used for output purpose only 
--> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<!-- xsl template declaration:  
template tells the xlst processor about the section of xml 
document which is to be formatted. It takes an XPath expression. 
In our case, it is matching document root element and will 
tell processor to process the entire document with this template. 
--> 
  <xsl:template match="/"> 
    <!-- HTML tags 
      Used for formatting purpose. Processor will skip them and browser 
      will simply render them. 
    --> 
		
    <html> 
      <body> 
        <h2>Catalog</h2> 
				<ul>				
          <!-- for-each processing instruction 
            Looks for each element matching the XPath expression 
          --> 
          <xsl:for-each select="catalog/product">
         <li>
         <article><h3>Product Id: <xsl:value-of select="@product_id"/></h3></article>
         </li>
          <li>
           <article><p>Description: <xsl:value-of select="@description"/></p></article>
        </li>
        <li>
          <table border="1" bgcolor="#D6DFEB"> 
          <tr bgcolor="pink"> 
            <th>Item Number</th> 
            <th>Price</th> 
            <th>Gender</th> 
            <th>Small</th> 
            <th>Medium</th> 
            <th>Large</th> 
            <th>Extra Large</th> 
                <xsl:value-of select="@description"/> 
          </tr>  
           <xsl:for-each select="catalog_item"> 
            <tr> 
              <td> 
                <!-- value-of processing instruction 
                  process the value of the element matching the XPath expression 
                --> 
                <xsl:value-of select="item_number"/> 
              </td> 
              <td><xsl:value-of select="price"/></td> 
            <td><xsl:choose>
            
                <xsl:when test="@gender='Women'">W</xsl:when>
                <xsl:when test="@gender='Men'">M</xsl:when>
                
            </xsl:choose></td>
            <td>
             <xsl:if test="size/@description='Small'">
                <table border="1"> 
                <tr bgcolor="#AFFF33" font-weight="bold"> 
                <th>Color</th> 
                <th>image</th>  
                </tr>
                
                    <xsl:for-each select="size[@description='Small']/color_swatch">
                        <tr>
                            <td><xsl:value-of select="text()"/></td>
                            <td><xsl:value-of select="@image"/></td>
                        </tr>
                    </xsl:for-each>  
                    
                </table>
             </xsl:if>
                         
            </td>
            <td>
            <xsl:if test="size/@description='Medium'">
                <table border="1"> 
                <tr bgcolor="#AFFF33" font-weight="bold"> 
                <th>Color</th> 
                <th>image</th>  
                </tr>
              
                    <xsl:for-each select="size[@description='Medium']/color_swatch">
                        <tr>
                            <td><xsl:value-of select="text()"/></td>
                            <td><xsl:value-of select="@image"/></td>
                        </tr>
                    </xsl:for-each>  
                   
                </table>
             </xsl:if>
            </td>
            <td>
            <xsl:if test="size/@description='Large'">
                <table border="1" font-weight="bold"> 
                <tr bgcolor="#AFFF33"> 
                <th>Color</th> 
                <th>image</th> 
                </tr>
                
                    <xsl:for-each select="size[@description='Large']/color_swatch">
                        <tr>
                            <td><xsl:value-of select="text()"/></td>
                            <td><xsl:value-of select="@image"/></td>
                        </tr>
                    </xsl:for-each>  
                    
                </table>
             </xsl:if>
            </td>
            <td>
            <xsl:if test="size/@description='Extra Large'">
                <table border="1" font-weight="bold"> 
                <tr bgcolor="#AFFF33"> 
                <th>Color</th> 
                <th>image</th>  
                </tr>
               
                    <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                        <tr>
                            <td><xsl:value-of select="text()"/></td>
                            <td><xsl:value-of select="@image"/></td>
                        </tr>
                    </xsl:for-each>  
                
                </table>
             </xsl:if>
            </td>

			</tr> 
          </xsl:for-each> 
        </table> 
        </li>
          </xsl:for-each> 
        </ul>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>