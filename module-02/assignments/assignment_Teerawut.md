# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

There are 3 errors in line 11, 31 and 51.

Line 11: The tag name can not be a space between a tag so tag should be a single word
Line 31: The open tag and the close tag name is not the same name because xml is case senitive.
Line 51: The open tag and the close tag name is not the same name because xml tag name shoud be the same name.

--before
line 11: <effective Date>03/12/2016</effective Date>
line 31: <originalName> Fresh Mornin' Sampler </originalname>
line 51: <name> Oatmeal Breakfast </originalName>
--after fix it
line 11: <effectiveDate>03/12/2016</effectiveDate>
line 31: <originalName> Fresh Mornin' Sampler </originalName>
line 51: <originalName> Oatmeal Breakfast </originalName>

2. What is the use of CDATA block in this document?


3. Add comment line to the end of file which contains you name and student id.

<!--
    Name: Teerawut Sangpueng
    Id: N01547659
-->

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

prolog: It contains a basic information documnet as declaration block, processing instructions, comments and Document type declaration(DTD).
Document body: It contains a single root element of xml file.
Epilog: is optional and contains any final comments or processing instructions.

5. Add inline DTD for this document.


6. Verify that file is well-formed and valid.
7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule

Create `module-2/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file (Refer `module-1/assignments/evaluation-1.md` on how to add image to md file)
