# Activity - 1

## Name: Naitik Mukeshkumar Panchal
## N-No: N01512962

- Here I ceated the assignment.xsl file, provided the namespace and linked the XSL file to the XML file. In the XSL file I selected the tamplate to match with root element of the XML file. Then added the simple HTML tags to represent the given XML data in a proper way. 
- I used the unordered list to display the product elements and attributes in `<article>` tag. 
- ![assignment-img-1](/module-04/assets/assignment-img-1.png)

- Started the http-server.
- ![assignment-server](/module-04/assets/activity-2-server.png)

- Then I created the HTML table. I gave all the table heading first then used the `for-each` populate the table with XML data. In the loop I selected the catalog_item element using the relative path. And for the data I selected the inner elements and attributes.
- After that I used the if statement to check if the gender attribute value is men or women. If its men then the output will be displayed as M and for women it will be displayed as W.
- ![assignment-img-2](/module-04/assets/assignment-img-2.png)

- Then I created the sub-table for the Size elements. For each size I created the sub-table and gave some basic colors. I used the if statement and checked the size to determine if the value is present then the sub table should be created otherwise it should be empty. Then to add the data inside the sub tables I used the for-each loop. I selected the inner node to display the values and image attribute value.

- The final output is:- 
- ![assignment-output](/module-04/assets/assignment-output.png)
