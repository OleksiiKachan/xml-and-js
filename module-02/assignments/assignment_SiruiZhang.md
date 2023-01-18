Question 1: 
 1)There is space between elective and Date. (11)
 2)The element tag is not match with the end-tag, need to change the "n" to beee "N".(31)
 3)The element tag is not match with the end-tag, need to change from "origianlName" to "name" same as the front tag. (51)

 Question 2:
 To let the system store the contect as it is purely, since there is special character in this document.

 Question 3:
 Added. <!--My name: Sirui Zhang, My humber id:n01536920-->

 Question 4:
    prolog is always the first part in the XML, line 1.
    document body is hierachy tree structure from "<menuInfo>" to "</menuInfo>" .
    epilog is the comment that I just added during question 3.
    There is no processing instructions in this XML file at this moment, but will have one for style.css on Question 7.

Question 5:
<!DOCTYPE menuInfo [
  <!ELEMENT menuInfo (title, summary, effectiveDate, menu+)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT summary (#PCDATA) >
  <!ELEMENT effectiveDate (#PCDATA)>
  <!ELEMENT menu (category, menuItem+)>
  <!ELEMENT category (#PCDATA)>
  <!ELEMENT menuItem (itemName, description, price, indicator*)>
  <!ELEMENT description (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!ELEMENT indicator (#PCDATA)>
  <!ELEMENT itemName (name? ,originalName?, oldName?)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT originalName (#PCDATA)>
  <!ELEMENT oldName (#PCDATA)>
]>

Question 6:
![](../../../OneDrive/%E6%A1%8C%E9%9D%A2/valid.png)

Question 7:
orginal-Name{
    font-size: larger;
    display: block;
}
title{
    font-size: xx-large;
    font-weight: bold;
    display: block;
}
menu{
    display: block;
}
itemName{
    display: block;
    font-weight: bold;
}
name{
    display: block;
    font-weight: bold;
}
category{
    display: block;
    font-size: large;
}te-space: pre-line;
}

