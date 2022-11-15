# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
Yes there are some errors
1).In line 30,there should be no space in between the tags(Effective Date--It should be <Effectivedate> </Effectivedate>.
2).In line 70 ,the element type "originalName" must be terminated by the matching end-tag "</originalName>".
   The error was  <name> Oatmeal Breakfast </originalName>.
   It should be <originalName> Oatmeal Breakfast </originalName>.
3).In line 50 The element type was not matching,in the end tag n should be capital 'N'
   The error was<originalName> Fresh Mornin' Sampler </originalname>
   It should be <originalName> </originalName>
   image---image_1 (C:\Users\14372\Pictures)

2. What is the use of CDATA block in this document?
The use of CDATA block in this document is that we can use this to escape some characters which otherwise will be treated as regular XML. The data inside this will not be parsed. For example, if you want to pass a math equation that contains < or > on it, we can use CDATA to do it and is treated as a character data and not as a markup which is in between the <description> </description>

3. Add comment line to the end of file which contains you name and student id.
   <!..Name-Swathi Tiruvuru Student ID-N01525839-->

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?
   standalone syntax of prolog-<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
   document body--it started from <menuinfo> which is the root element and it was after structured as a child elements and then the subelements.
   epilog--The epilog of all Canonical-XML documents contains a single newline character, which immediately follows the ">" marking the end of the root element's end-tag. 

   
5. Add inline DTD for this document.
   An inline DTD is a DTD that is declared within the XML document itself. It can be a complete DTD definition, or it can extend the definition in an external DTD.
   [
   <!ELEMENT menuInfo (title, summary, effectiveDate, menu+)>
   <!ELEMENT menu (category, menuItem+)>
   <!ELEMENT menuItem (itemName, description, price, indicator*)>
   <!ELEMENT itemName (name?, originalName?, oldName?)>
   <!ELEMENT title (#PCDATA)>
   <!ELEMENT summary (#PCDATA)>
   <!ELEMENT effectiveDate (#PCDATA)>
   <!ELEMENT category (#PCDATA)>
   <!ELEMENT name (#PCDATA)>
   <!ELEMENT originalName (#PCDATA)>
   <!ELEMENT oldName (#PCDATA)>
   <!ELEMENT description (#PCDATA)>
   <!ELEMENT price (#PCDATA)>
   <!ELEMENT indicator (#PCDATA)>
   ]>

6. Verify that file is well-formed and valid.
The file is well-formed and valid and the document has root element,child element n sub child elements and it has all element types with proper closing tags and the attribute values must always be quoted.
whitespace is preserved with the xml.

7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule

Create `module-2/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file (Refer `module-1/assignments/evaluation-1.md` on how to add image to md file)
