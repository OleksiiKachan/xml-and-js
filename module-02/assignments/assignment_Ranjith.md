# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
In the line 11,the given statement is  <effective date>03/12/2016</effective date> we get error in this line because we should write the tag without spaces and moreover in this line we could solve the error by using type which is <effective type="Date">03/12/2016</effective>.

In the line 31,the given statement is <originalname> Fresh Mornin' Sampler </originalName> we get error in this line because we should write the same as in front and end .in above  query,the starting tag and ending tag is different so now we should write the same tag which is <originalName> Fresh Mornin' Sampler </originalName>.

In the line 51,the given statement is <originalName> Oatmeal Breakfast </originalname> we get error in this line because we should write the same as in front and end .in above  query,the starting tag and ending tag is different so now we should write the same tag which is <originalName> Oatmeal Breakfast </originalName>



2. What is the use of CDATA block in this document?
 CDATA section is "a section of element content that is marked for the parser to interpret as only character data, not markup."
 In the block it is used as some data which is in detail to describe then we used CDATA section.


 3. Add comment line to the end of file which contains you name and student id.
 <Comment><!-- Name: Ranjith Jangidi Student Id:N01532750 --></Comment>


4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?
XML Prolog is the component added in the beginning of an XML document. Otherwise, we can say that whatever it appears before the document’s root element can be considered as Prolog. XML Prolog includes XML declaration, DOCTYPE and comments, processing instructions too.

The document body is the bulk of the information content of the document. Whereas across multiple instances of a document of a given type (as identified by the DOCTYPE) the XML prolog will remain constant, the document body changes with each document instance (in general). This is because the prolog defines (either directly or indirectly) the overall structure while the body contains the real instance-specific data. 

The epilog of all Canonical-XML documents contains a single newline character, which immediately follows the ">" marking the end of the root element's end-tag. 

5. Add inline DTD for this document.
The document type declaration (DTD) of an XML message is represented by a syntax element with field type XML.DocTypeDecl, and its children. These comprise the DOCTYPE construct.

Only internal (inline) DTD subsets are represented in the syntax element tree. An inline DTD is a DTD that is declared within the XML document itself. It can be a complete DTD definition, or it can extend the definition in an external DTD.

<!DOCTYPE Student [
<!ELEMENT Student (Name,Id,Course,Country)>
<!ELEMENT Name (#PCDATA)>
<!ELEMENT Id (#PCDATA)>
<!ELEMENT Course (#PCDATA)>
<!ELEMENT Country (#PCDATA)>
]>
<Student>
<Name>Ranjith</Name>
<Id>N01532750</Id>
<Course>ITS</Course>
<Country>INDIA</Country>
</Student>


6. Verify that file is well-formed and valid.
All XML elements must have a closing tag.
XML tags are case-sensitive.
All XML elements must be properly nested.
All XML documents must have a root element.
Attribute values must always be quoted.
With XML,whitespace is preserved.

Yes,the file is wellformed and valid


7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule

Create `module-2/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file (Refer `module-1/assignments/evaluation-1.md` on how to add image to md file)
