1. ERROR IN THE CODE:
there are 3 main error in code:
in line 11, 31, 51.

image.png

2 main error in this xml file is:[in line 31, 51 line]
    (in line 31)<originalName> Fresh Mornin' Sampler </originalname>
    (in line 51) <name> Oatmeal Breakfast </originalName>
[both different tags are used, as xml is case senitive so both opening and closing tags should be same.
but here, in code originalName (with capital N) is used, but in closing tag originalname(small n) is used. ]
[ in line 51 , same as above both different tags are used name and originalname ]
fix it as:
    (in line 31)<originalName> Fresh Mornin' Sampler </originalName>
    (in line 51) <originalName> Oatmeal Breakfast </originalName>

and one error is in line 11
    (inline 11)<effective Date>03/12/2016</effective Date>
[there can not a space between a tag , so tag should be a single word, or in this case i can use atrribute as type, as type=date , or can used effectiveDate together as a tag.]


2. use of CDATA block:
the text within the block is treated as a regular english text block, rather then any markup laguage or special symbol, so supress the usage of <,> and other symbols and even tags.
    the main usage of this block is that used can specify any data or text with caring abpout any symbols or tags.
image.png

3. to add the comment :
    SYNTAX:   <!--  comment    -->
    
    <!-- 
        gurpreet kaur saini
        n01530965
    -->
image.png

4. identifying prolog, document body, and epilog in the document
prolog: this statement contains declaration block, comments, DTD. this block contain basic information about the documnet.
document body: contain a single root element of xml file.
epilog: this contain final comments and processing instrutions.
    processing instrustion: so there is no processing statement in this documnet, but when in Q7 , i will add css file that command will be processing statement for xml.


5. DTD for this document:


6. verify well- formed document or valid.

image.png




7. create css file:
code of css file:
/*    Change font-size of originalName   */
originalName{
    font-size: 50px;
    font-style:oblique;
}
/*   Display each category on the new line    */
category{
    display: block;
}
/*  Add any other css-rule  */
*{
    color:blue;
    font-family: 'Courier New', Courier, monospace;
    
}
image.png

add css to xml file:
<?xml-stylesheet type="text/css" href="style.css"?>
image.png


-- Gurpreet Kaur Saini
-- n01530965