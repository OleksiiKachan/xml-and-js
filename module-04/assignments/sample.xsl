<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" />

    <xsl:template match="/">
        <html>
            <head>
                <title>Catalog</title>
            </head>
            <body>
                <h1>Catalog</h1>
                <ul>
                    <xsl:apply-templates select="catalog/product" />
                </ul>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="product">
        <li>
            <article>
                <h3>
                    <xsl:value-of select="@product_id" />
                </h3>
                <p>
                    <xsl:value-of select="@description" />
                </p>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Item Number</th>
                        <th>Price</th>
                        <th>Gender</th>
                        <th>Small</th>
                        <th>Medium</th>
                        <th>Large</th>
                        <th>Extra Large</th>
                    </tr>
                    <xsl:apply-templates select="catalog_item" />
                </table>
            </article>
        </li>
    </xsl:template>

    <xsl:template match="catalog_item">
        <tr>
            <td>
                <xsl:value-of select="item_number" />
            </td>
            <td>
                <xsl:value-of select="price" />
            </td>
            <td>
                <xsl:choose>
                    <xsl:when test="@gender='Men'">M</xsl:when>
                    <xsl:when test="@gender='Women'">W</xsl:when>
                </xsl:choose>
            </td>
            <xsl:apply-templates select="size" />
        </tr>
    </xsl:template>

    <xsl:template match="size">
        <td>
            <xsl:for-each select="color_swatch">
                <p>
                    <xsl:value-of select="." />
                </p>
            </xsl:for-each>
        </td>
    </xsl:template>
</xsl:stylesheet>