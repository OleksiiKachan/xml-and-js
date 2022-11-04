<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
  <xsl:template match="/"> 
      <html>
      <head>
        <style>
          h1{
            padding-left: 28%;
            margin-top: 2%;
          }
          table{
            padding: 2px; 
            width: 70%;
            height: 100%;
          }
          th{
            padding: 5px;
            font-family: Franklin;
            font-size: 20px;
            text-align:center;
          }
          td{
            padding: 3px;
            font-family: Franklin;
            font-size: 15px;
            text-align:center;
          }

        </style>
      </head>
        <body>
          <h1> Labours Schedule </h1>
          <table border="2">
          <tr bgcolor="violet"> 
                <th>Slot:Start Date</th>
                <th>Slot:End Date</th>
                <th>Street</th>
                <th>City</th>
                <th>Region</th>
                <th>Country</th>
                <th>Worker 1 First Name</th>
                <th>Worker 1 Last Name</th>
                <th>Worker 1 Your Role</th>
                <th>Worker 2 First Name</th>
                <th>Worker 2 Last Name</th>
                <th>Worker 2 Your Role</th>
             </tr>
            <xsl:for-each select="labours/slot" >
            <tr>
               <td><xsl:value-of select="startDate" /></td>
               <td><xsl:value-of select="endDate" /></td>

               <xsl:for-each select="address">
                <td><xsl:value-of select="street" /></td>
                <td><xsl:value-of select="city" /></td>
                <td><xsl:value-of select="region" /></td>
                <td><xsl:value-of select="country" /></td>
               </xsl:for-each>

               <xsl:for-each select="workers">
               <td><xsl:value-of select="firstName" /></td>
               <td><xsl:value-of select="lastName" /></td>
               <td><xsl:value-of select="role" /></td>
               </xsl:for-each>
            </tr>
            </xsl:for-each>
          </table>
        </body>
      </html>
    </xsl:template>
</xsl:stylesheet>