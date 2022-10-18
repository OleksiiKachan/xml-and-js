<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h1>Books catalog</h1>
				<ul>
					<xsl:for-each select="//book">
						<li>
							<article>
								<h2>
									<xsl:value-of select="title"/>
								</h2>
								<p>Book was written in <xsl:value-of select="year"/>.</p>
								<p>Retail price is $<xsl:value-of select="price"/>.</p>
							</article>
						</li>
					</xsl:for-each>
				</ul>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>