1.  <effectiveDate>03/12/2016</effectiveDate> <!--There should be no space in tag-->
    <originalName> Fresh Mornin' Sampler </originalName> <!--opening tag and closing tag should contain same name-->
    <originalName> Oatmeal Breakfast </originalName> <!--opening tag and end tag should be same-->

2.  The data written in CDATA (character data) is treated as the character data what ever the special characters, everything is treated as a normal text. Data is not interpreted as xml.
    xml has special meaning for < > & these characters are treated as a normal text.

3.  Added comments to the end of file
    ![image info](../Assets/3Q.png)

4.  assignment.xml does not contain epilog. It is optional contains comments, processing instructions.

    ![image info](../Assets/4Q.png)

    <!--XML document contain
    prolog
        XML declaration
        Processing instructions
        Comments
        DTD
    Document body
    epilog(optional)
        final comments/ instructions -->

5.  Inline DTD
    ![image info](../Assets/5Q.png)

6.  the file assignment.xml is well-formed and valid through https://www.xmlvalidation.com/
    ![image info](../Assets/6Q.png)

7.  ![image info](../Assets/7Q.png)

    Included <?xml-stylesheet type="text/css" href="style1.css"?> in XML to link the CSS doc
