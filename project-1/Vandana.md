my contribution in this project is 
1. zoo.xsd file 
2. zoo.html 

explanation: 
1. zoo.xsd:
 The code is a schema for an XML document.
 The root element is the top-level element in the document, and it has one child called "element".
 The type of this child is complexType with a sequence that contains zero or more elements.
 The code starts by defining what an XML document looks like: .
 This means that there are two levels to the structure of an XML document: the root level and then each individual element.
 Each individual element can have any number of children, but they must be nested within another parent (the next level) before they can be considered their own entity.
 This definition also states that every single node in an XML file must have a name attribute which will hold its value as text without quotes or anything else around it.
 It also says that every node should have at least one character between its name and opening tag so you know where to start parsing from when reading through your data files later on.
 Finally, it says that all nodes should contain only characters allowed in names (alphanumeric).
 The code is a schema for an XML document.
 The element is the root of the XML document.
 The element has two attributes: name and maxOccurs.
 The name attribute specifies the name of the element, and the maxOccurs attribute specifies how many times this particular instance of this element should be repeated in a sequence.
 The code starts with the XML declaration.
 Next, there is a element that contains an element and a element.
 The first one defines the type of data in this file (an employee) and the second one defines how many employees are allowed to be defined in this file.
 The next line starts with "name = 'employees'".
 This is where we define what name our sequence will have when it's used as part of another document or program.
 It also tells us that our sequence has no limit on how many elements can be added to it because its maxOccurs attribute is set to unbounded, which means "as many as needed."
 Then we define what type of data each element will contain by using an xs:string for each field in our sequence (name, age, salary).
 We then close off the definition for our sequence by adding .
 Next comes a complexType called employees that contains two elements—one named "element" and one named "closeTime"—that both have xs:string types but different names so they can't be confused with
 The code is a sequence of elements.
 The first element in the sequence is an xs:element type="xs:string" name="scientificName".
 The second element in the sequence is an xs:element type="xs:string" name="sex".
  This is validated also. 
  
2. zoo.html:
The code starts by creating an XMLHttpRequest object.
 This is a JavaScript function that allows us to make requests to the server using HTTP.
 The code then sets up a callback function, which will be called when the request is ready and has been successfully received from the server.
 The next step in this script is setting up some variables for use later on in the program: xhttp, status, responseText, responseXML.
 These are all used throughout this script as we progress through it.
 Next comes a call to open() , which opens our connection with the server and sends out an initial GET request for "zoo".
 We also set up another variable named url .
 This variable stores our URL so that we can access it later on in this program without having to type it out every time (which would get tedious).
  The following code is the function that runs when the DOM readyState changes to 4 and status is 200.
The code starts by creating an xhttp object and opening a GET request to the zoo.xml file on the server.
 The code then sends the request, which will be handled by our function displayZooData().
The next line of code creates an element with id zooo in our document and assigns it to listElement.
 Next, we iterate through each of the elements that have been returned from our XML response and assign them to variables called zzz for index 0, zId for index 1, 
 mainly we are rendering each data and then showing the data .


 ## the xml and css file were worked by both the team members together.


