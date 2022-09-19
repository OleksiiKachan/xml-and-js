
Ans 1 ->


  ![Screenshot (721)](https://user-images.githubusercontent.com/49285978/191116362-a1dd9955-c1c5-410d-a14f-0c9be440a9b7.png)
  
     
     In this line date wasn't mention with its attribute + it was mention again as an element in closing tag.
      Modified Code:
  ![Screenshot (722)](https://user-images.githubusercontent.com/49285978/191116642-d380aee3-c06e-4627-8fba-ea406e24b0eb.png)
    
   ------------------------------------------------------------------------------- 
    

  ![Screenshot (723)](https://user-images.githubusercontent.com/49285978/191116950-7af0ab88-2aa6-4c7f-8f53-08bf7aaef761.png)
  
  
    In this line there was a mis-match in the spelling of  elements in oneping and closing tag.
      Modified Code:
  ![Screenshot (724)](https://user-images.githubusercontent.com/49285978/191117096-af0086b3-79d6-45cd-86de-9c8b2c413fb2.png)

  --------------------------------------------------------------------------------------
  
  
  ![Screenshot (725)](https://user-images.githubusercontent.com/49285978/191117581-0ef65c40-2827-474a-b723-0830e4e4682a.png)
  
  
  
  	In this line  the element in the opening tag was different from the  element in closing tag.
	Modified Code:
![Screenshot (726)](https://user-images.githubusercontent.com/49285978/191117889-4fea7c5b-d21b-443f-979a-a6e700966a79.png)




  Ans 2 ->

  In CDATA block all the content is treated as character data only. For instance if i use the special characher 
  like <, &, ', then i will appear the same like words and space apper in the string. if i use < Rahul & Karadwal >
  then it will appear the same. Which means i dont't need to use the character entity refrence to add any special character in my text.


  Ans 3 ->
 ![Screenshot (715)](https://user-images.githubusercontent.com/49285978/191112892-99a4e8a8-02c9-47f5-814d-2ddaa7928215.png)


  Ans 4 ->
  Prolog in the file is  ![Screenshot (727)](https://user-images.githubusercontent.com/49285978/191118453-a6296db2-c4ca-4d60-bab9-20f4966b5aee.png)

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
	
![Screenshot (717)](https://user-images.githubusercontent.com/49285978/191114025-166f0abb-f236-41f5-843e-099542e61a0d.png)

![Screenshot (718)](https://user-images.githubusercontent.com/49285978/191113852-e2f731f8-eb24-427b-aaca-606a31227731.png)
![Screenshot (719)](https://user-images.githubusercontent.com/49285978/191113898-5d007a9a-780d-433a-9d9a-db8f457f9d90.png)




Ans 7 -> 
	![Screenshot (720)](https://user-images.githubusercontent.com/49285978/191113412-84b8daa9-1d7f-4bfd-97c4-f5abd9142480.png)
