# CONTRIBUTION: Ravjit Singh (N01542323)

## 1. Designed XML File
I went through the "zoo.json" file provided to make the XML file. Gave zoo id as attribute to individual zoo element, same with the individual employee element. Gave scientific name of the animal as the attribute to indivdual parent animal element, and gave givenName as attribute to animal commonName.

## 2. Created DTD for created zoo.xml file
Creating DTD for the zoo.xml was quite simple. Did not find it very difficult or confusing. Image has been provided below showing the DTD validation for the "zoo.xml" using the website URL provided as extra resources.
![image info](./DTD%20validation.png)

## 3. Created HTML file and load data dynamically using JavaScript
I found loading the data dynamically using JS quite tricky as there were 2 elements in parent zoo element that required individual iteration to load data into table (employee and animal). I just first iterate the values for employee and animal using a variables and then appended them into the main block of string element that was responsible for creating HTML elements. I worked fine after wuite a few tries.