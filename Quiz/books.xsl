<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html>
      <head>
        <title>Book Catalog</title>
        <style>
          ul {
            list-style: disc;
            margin-left: 2em;
          }

          li {
            margin-bottom: 1em;
          }
        </style>
      </head>
      <body>
        <h2>Books Catalog</h2>
        <ul>
          <xsl:apply-templates select="books/book"/>
        </ul>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="book">
    <li>
      <strong><xsl:value-of select="title"/></strong> <br/>
      Book was written in  <xsl:value-of select="year"/><br/>
      Retail price is $<xsl:value-of select="price"/><br/>
    </li>
  </xsl:template>

</xsl:stylesheet>
