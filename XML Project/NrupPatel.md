# Description of the Project- Nrup Patel

1. I took up Part-1 of the project in which I created an XML file and on the basis of which I created its DTD and an XSD

2. - While creating the XML file I took into consideration the university.json file and created structures of the elements inside the root element 'universities'.
   - I also created the elements based on the json file so as to make it easier to form structures of inner elements.

3.  - I have created an inline DTD file in which I have created the behaviour/description of elements based on the structure of the XML file.
    - The challenge in the first place that I faced was that I did not know how to get over the complexity naming of elements for example: child elements of student, faculty and courses all had 'id'. Since, the data inside of these elements was of the same type, which is '#PCDATA' which implies 'String', therefore I declared their properties only once and it was good to go.
    - The validation screenshot of the XML file containing the DTD: [image info](../XML%20Project/XMLValid.png)

4.  - While creating a XSD file, I took into consideration the DTD that I created and then based on which I simultaneously took into consideration the element structure and then created the XSD file. 
    - The XSD file containes a better was of describing the XML file therefore creation of the XSD file makde it easier for my teammates to understand the XML file as reading the entire XML file would have been extremely hectic and tiring because they would need to go through entire element structure.
    - The validation screenshot of the XSD file: [image info](../XML%20Project/XSDValid.png)