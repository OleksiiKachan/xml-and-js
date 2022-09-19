
Ans 1 ->

</summary>
  <effective type="Date">03/12/2016</effective>
  <menu>
    In this line date wasn't mention with its attribute + it was mention again as an element in closing tag.

  <originalName> Fresh Mornin' Sampler </originalName>
    In this line there was a mis-match in the spelling of  elements in oneping and closing tag.

  <originalName> Oatmeal Breakfast </originalName>
  In this line  the element in the opening tag was different from the  element in closing tag.



  Ans 2 ->

  In CDATA block all the content is treated as character data only. For instance if i use the special characher 
  like <, &, ', then i will appear the same like words and space apper in the string. if i use < Rahul & Karadwal >
  then it will appear the same. Which means i dont't need to use the character entity refrence to add any special character in my text.


  Ans 3 ->
  ![alt text](http:\\C:\Users\Rahul\Pictures\Screenshots\Screenshot (715))

  Ans 4 ->
  Prolog in the file is   <?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
  document body is the content between root element <menuInfo>
  There are not any processing instruction but according to the 7th question i'll have to add the css link
  which would be like processing instruction. 

  Ans 5 -> 

  <!DOCTYPE menuInfo [

	<!ELEMENT menuInfo (title+, summary, effective+, menu+)>
	<!ELEMENT title (#PCDATA)>
	<!ELEMENT summary (#PCDATA)>
	<!ELEMENT effective (#PCDATA)>
	<!ATTLIST effective type (Date) #REQUIRED>
	<!ELEMENT menu (category+, menuItem+)>
	<!ELEMENT category (#PCDATA)>
	<!ELEMENT menuItem (itemName+, description+, price+, indicator*)>
	<!ELEMENT itemName (originalName+, oldName*) >
	<!ELEMENT originalName (#PCDATA)>
	<!ELEMENT oldName (#PCDATA)>
	<!ELEMENT description (#PCDATA) >
	<!ELEMENT price (#PCDATA)>
	<!ELEMENT indicator (#PCDATA)>

]>

Ans 6 ->

Ans 7 -> 
