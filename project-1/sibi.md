Name: Sibi S M
 Student ID: N01539502

 # I worked on airlines.html file and css of the project. The code that retrieves and loads the xml data into the html format and displayed in the web console.

# Screenshot in the Tabular Format
   ![image info](./Tabular%20Form.png)
# Screenshot in the List Format
   ![image info](./List%20Form.png)

# I have tried displaying the data in both ways like in the Tabular way and in the list.

# Tabular Form

1. The HTML file includes a table element with an ID of "airplane_data". 
2. The JavaScript starts by creating an instance of the XMLHttpRequest object and defining a function to handle the response. When the readyState is 4 (the operation is complete) and the status is 200 (the response was successful).
3. Two helper functions are defined: stringToNode and create_airplane_data. 
4. The stringToNode function takes the string as an argument and returns a DOM node. The second function (create_airplane_data) takes a info object as an argument and returns a table row DOM node containing the info data.
5. The displayData function retrieves all the data using the specific tag and store them in an list. The function then loops through each info element and store everything.
6. Inside the loop, there are other loops are present. Firstly the park element and the values are 
retrieved and stored to an list. Secondly the routes element are stored. Then followed by departure and destination elements are stored in an objects.
7. The create_airplane_data function is processed by passing the current object as an argument. This function creates necessary tables containing all the data. When all elements have been processed, the table is displayed.

# List Form
1. The HTML file is airlines_list.html. 
2. The JavaScript starts by creating an instance of the XMLHttpRequest object and defining a function to handle the response. When the readyState is 4 (the operation is complete) and the status is 200 (the response was successful).
3. The displayData function retrieves all the data using the specific tag and store them in an list. The function then loops through each info element and store everything. 
4. Inside the for loop, there the two inner for loops are used. One is used the retrieve the data for the element park and other is used to retrieve the data for routes.
5. Append each and every node to the listitem and finally append the list item to the root node.
6. Then run the below command to check the output in the web console.
7. $ http-server