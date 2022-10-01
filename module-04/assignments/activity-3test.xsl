<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   

  <xsl:template match="/"> 
  
		
    <html> 
      <body> 
        <h2>product</h2> 
				
        
        
         
          
          <xsl:for-each select="products/product"> 
            <dl>  
                  
                  <xsl:value-of select="product"/> 
                  <div>
                      <dt>productName</dt> 
                      <dd><xsl:value-of select="productName"/></dd>
                    </div>
                    <div>
                        <dt>manufacturer</dt> 
                        <dd><xsl:value-of select="manufacturer"/></dd> 
                    </div>

                    <div>
                        <dt>description</dt> 
                        <dd><xsl:value-of select="description"/></dd> 
                    </div>
                    
                    <div>
                        <dt>prices</dt> 
                        <dd><xsl:value-of select="prices"/></dd> 
                    </div>

                    <div>
                        <dt>productItems</dt> 
                        <dd><xsl:value-of select="productItems"/></dd> 
                    </div>
            
            
            </dl> 
          </xsl:for-each> 
       
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>