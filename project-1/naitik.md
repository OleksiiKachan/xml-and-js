# Project file:

## Name: Naitik Panchal
## N-No: N01512962

* Our project is about airlines data. We have to convert airlines.json to xml file and provide dtd, xsd, xslt, html files to dynamically load the data.

* In this project I contributed by creating the DTD file, html & JS and provided the simple css for HTML table. I created the DTD in XML file and provided the inlinde DTD and also stored the DTD into saperate file as well. Then I used the online validator to validate the DTD file for XML file and it displayed no errors were found.
* ![assignment_dtd_validation](/project-1/assets/valid_DTD_XML.png)

* Then I created a `HTML` file to display the given XML data dynamically into the HTML page. I used the JS inline script to load the data into HTML page. I used the HTML table to display the data. First I parsed the data using ParsedData method which gets the XML elements values, then there were some elements which were inside inner tags so I had first created an array to store the data of those inner elements and used the for loop to get all the data. Then I created the createTable method to create the inner table structure. After loading the data I created a simple CSS for outer and inner tables.
* ![assignment_html_output](/project-1/assets/html_output.png)
