<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/">
		<html>
			<body>
				<h1>Catalog</h1>
				<ul>
					<xsl:for-each select="catalog/product">
						<li>
							<article>
								<h3>
									<xsl:value-of select="@product_id"/>
								</h3>
								<p>
									<xsl:value-of select="@description"/>
								</p>
								<table border="1">
									<tr bgcolor='#f5d742'>
										<th>Item number</th>
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
												<xsl:choose>
													<xsl:when test="@gender='Men'">M</xsl:when>
													<xsl:when test="@gender='Women'">W</xsl:when>
												</xsl:choose>
											</td>
											<td>
												<xsl:if test="size/@description='Small'">
													<table border="1">
														<tr bgcolor='#42f5e3'>
															<th>Color</th>
															<th>Image</th>
														</tr>
														<xsl:for-each select="size">
															<tr>
																<td>
																	<xsl:value-of select="color_swatch//text()"/>
																</td>
																<td>
																	<xsl:value-of select="color_swatch/@image"/>
																</td>
															</tr>
														</xsl:for-each>
													</table>
												</xsl:if>
											</td>
											<td>
												<xsl:if test="size/@description='Medium'">
													<table border="1">
														<tr bgcolor='#42f5e3'>
															<th>Color</th>
															<th>Image</th>
														</tr>
														<xsl:for-each select="size">
															<tr>
																<td>
																	<xsl:value-of select="color_swatch//text()"/>
																</td>
																<td>
																	<xsl:value-of select="color_swatch/@image"/>
																</td>
															</tr>
														</xsl:for-each>
													</table>
												</xsl:if>
											</td>
											<td>
												<xsl:if test="size/@description='Large'">
													<table border="1">
														<tr bgcolor='#42f5e3'>
															<th>Color</th>
															<th>Image</th>
														</tr>
														<xsl:for-each select="size">
															<tr>
																<td>
																	<xsl:value-of select="color_swatch//text()"/>
																</td>
																<td>
																	<xsl:value-of select="color_swatch/@image"/>
																</td>
															</tr>
														</xsl:for-each>
													</table>
												</xsl:if>
											</td>
											<td>
												<xsl:if test="size/@description='Extra Large'">
													<table border="1">
														<tr bgcolor='#42f5e3'>
															<th>Color</th>
															<th>Image</th>
														</tr>
														<xsl:for-each select="size">
															<tr>
																<td>
																	<xsl:value-of select="color_swatch//text()"/>
																</td>
																<td>
																	<xsl:value-of select="color_swatch/@image"/>
																</td>
															</tr>
														</xsl:for-each>
													</table>
												</xsl:if>
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
