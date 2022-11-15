<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/"> 
<html>
 <body>
   <h1>Books catalog</h1>
<tr>
            <th>Everyday Italian</th> 
            <th>Book was written in 2005</th> 
            <th>Retail price is $30</th> 
            <th>Harry Potter</th> 
            <th>Book was written in 2005</th> 
            <th>Retail price is $29.99</th> 
            <th>Query Kick Start</th> 
            <th>Book was written in 2003</th> 
            <th>Retail price is $49.99</th> 
            <th>Learning XML</th> 
            <th>Book was written in 2005</th> 
            <th>Retail price is $39.95</th> 
            
          </tr> 
  <xsl:for-each select="Books/info"> 
            <tr> 
            <td><xsl:value-of select="title"/></td> 
            
              </tr> 
          </xsl:for-each> 
    
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>        