1. *Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.*
-- There were the following errors:
   1. Opening and closing brackets were different for the following syntax
       a.ERROR[<effective Date>  </effective Date>] || Corrected [<effectiveDate> </effectiveDate>]
       b.ERROR[<originalName>  </originalname>]     || Corrected [<originalName>  </originalName>]
       c.ERROR[<name>  </originalName>]             || Corrected [<originalName>  </originalName>]


2. *What is the use of CDATA block in this document?*
-- CDATA also known as Character Data, this block in the document summarizes the XML script used. CDATA Block enable us to use special entities such as "&","," and text which is not required to be parsed by the parser. This particular CDATA giver a summary of the restraunt 'Chester's'. 

3. *Add comment line to the end of file which contains you name and student id.*
![image info](Assignment%201_Question3.png)
-- <!--Name: Deeya Chadha   ||   Humber ID: N01553958 -->

4. *Identify prolog, document body, and epilog in the document. Are there any processing instructions?*
-- It contains prolog but only the declaration part which is a declaration of XML.
        "<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>"

    The body tag is the  "menuInfo(<menuInfo>)" tag.
    This code does not contain epilog and any processing instructions.

5. *Add inline DTD for this document.*
       ![image info](Assignment%201_Question5.png)


6. *Verify that file is well-formed and valid.*
![image info](Assignment%201_Question6.png)

7. *Create `style.css` file and link it to the file. Add the following styles to the .css:
- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule*
![image info](style.css)
