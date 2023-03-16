<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
<title>Construction Data</title>
<style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            text-align: left;
            padding: 8px;
            border: 1px solid #ddd;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2
          }
        </style>
</head>
<body>
<h1>Construction Data</h1>
<table>
<tr>
<th>Start Date</th>
<th>End Date</th>
<th>Street</th>
<th>City</th>
<th>Region</th>
<th>Country</th>
<th>Contractors</th>
<th>Workers</th>
<th>Equipments (Qty)</th>
<th>Supplies (Qty)</th>
</tr>
<xsl:apply-templates select="buildings/building"/>
</table>
</body>
</html>
</xsl:template>

<xsl:template match="building">
<tr>
<td><xsl:value-of select="startDate"/></td>
<td><xsl:value-of select="endDate"/></td>
<td><xsl:value-of select="address/street"/></td>
<td><xsl:value-of select="address/city"/></td>
<td><xsl:value-of select="address/region"/></td>
<td><xsl:value-of select="address/country"/></td>
<td><xsl:value-of select="contractors"/></td>
<td>
<xsl:apply-templates select="workers/worker"/>
</td>
<td>
<xsl:apply-templates select="equipments/equipment"/>
</td>
<td>
<xsl:apply-templates select="supplies/supply"/>
</td>
</tr>
</xsl:template>

<xsl:template match="worker">
<xsl:value-of select="concat(firstName, ' ', lastName, ' (', role, ')')"/>
<br/>
</xsl:template>

<xsl:template match="equipment">
<xsl:value-of select="concat(type, ' (', qty, ')')"/>
<br/>
</xsl:template>

<xsl:template match="supply">
<xsl:value-of select="concat(material, ' (', qty, ')')"/>
<br/>
</xsl:template>

</xsl:stylesheet>

<!--
Used the xslt to transform the xml data into an HTML table

The table has 10 columns: Start Date, End Date, Street, City, Region, Country, Contractors, Workers, Equipments (Qty), and Supplies (Qty).

**The template matching the root element "/" creates the HTML document, sets the title to "Construction Data," and applies templates to each building element.

The template matching the building element creates a table row with data cells for each child element. 
The values of the Start Date, End Date, Street, City, Region, and Country elements are output in separate data cells. 

The Contractors element is output in its own data cell.

The Workers, Equipments, and Supplies elements are output in their own data cells, with the values of their child elements 

Used additional templates for formatting the output of the Workers, Equipments, and Supplies child elements of a building element. 

These templates are used in the apply-templates elements in the building template. -->