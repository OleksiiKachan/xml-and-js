Ryan Gonzales
N01530575

During our initial planning, Aycan, who is acting as our group's leader, has provided the idea of using Cars for Sale site and taken some data from the Kijiji website. She placed 20 cars, and placed them in an excel file which we can use as reference.

![](../MS%20Teams%20Convo%201.PNG)

Then Aycan assigned the tasks for each member. I was assigned with xml and dtd:

![](../MS%20Teams%20Convo%202.PNG)

When I opened the database excel file provided by Aycan, I noticed that the cars data only have brands and year.

![](../database%20excel%20sample.PNG)

In real life, if I am a car seller, or a car buyer, I would need to know the exact model of the car I am selling/buying. So based from the available brand and year and referencing the picture in the database excel file that Aycan provided, I have to research each model of the 20 cars. :)

And since I have the necessary data for each car, I proceeded with creating my xml file.

For my DTD, I ploted it as below:

![](../Ryan's%20DTD.PNG)

So root element is "cars_for_sale", and I have grouped each car according to brand. So the element "brand" comes after the root element, and has an attribute of "name". Below the element of brand, are the cars under the same brand, which is represented by the car element. The car element has an attibute of id, which is required and a string element (I entered some random month and date for each car and the car's year property for the last four digits as the car's id, so you'll notice some id have a leading zero). 

Under the car element will be model, year, price, type, transmission and image subelements. And under type element, are body and fuel subelements. 

Elements brand and car have the + symbol, since they can appear in the file at least once. Elements body, fuel and transmission have the ? symbol, since some of the cars do not have info/entry for body, fuel and transmission. 

An example of these are the cars are:

*NO BODY INFO CAR*
![](../no%20body.PNG)
![](../no%20body%201.PNG)

*NO FUEL AND TRANSMISSION INFO CAR*
![](../no%20fuel%20and%20transmission.PNG)

![](../no%20fuel%20and%20transmission%201.PNG)

Then I validated my xml file (which passed the validation) and sent it to my groupmates through MS Teams.

![](../MS%20Teams%20Convo%203.PNG)

Then when I reviewed the required files for this project again, I noticed we also need to submit xsl, and no one was assigned yet for the xsl. So I went ahead and created the xsl file, validated it, and sent it to my groupmates via MS Teams.

![](../MS%20Teams%20Convo%204.PNG)

![](../MS%20Teams%20Convo%205.PNG)

![](../cars_for_sale(xsl).PNG)

However, Aycan made some minor changes on the xml in order to fit what she have in the html she was doing.

![](../MS%20Teams%20Convo%206.PNG)

I compared her xml with my initial xml files, and updates were minor. Instead of not including body, fuel and transmission elements that do not have any info for some cars, she added the element and placed a dash (-) to show that info is not available.

![](../Aycan's%20xml%20changes%201.PNG)

![](../Aycan's%20xml%20changes.PNG)

Checking the xsl, there is no changes and when I tested it, the same output is still being shown, but the unavailable body, fuel and transmission data have been replaced by dash (-) instead of blanks.

