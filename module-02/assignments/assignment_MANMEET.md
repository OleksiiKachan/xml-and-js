# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

First error:
Attribute name "Date" associated with an element type "effective" must be followed by the ' = ' character.
<effective Date>03/12/2016</effective Date>

![image info](../images/error_1.png)

Because of the space between the two, it was considering "Date" as an attribute of element type "effective" and asking to use "=" sign to assign the attribute.

The error can be fixed by removing the space:
<effectivDate>03/12/2016</effectiveDate>

![image info](../images/fixed_error_1.png)

Second error:
The element type "originalName" must be terminated by the matching end-tag "</originalName>".
<originalName> Fresh Mornin' Sampler </originalname>

![image info](../images/error_2.png)

There's a casing error in the closing tag. The 'N' in the "orginalname" should be capital as it was defined in the opening tag.
The name should be same in both opening and closing tag.

The updated line would be:
<originalName> Fresh Mornin' Sampler </originalName>

![image info](../images/fixed_error_2.png)

Third error:
The element type "name" must be terminated by the matching end-tag "</name>".
<name> Oatmeal Breakfast </originalName>

![image info](../images/error_3.png)

Both opening and closing tag should match. In the whole document body, "originalName" element is used.
So, I used the same name for the opening tag.

The fixed line would be:
<originalName> Oatmeal Breakfast </originalName>

![image info](../images/fixed_error_3.png)

All the errors are fixed now. The xml is validated.
![image info](../images/valid_document1.png)
![image info](../images/valid_document2.png)


2. What is the use of CDATA block in this document?

![image info](../images/cdata_block.png)

CDATA is a block of text. The text defined in CDATA block is considered only as character data and not as mark-up (i.e. not parsed by the parser)
Here, the content written inside the block is treated as regular text.

In this document, the content is related to the description of the meals. Hence, it's wrapped inside CDATA block.

3. Add comment line to the end of file which contains you name and student id.

![image info](../images/comment_line.png)

Comment line is added at the end of file in assignment.xml file.

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

Prolog:
It's the information about XML declaration, processing instructions, comment lines and DTD.

XML declaration
<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>

![image info](../images/prolog.png)

Document body:
It contains the document content.
Everything written between the tags <menuInfo></menuInfo> is the document body.
![image info](../images/document_body.png)
![image info](../images/document_body2.png)

Epilog:
It's the final comment or processing instructions.
The comment line added in the last.
<!-- NAME: Manmeet Kaur HUMBER_ID: N01536163 -->
![image info](../images/comment_line.png)

Initially, there were no processing instructions inside the document.
After doing all the questions mentioned in the assignment, the final prolog is as follows:

![image info](../images/updated_prolog.png)

The "stylesheet" added is the processing instructions.


5. Add inline DTD for this document.

![image info](../images/inline_DTD.png)

Inline DTD is added.

6. Verify that file is well-formed and valid.

Screenshot of xml validation:
![image info](../images/validate1.png)
![image info](../images/validate2.png)

7. Create `style.css` file and link it to the file. Add the following styles to the .css:
- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule

![image info](../images/stylesheet.png)

Style added:
![image info](../images/style1.png)
