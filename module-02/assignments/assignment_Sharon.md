# Assignment 1

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
Answer-1: I have found all errors and have hereby my mentioning with explanation and the solved the errors.

error1:  <effective Date>03/12/2016</effective Date>
        explanation: <!--there is no attribute used in the element. Date attribute has not been specified in the effective tag and effective tag does not need date attribute to end -->
        error corrected:<effective type="date">03/12/2016</effective> 

error2:   <originalName> Fresh Mornin' Sampler </originalname>
        explanation: <!--The element tag must match with the starting element tag such as "</originalName>".-->
        error corrected:<originalName> Fresh Mornin' Sampler </originalName>

error3:  <name> Oatmeal Breakfast </originalName>
        explanation: <!--The content of element type "itemName" must match "(originalName)". such as starting tag and ending tag should match-->
        error corrected:<originalName> Oatmeal Breakfast </originalName>
                        <oldName> Oat Porridge Breakfast </oldName>

2. What is the use of CDATA block in this document?
Answer-2: CDATA is also called Character Data. CDATA denotes that the information between these strings that contains information that could be read as XML markup and also it is a section in XML which is used to interpret character data. It treats the text data as raw text in character format and same in this document. 

3. Add comment line to the end of file which contains you name and student id.
Answer-3: Added my name and student id in assignment.xml and assignment_Sharon.md.
          <!-- NAME - Sharon Sebastian
               STUDENT ID - N01533014 -->

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?
Answer-4: Prolog : 1. Prolog occour before body content in the document,

          <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <?xml-stylesheet type="text/css" href="style.css"?>

          2. whatever data or content present in <!DOCTYPE menuInfo [......]>

          Document Body:  whatever data or content present in body of the document i.e, from <menuInfo>...every content present in 
                          between....</menuInfo>

          Epilog: Any comments or processing Instriction present

                  <!-- NAME - Sharon Sebastian

               STUDENT ID - N01533014 -->

              style.css is the processing instructions for assignment.xml

5. Add inline DTD for this document.
Answer-5: i have added it in the assignment.xml document.
          
          <!DOCTYPE menuInfo [

<!ELEMENT menuInfo (title,summary,effective,menu+)>
<!ATTLIST menuInfo
  xmlns CDATA #FIXED ''>
<!ELEMENT title (#PCDATA)>
<!ATTLIST title
  xmlns CDATA #FIXED ''>
<!ELEMENT summary (#PCDATA)>
<!ATTLIST summary
  xmlns CDATA #FIXED ''>
<!ELEMENT effective (#PCDATA)>
<!ATTLIST effective 
     date CDATA #FIXED ''>
<!ELEMENT menu (category,menuItem+)>
<!ATTLIST menu
  xmlns CDATA #FIXED ''>
<!ELEMENT category (#PCDATA)>
<!ATTLIST category
  xmlns CDATA #FIXED ''>
<!ELEMENT menuItem (itemName,description,price,indicator*)>
<!ATTLIST menuItem
  xmlns CDATA #FIXED ''>
<!ELEMENT itemName (originalName,oldName?)>
<!ATTLIST itemName
  xmlns CDATA #FIXED ''>
<!ELEMENT description (#PCDATA)>
<!ATTLIST description
  xmlns CDATA #FIXED ''>
<!ELEMENT price (#PCDATA)>
<!ATTLIST price
  xmlns CDATA #FIXED ''>
<!ELEMENT indicator (#PCDATA)>
<!ATTLIST indicator
  xmlns CDATA #FIXED ''>
<!ELEMENT originalName (#PCDATA)>
<!ATTLIST originalName
  xmlns CDATA #FIXED ''>
<!ELEMENT oldName (#PCDATA)>
<!ATTLIST oldName
  xmlns CDATA #FIXED ''>
]>

6. Verify that file is well-formed and valid.
Answer-6: there is no error in the xml file and the xml is wel formed and varified with the online sites i.e,
           https://www.xmlvalidation.com/
           https://www.freeformatter.com/xml-validator-xsd.html

7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule

Answer-7: i have made the "style.css" file and added everything asked.

menuInfo{
    background-color: lightgreen;
}
originalName{
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;

}
 title, summary, effective{
  font-style:  bold;
  font-size: 28px;
  display:block;
  text-align: center; 
  margin:0.5em; 
  padding:0.5em; 
  background-color: yellow;
}

 category{
    font-family:Georgia, serif;;
    display: block;
    text-align: center;
    border: 1px solid black;
    margin:0.5em; 
    padding:0.5em;
}


menuItem, itemName, description, price, indicator, originalName{
    display:block;
    text-align: center;
}



Create `module-2/assignments/assignment_YOURNAME.md` and add your theory answers. Add screenshots of each step to the file (Refer `module-1/assignments/evaluation-1.md` on how to add image to md file)

I am added screenshot of the output and css file, and  also the screenshot of the site that shows my xml file well-formed and valid. 

![image info](XML-AND-JS/assets/Error.png)
![image info](XML-AND-JS/assets/Output.png)
![image info](XML-AND-JS/assets/Validate.png)
![image info](XML-AND-JS/assets/Validate2.png)
![image info](XML-AND-JS/assets/Validate3.png)
![image info](XML-AND-JS/assets/Validate4.png)



<!-- NAME - Sharon Sebastian
     STUDENT ID - N01533014 -->