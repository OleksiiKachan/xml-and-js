Catalog is displayed using heading 1 tag which is a root node of all the assignemnt.xml file .
product is a child node of the catalog which was added using for-each loop of xsl inside the list tag
The product_id is an attribute of product which is displayed using h3 tags similarly to the description.
Then a table is added with all fields.
There is another for-each loop to add all rows in that we add values using xsl:value-of in each rows.
i have write M for Men and W for W using xsl:choose which allows two choices of gender.
Column of sizes are assigned which are small medium large and extra-large.
then there are two columns under which are image,color .
Under every size column we are using xsl:if for checking that if there is null value so that we can have an empty box else the value.



![Assignment](https://user-images.githubusercontent.com/108425395/193428880-626a6bd8-43ee-4dd0-9d8f-026347f4ab53.png)
