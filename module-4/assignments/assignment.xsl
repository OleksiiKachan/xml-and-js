<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


    <!--Vishal Kumar-->
    <!--Vishal Kumar N01496099-->

    <xsl:template match="/">
        <html>
            <head>
                <style>
                    <!--Style for the table-->
                    table {
					font-family: arial, sans-serif;
					border-collapse: collapse;
					width:
					100%;
					}
					td,th{
					border: 1px solid #dddddd;
					text-align: left;
					padding: 10px;
					}
					tr:nth-child(even) {
					background-color: #dddddd;
					}
                    h3{font-family: arial,san-serif;border-collapse: collapse;}
                    body {background-color: #dddddd;}
                    main{background-color: #dddddd;}
                </style>
            </head>
            <body>
                <h3>Catalog</h3>
                <ul>
                    <xsl:for-each select="catalog/product/catalog_item">
                        <li>
                            <article>
                                <!--
                                - main title is "Catalog"
                             render each item as `<article>` inside list item tag-->
                                Item Number:
                                <xsl:value-of select="item_number" />
                                Price:
                                <xsl:value-of select="price" />
                                Sizes:
                                <xsl:for-each select="size">
                                    <ol>
                                        <li>
                                            <xsl:value-of select="@description" />
                                            Colors:
                                            <xsl:for-each select="color_swatch">
                                                <xsl:value-of select="text()" />
                                            </xsl:for-each> <!-- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)-->
                                        </li>
                                    </ol>
                                </xsl:for-each>
                            </article>
                        </li>
                    </xsl:for-each>
                </ul>

                <h3>
                    Product ID:
                    <!--display product id as h3-->
                    <xsl:value-of select="catalog/product/@product_id" />
                </h3>
                <p>
                    Product description:
                    <!-- display product description as paragraph-->
                    <xsl:value-of select="catalog/product/@description" />
                </p>

                <table border="3">
                    <tr bgcolor="#cd8932">
                        <th>Item number</th>
                        <th>Price</th>
                        <th>Gender</th>
                        <th>Small</th>
                        <th>Medium</th>
                        <th>Large</th>
                        <th>Extra Large</th>
                    </tr>

                    <xsl:for-each select="catalog/product/catalog_item">
                        <tr>
                            <td>
                                <xsl:value-of select="item_number" />
                            </td>
                            <td>
                                <xsl:value-of select="price" />
                            </td>

                            <td>
                                <xsl:choose>
                                    <xsl:when test="@gender='Women'">W</xsl:when>
                                    <xsl:when test="@gender='Men'">M</xsl:when>
                                </xsl:choose>
                            </td>
                            <td>
                                <table>
                                    <xsl:for-each select="size[@description='Small']/color_swatch">
                                        <tr>

                                            <td>
                                                <xsl:value-of select="@image" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="color" /> <!--- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image-->
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <xsl:for-each select="size[@description='Medium']/color_swatch">
                                        <tr>

                                            <td>
                                                <xsl:value-of select="@image" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="color" /> <!--- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image-->
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <xsl:for-each select="size[@description='Large']/color_swatch">
                                        <tr>

                                            <td>
                                                <xsl:value-of select="@image" />
                                            </td>
                                            <td>
                                                <xsl:value-of select="color" /> <!--- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image-->
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                        <tr>

                                            <td>
                                                <xsl:value-of select="@image" /> <!--- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image-->
                                            </td>
                                            <td>
                                                <xsl:value-of select="color" /> <!--- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image-->
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet> 