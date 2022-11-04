In this project i have contributed for below tasks
--> Converting the json file to xml.
--> Adding DTD to the xml file.
--> Creating XSD for the xml file.
--> Creating html file and loading data from xml to html

I have written the Internal DTD declaration, it is wrapped in <!DOCTYPE> we need to declare all the tags from the root tag, if the tag contains subtags, they are all declared for the parent tag.
Specify the type of data it contains in the tags like PCDATA contains parsed data, CDDATA means the character data where the special meanings are ignored.

In XSD file we first specify the schema link which indicates that datatypes, elements which we are using in current schema comes from that namespace.
Specify the type whether tag contains complexType or the simpleType. If there are sequence of tag specify that they are in sequence. Mwntion the name of the tag and the type of data contained in it like string, decimal.

Loading data from xml to html with css styling. getting the data from the tag names with getElementsByTagName. Specifying the data name with headings.
