#Parth Mahesh Lukhi

#Student ID: N01529806

#Group5-Library

Contribution: library.xsd, library.xml

--XML--

-First I take the root element inside which I have declared element and element contains element address which contains data of address such as city, country, region and street
-After this I have catalog element which contains data about book catalogs which is author, availability, description, genre, isbn, title and year.
-Then I take id, name and speciality


--DTD--

-I take in root element as + since there are then 1 element occuring
-then I name all elements
-in address I again name all the elements inside it
-here city, country, region and street all is PCDATA since it is string values
-I have taken book as + since it is occuring more than 1 time
-author, availability, description, genre, isbn, title, year I have set this as PCDATA as its string values
-I have again set id, name and spciality as PCDATA as it string


--XSD--

-I declare root element then I take complex type(we take this type if there is more data occuring) and in that I have taken sequence which will allow to run in sequence one after another
-for element I have taken maxoccurance as unbounded
-again kept element in complextype and in squence
-then inside element there was address so I take that and again its a complextype and in sequence 
-no inside address I decalre city, country, region and street as it is string data
-after closing the address I take catalog which is complextype and in set in sequence in I take book which is set to maxoccurence unbounded and same it is also in complextype and sequence
-author, availability, description, genre, isbn, title and year is string values
-I take id, name and speciality as single type and values string