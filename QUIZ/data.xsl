<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Books Catalog</h2>
        <ul>
          <xsl:for-each select="//book"> 
            <li>
              <article style="margin-bottom: 50px;">
                
                  <h2 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="title"/>
                  </h2>
                  
                    <xsl:value-of select="year"/>
                  </p>
               
                <h3>
                  <xsl:value-of select="price"/>
                </h3>
                
            
                  
                  
              </article>
            </li>
          </xsl:for-each> 
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>