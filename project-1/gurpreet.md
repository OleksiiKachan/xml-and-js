# Gurpreet Kaur Saini
# n01530965

-> my job is to make xsd and html files

-->Step: 1

once xml and dtd is done by abhay, i my job is make xsd, 
   
    1. I start by scanning the xml file, the main tag labours contains many slot, so this was complex and sequence type. then slot contain various data and tags within it, startdate, enddate, address, contrator,worker, equipment, supply. Here, address, contractor, worker, equipment and supply is complex type and sequence.

    2. so, design xsd according to this.

    3. once design was ready I start codding according to this design.

    4. while codding xsd, I also added type, maxOccurs and minOccurs while defining xml tags in xsd.


-->Step:2 

the html file and js files are made by me and vidhi.

in html file,
     format is bassed order list, and every data is displayed as its list item 

# in html file,
    1. in html file, simple html page is created, using basic html tags and css and javascript file is included externally.

    2. within body tag, <h1> tag is used for heading and <ol> to create order list.
    
# in js file

    1. XMLHttpRequest() is used, to create a connection ,and when its state is 4 and status is 200 it means connection is build sucessfully and data is ready to load.

    2. then onreadystatechange() will lokk for state and status for connection built in above. if status is 200 and state is 4 then , the displayData() is executed .
    
    3. then,  xhttp.open() is used to to pass xml file name, method name as get. this function to open xml file.
    
    4. lastly,  xhttp.send() is used to send the data 

    5.  displayData() is used to display the data from xml file, data is taken from xml, using .getElementsbyTagName(). and stored in to local variable of JS. 

    6. Once data is extracted from xml, i reaggrange the data in htmlstring, according to list format. for this i used data stored in local variable and html tags like <ul><li><p><h4> and many more.

    7. and the lastly, this string is attacted to html element(using concept of dom) innerHTML.

    8. the process to get values from <slot> tag is repeated again and again to all the data in <slot> tag.


# in css file

 simple css properties is used in coresspond to t  html tags.like color, font-size, background-color, margin, border and many more.

 to create a box (or card like shape) for every <li> data flex box model is used  and its direction is set in column. and background-color margin and border-radius is set accordingly to display it as a card shape.