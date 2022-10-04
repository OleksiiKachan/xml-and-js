assignment.xml
assignment.xsl
explanation--
    xsl stands for Extensible stylesheet language transformations.It is a declarative language.• It provides the ability to transform XML data from one format toanother automatically.• An XSLT stylesheet is used to define the transformation rules to beapplied on the target XML document. XSLT stylesheet is written inXML format. XSLT Processor takes the XSLT stylesheet and applies thetransformation rules on the target XML document and then itgenerates a formatted document in the form of XML, HTML, or textformat. This formatted document is then utilized by XSLT formatter togenerate the actual output which is to be displayed to the end-user.
      The xsl document specifies how a browser should render an xml document.It is based on the idea of templates.It has a stylesheet with some basic things where it has the value which is the xslt version. There are contents of elements and attributes specific to the stylesheet.
      In xsl file ive used xsl template which defines a way to reuse templates in order to generate the desiredoutput for nodes of a particular type or context.Also ive <xsl:value-of> tag puts the value of the selected node as per XPathexpression, as text and <xsl:for-each> tag applies a template repeatedly for each node and <xsl:if> tag specifies a conditional test against the content of nodes.
      <xsl:sort> tag specifies a sort criteria on the nodes.The basic concept is that when we specify a number of templates that eachmatch XML in the source document.• When the matching XML is found, the template is activated, and its contents are added to the output document and gives the output.

      output screenshot--assignment-module-04 output.png
