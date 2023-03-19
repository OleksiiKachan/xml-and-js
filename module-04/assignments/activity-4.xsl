<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <head>
            <style type="text/css">
            table {
                border-collapse: collapse;
                width: 80%;
            }

            th, td {
                border: 1px solid lightgrey;
                padding: 8px;
                text-align: left;
            }

            h2{
                font-weight: bold;
            }
            </style>
        </head>
        <body>
            <h2>Table 1: Shippable items</h2>
                <table>
                <tr>
                    <th>Product Name</th>
                    <th>Manufacturer Id</th>
                    <th>Descriptrion</th>
                    <th>Price</th>
                </tr>

                <xsl:for-each select="/products/product[@shippable='true']">
                <tr>
                    <td><xsl:value-of select="productName"/></td>
                    <td><xsl:value-of select="manufacturer"/></td>
                    <td><xsl:value-of select="description"/></td>
                    <td><xsl:value-of select="prices/price[1]"/></td>
                </tr>
                </xsl:for-each>
            </table>

            <h2>Table 2: Manufacturer ACME</h2>
                <table>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>USD Price</th>
                    <th>Euro Price</th>
                </tr>

                <xsl:for-each select="/products/product[manufacturer/@id='acme']">
                <tr>
                    <td><xsl:value-of select="productName"/></td>
                    <td><xsl:value-of select="description"/></td>
                    <td><xsl:value-of select="prices/price[1]"/></td>
                    <td><xsl:value-of select="prices/price[3]"/></td>
                </tr>
                </xsl:for-each>
                </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>