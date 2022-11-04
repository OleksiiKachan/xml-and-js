<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <body>
            <h1>Library Books</h1>
            <table id="lib">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Speciality</th>
                    <th>Catalog</th>
                </tr>
                <xsl:for-each select="books/details">
                    <tr>
                        <td><xsl:value-of select="id"/></td>
                        <td><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="address"/></td>
                        <td><xsl:value-of select="specialty"/></td>
                        <td>
                            <table id="cat">
                                <tr>
                                    <th>ISBN</th>
                                    <th>Title</th>
                                    <th>Availability</th>
                                    <th>Year</th>
                                    <th>Genre</th>
                                    <th>Description</th>
                                    <th>Author</th>
                                </tr>
                                <xsl:for-each select="catalog">
                                    <tr>
                                        <td><xsl:value-of select="isbn"/></td>
                                        <td><xsl:value-of select="title"/></td>
                                        <td><xsl:value-of select="availability"/></td>
                                        <td><xsl:value-of select="year"/></td>
                                        <td><xsl:value-of select="genre"/></td>
                                        <td><xsl:value-of select="description"/></td>
                                        <td><xsl:value-of select="author"/></td>                                
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        <style>
            h1{
                font-family:calibri;
                font-size:45px;
            }
            #lib{
                border:2px solid black;
                border-collapse:collapse;
            }
            #lib tr td{
                border:2px solid black;
                border-collapse:collapse;
            }
            #lib th{
                font-size:18px;
                font-family:cambria;
                border:1px solid black;
                background-color:lightgreen;
            }
            #cat{
                margin:5px;
                border:1px solid black;
                border-collapse:collapse;
            }
            #cat th{
                font-size:15px;
                border:1px solid black;
                border-color:yellow;
            }
        </style>
    </html>
 </xsl:template>
</xsl:stylesheet>