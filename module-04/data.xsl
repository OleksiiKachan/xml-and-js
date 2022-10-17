<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
  <html>
  <body>
    <h1>Books Catalog</h1>
    <ul>
          <xsl:for-each select="data/book">
          <li>
              <article style="margin-bottom: 50px;">
                <hgroup>
                  <h2 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="title"/>
                  </h2> 
                   <h3>
                   <xsl:value-of select="year">
                   </h3>
                   <h3>
                   <xsl: value-of select="price">
                   </h3>
                   </hgroup>
                   </article>
                   </li>
                   </xsl:for-each>
       </ul>         
  </body>
  </html>
  </xsl:template>  
</xsl:stylesheet>