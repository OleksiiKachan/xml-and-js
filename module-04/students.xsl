<?xml version="1.0" encoding="UTF-8"?>
<!-- xsl stylesheet declaration with xsl namespace: 
Namespace tells the xlst processor about which 
element is to be processed and which is used for output purpose only 
--> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<!-- xsl template declaration:  
template tells the xlst processor about the section of xml 
document which is to be formatted. It takes an XPath expression. 
In our case, it is matching document root element and will 
tell processor to process the entire document with this template. 
--> 
  <xsl:template match="/"> 
    <!-- HTML tags 
      Used for formatting purpose. Processor will skip them and browser 
      will simply render them. 
    --> 
		
    <html> 
      <style>
        .main{
          background-color: #2596be;
          float:center; 
          display:inline-block; 
          width: 90%;
          margin-right: 5%;
          margin-left: 5%;
          margin-bottom: 1%;
          margin-top: 1%;
        }
        .main h3{
          float: left; 
          width: 20%; 
          display: inline-block;
          text-align: center;
        }
      </style>
      <body> 
         <h1>Class of Students'xx</h1>

         <div class="main">
              <h3>Roll No</h3>
              <h3>First Name</h3>
              <h3>Last Name</h3>
              <h3>Nick Name</h3>
              <h3>Marks</h3>
         </div>
        <!-- <h2>Students</h2> 
				
        <table border="1"> 
          <tr bgcolor="#457"> 
            <th>Roll No</th> 
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Nick Name</th> 
            <th>Marks</th> 
          </tr>  -->
				
          <!-- for-each processing instruction 
            Looks for each element matching the XPath expression 
          --> 
          <div class="main">
          <xsl:for-each select="class/student"> 
                <!-- value-of processing instruction 
                  process the value of the element matching the XPath expression 
                --> 
            
              <h3><xsl:value-of select="@rollno"/></h3>
              <h3><xsl:value-of select="firstname"/></h3>
              <h3><xsl:value-of select="lastname"/></h3>
              <h3><xsl:value-of select="nickname"/></h3>
              <h3><xsl:value-of select="marks"/></h3>						
          </xsl:for-each> 
        </div>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>