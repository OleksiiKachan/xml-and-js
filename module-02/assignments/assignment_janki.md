# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

   \*error 1 and line 11: <effective Date>03/12/2016</effective Date>

   - attribute must be used in element. we can not write element value.
   - we can fix this error like : <effective type="Date">03/12/2016</effective>

   \*error 2 and line 31:
   <originalName> Fresh Mornin' Sampler </originalname>

   - it must have same name of opening tag and closing tag
   - here, originalName is not same as originalName ( error of uppercase and lowercase of n)
   - we can fix it : <originalName> Fresh Mornin' Sampler </originalName>

   \*error 3 and line 51:
   <name> Oatmeal Breakfast </originalName>

   - opening tag must be same as closing tag
   - we must write <name></name>
     or <originalName></originalName>

2. What is the use of CDATA block in this document?

   - CDATA is one type of block of text that only has character data such as < , > , and &
   Example:
   <address>
      toronto, canada
   </address>
   in this scenario, we have to use CDATA
   <![CDATA[
       <address>
      toronto, canada
      </address>
   ]]>

3. Add comment line to the end of file which contains you name and student id.
<!--Username: Jankiben Patel
  UserId:n01533282-->

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

   - prolog : prolog always occour before body content
     in file, <?xml version="1.0" encoding="UTF-8" standalone="yes" ?>

   - documnet body:contains tree structure of body
     <menuInfo>..</menuInfo>

   - epilog: means final comments and processing instructions
     in file , <!--Username: Jankiben Patel
                UserId:n01533282-->
   - in file, there is no processing instructions.

5. Add inline DTD for this document.
   <!DOCTYPE menuInfo
   [
     <!ELEMENT menuInfo (title, summary, effective, menu+)>
     <!ELEMENT title (#PCDATA)>
     <!ELEMENT summary (#PCDATA)>
     <!ELEMENT effective (#PCDATA)>
     <!ATTLIST effective type (Date) #REQUIRED>
     <!ELEMENT menu (category,menuItem+)>
     <!ELEMENT category (#PCDATA)>
     <!ELEMENT menuItem (itemName,description,price,indicator*)>
     <!ELEMENT itemName (originalName, oldName?)>
     <!ELEMENT description (#PCDATA)>
     <!ELEMENT price (#PCDATA)>
     <!ELEMENT indicator (#PCDATA)>
     <!ELEMENT originalName (#PCDATA)>
     <!ELEMENT oldName (#PCDATA)>

   ]>

6. Verify that file is well-formed and valid.

- file is well-formed as no errors occours in assignment.xml

7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- i add this:
<?xml-stylesheet type="text/css" href="style.css"?> in second line
