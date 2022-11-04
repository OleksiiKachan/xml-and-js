My contribution 


Xsd File:
I created the XSD by all the elements that contains another element, or attribute(s) are considered as complex elements and so they are all defined as complex elements. 
All the other elements were defined as simple elements.
All the elements that appear multiple times had maxOccurs as “unbounded” since they appear more than once in the document.


Xslt file:
After creating xml and dtd. I created bank.xsl
In,xsl file i have declared xsl namespace 
Then i have used match attribute which is used to associate with template with XML file
Inside html tag i have used table so that my data will be shown in table format.Then i have used tr tag for table row and th tag is used for table header and td tag for showing my data to left-aligned in the cell.
The root is banks and branch is the child node. I have declared all the heading in th tag and in the xsl:value-of element that can be used to extract the value of an XML element and add them to the output.

![Alt text](../../../../../C:/Users/Admin/xml-and-js/project-1/assets/HtmlOutput.PNG)

![Alt text](../../../../../C:/Users/Admin/xml-and-js/project-1/assets/XMLValidation.PNG)

![Alt text](../../../../../C:/Users/Admin/xml-and-js/project-1/assets/XSDValidation.PNG)

![Alt text](../../../../../C:/Users/Admin/xml-and-js/project-1/assets/XSLOutput.PNG)







 


