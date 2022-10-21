<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h1>Books Catalog</h1>
        <ul>
            <xsl:for-each select="catalog/product">
                <li>
                    <article>
                        <hgroup>
                            <h3> <xsl:value-of select="title"/></h3>
                           
                        </hgroup> 

                            <p>Book was written <xsl:value-of select="year"/> </p>  
                            <p>Retail price is $ <xsl:value-of select="price"/> </p>     
                    </article>
                </li> 
            </xsl:for-each>
            


        </ul>  
           
                
           

            
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>