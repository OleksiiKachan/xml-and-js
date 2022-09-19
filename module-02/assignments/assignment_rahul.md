
Ans 1 ->
<!--
</summary>
  <effective type="Date">03/12/2016</effective>
  <menu>
-->
    In this line date wasn't mention with its attribute + it was mention again as an element in closing tag.

  <!-- <originalName> Fresh Mornin' Sampler </originalName> -->
    In this line there was a mis-match in the spelling of  elements in oneping and closing tag.

  <!-- <originalName> Oatmeal Breakfast </originalName> -->
  In this line  the element in the opening tag was different from the  element in closing tag.



  Ans 2 ->

  In CDATA block all the content is treated as character data only. For instance if i use the special characher 
  like <, &, ', then i will appear the same like words and space apper in the string. if i use < Rahul & Karadwal >
  then it will appear the same. Which means i dont't need to use the character entity refrence to add any special character in my text.


  Ans 3 ->
 ![Screenshot (715)](https://user-images.githubusercontent.com/49285978/191112892-99a4e8a8-02c9-47f5-814d-2ddaa7928215.png)


  Ans 4 ->
  Prolog in the file is  <!-- <?xml version="1.0" encoding="UTF-8" standalone="yes" ?> -->
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
	Screenshot of xmlvalidator with no errors
	![Screenshot (716)](https://user-images.githubusercontent.com/49285978/191113049-383598d7-1fab-460d-9aae-30bcdfa00d7a.png)
	
	Screenshot of code
	![Screenshot (717)](https://user-images.githubusercontent.com/49285978/191113155-6ba39658-df81-4649-9ccf-88dfe6d3db21.png)
	![Screenshot (718)](https://user-images.githubusercontent.com/49285978/191113197-fef1b6ef-d1e0-4db8-9a84-d331b5d294ff.png)
	![Screenshot (719)](https://user-images.githubusercontent.com/49285978/191113217-8e1ad01f-a1fc-47fb-8246-d77e9f446fbb.png)



Ans 7 -> 
	![Screenshot (720)](https://user-images.githubusercontent.com/49285978/191113412-84b8daa9-1d7f-4bfd-97c4-f5abd9142480.png)
