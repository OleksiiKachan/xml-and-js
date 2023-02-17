<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
 <xsl:template match="/">
    <html>
        <body>
            <h1>Catalog</h1>
               <ul>
                <xsl:for-each select="catalog/book">
                  <li>
                    <article>
                        <h3></h3>
                        <table border="10" bgcolor="red"></table>
                        <tr>
                            <th>Book genre</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Retail Price</th>
                        </tr>
                    </article>
                  </li>
            </xsl:for-each>
               </ul>
        </body>
    </html>


</xsl:template>
</xsl:stylesheet>