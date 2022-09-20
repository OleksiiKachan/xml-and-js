# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

In line 11 we get error because we need to mention date=effective to execute the file


2. What is the use of CDATA block in this document?
A CDATA section is "a part of an element's content that the parser is instructed to treat as character data only, not markup."
The block contains some data that is used to describe anything in detail, hence we used the CDATA section.


3. Add comment line to the end of file which contains you name and student id.
<Comment><!-- Name: Harish Nomula Student Id:N01532988 --></Comment>

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

The element added to an XML document at the start is called the prologue. In the absence of it, we might state that Prolog can be regarded as everything that comes before the document's root element. The processing instructions, comments, and DOCTYPE are all included in XML Prolog.

Most of the information in the paper is found in the body. The document content varies with each occurrence of the same type of document, but the XML prologue will always be the same across all instances of the same document (as specified by the DOCTYPE) (in general). This is such that while the body includes the actual instance-specific data, the prologue just defines the overall structure (either directly or indirectly).

One newline character, directly after the ">" signifying the end of the root element's end-tag, appears in the epilogue of every Canonical-XML document.

5. Add inline DTD for this document.
A syntax element with a field type of XML serves as a representation of the document type declaration (DTD) of an XML message. the children of DocTypeDecl. The DOCTYPE construct consists of these.

The syntactic element tree only displays internal (inline) DTD subsets. A DTD that is declared inside the XML document itself is known as an inline DTD. It could be a whole DTD definition or an extension of a definition found in another DTD.

<!DOCTYPE Student [
<!ELEMENT Student (Name,Id,Course,Country)>
<!ELEMENT Name (#PCDATA)>
<!ELEMENT Id (#PCDATA)>
<!ELEMENT Course (#PCDATA)>
<!ELEMENT Country (#PCDATA)>
]>
<Student>
<Name>Harish Nomula</Name>
<Id>N01532988</Id>
<Course>Information Technology Solutions</Course>
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

originalName {
    font-size: 30px;
  }
  
  category {
    color: rgb(0, 255, 60);
    display: ruby-base;
    font-weight: bolder;
  }

Create `module-2/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file (Refer `module-1/assignments/evaluation-1.md` on how to add image to md file)
