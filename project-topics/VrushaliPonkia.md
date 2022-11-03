I, Vrushali Ponkia(n01530336) contributed in html and xslt file.

1. xslt file :
- xsl stylesheet declares with xsl namespace which tells the xlst processor about which element is to be processed and which is used for output purpose only.
- In xsl template declaration tells the xlst processor about the section of xml document which is to be formatted. It takes an  XPath expression. In our case, it is matching root element and will tell processor to process the entire document with this template.
- Next is html tag, used for formatting purpose. Processor will skip them and browser will simply render them. 
- Now, I have taken table to format the data in table structure where tr tag is table row and td tag is cell in the table which are displayed as left-aligned text and that is the reason table inside a table is left alligned in the cell. Also th tag is the header of the table. 
-  for-each processing instruction looks for each element matching the XPath expression and it selects the path "info/clinic" where info is the root and clinic is the child of info.
- Now I filled values according to the heading of table. So, for that simply inside a for-each loop selected "id" and for address, employee data and drug data I created another table inside a table.
- As I did earlier for main root tag, I loop through each employee data selected path as "employees/empData" and crated a table and filled the cell with tr and td tag and selects the tag name respectively.
- Likewise, for drug data loop through each data with path "drugs/drugData" and created table inside a table and filled each cell with values.
- But, as address has just 1 data so need to loop through.
- The xsl:value-of element can be used to extract the value of an XML element and add it to the output stream of the transformation.


2. html file :
- head tag is used to define the head portion of the document which contains information related to the document and I used internal CSS to style the html.
- Now, in body inside a script tag I loaded the xml file which is clinic.xml.
- Created a funcion named displayData() and first and foremost thing is to create a XML DOM object by parser and get the first element.Here, it is clinic and stored in a var called customerNodes.
- Now loop through customerNodes and fetched the data.
- Here, getElementsByTagName is used to access the node based on the name given and returns a list of node and inside a [] goes integer that describes which child node to fetch next. Also, nodeValue means value of the node which is a text.
- Storing all those fetched text to a constant var and printing by $ sign.
- Now, as employee data and drug data has more than 1 data inside their respective parent node and therefore I loop through each node inside a main for loop to print multiple data and same steps should be followed as I did in above 3 steps. 