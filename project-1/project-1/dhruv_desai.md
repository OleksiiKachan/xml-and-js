# Project 1
- Dhruv Desai
- N01511490

## Files created:
- zoo.xml
- zoo.xsd

## Description:
- converted json file zoo.json to xml
    Created one root element names as "list"
    Created sub-elements inside root element (list) named zoo
    And inside each zoo elements, we have different attributes with their values. 
        Here we have a list of different zoo

- created dtd inside zoo.xml
    Here, as we have more than 1 zoo elements so, in DTD, it will be "zoo+"
    Inside zoo elements, we have sub-elements which contains id, openTime, closeTime, location, animals and employees.
    Also, we have more than one sub-elements inside "animals" and "employees". So, it will be also as "animals+" and "employees+" in DTD.

-  zoo.xsl
    For location, I have used concat so that data inside location can be displayed properly.