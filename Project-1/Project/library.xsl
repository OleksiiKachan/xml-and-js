<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table tr,th{
                        border: 1px solid #ddd;
                        padding: 8px;                        
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;;
                    }
                    tr:hover{
                        background-color: #ddd;
                    }
                    table{
                        border-collapse:collapse;
                        width:100%;
                    }
                    h1{
                        color:blue;
                    }
                    th{
                        padding-top: 12px;
                        padding-bottom: 12px;
                        text-align: center;
                        background-color: #04AA6D;
                        color: white;
                        font-size:20px;
                    }
                    h2{
                        text-align:center;
                        font-size:40px;
                        margin-bottom:0px;
                    }

                </style>
            </head>
            <body>
                <h2>Library Information</h2>
                <table border='2'>
                    
                    <xsl:for-each select="LIBRARY/library">
                    <!-- th is only for keeping space-between data (between library(tag) keep arriving) -->
                    <tr>
                        <th colspan='6' style="background:white"></th>
                    </tr>
                    <tr>
                        <th rowspan='2' colspan='2'>Name</th> 
                        <th colspan='4'>Address</th>  
                    </tr>
                    <tr>
                        <th>Street</th><th>City</th><th>Region</th><th>Country</th>
                    </tr> 
                    <tr>
                            
                        <td colspan='2'><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="address/street"/></td>
                        <td><xsl:value-of select="address/city"/></td>
                        <td><xsl:value-of select="address/region"/></td>
                        <td><xsl:value-of select="address/country"/></td>
                    </tr>     
                    
                    <tr>
                        <th colspan='6'>Book Collections</th> 
                    </tr>
                    <tr>
                        <th>ISBN</th><th>Title</th><th>Availabilty</th><th>Year</th><th>Genre</th><th>Author</th>
                    </tr>
                    <xsl:for-each select="catalog">
                        <tr>
                            <td style="width:8%;"><xsl:value-of select="isbn"/></td>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="availability"/></td>
                            <td><xsl:value-of select="year"/></td>
                            <td><xsl:value-of select="genre"/></td>
                            <td><xsl:value-of select="author"/></td>
                        </tr>        
                    </xsl:for-each>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>