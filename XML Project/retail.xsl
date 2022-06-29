<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">

      <html>
         <head>
            <title>Jaspreet-Nilang </title>
         </head>
         <style>
            th{
            background-color: brown;
            color: cornsilk;
            }
            td{
            background-color: gold;
            
            }
    </style>
         
         <body bgcolor="lightgreen">
              <h1 align="center" >Diplaying ID and Employees info in table 1</h1>
             <table border='1' align="center">
                 <tr><th>ID</th><th>Country</th><th>Employees Id</th><th>Firstname</th>
                 <th>Last Name</th><th>Position</th><th>Employee Type</th></tr>
                 <xsl:for-each select="/root/row">
                <tr>
                    <td><xsl:value-of select="id" /></td>
                    <td><xsl:value-of select="address/country" /></td>
                    <td><xsl:value-of select="employees/id" /></td>
                    <td><xsl:value-of select="employees/firstName" /></td>
                    <td><xsl:value-of select="employees/lastName" /></td>
                    <td><xsl:value-of select="employees/position" /></td>
                    <td><xsl:value-of select="employees/empType" /></td>
                 </tr>
             </xsl:for-each>
             </table>
             <h1 align="center">Diplaying ID and Product info in table 2.</h1>
             <table border='1' align="center">
                 <tr><th>ID</th><th>Country</th><th>Product Id</th><th>Product Name</th>
                 <th>Quantity</th><th>USD</th><th>Euro</th><th>Pounds</th></tr>
                 <xsl:for-each select="/root/row">
                <tr>
                    <td><xsl:value-of select="id" /></td>
                     <td><xsl:value-of select="address/country" /></td>
                    <td><xsl:value-of select="products/id" /></td>
                    <td><xsl:value-of select="products/name" /></td>
                    <td><xsl:value-of select="products/qty" /></td>
                    <td><xsl:value-of select="products/usdPrice" /></td>
                    <td><xsl:value-of select="products/euroPrice" /></td>
                     <td><xsl:value-of select="products/poundPrice" /></td>
                 </tr>
             </xsl:for-each>
             </table>
              </body>

      </html>
   </xsl:template>

</xsl:stylesheet>
