# Falgun Dudhat - N01518480

Contribution: library.html

- Initially created div with id "library" and table tag with column name.
- When page load, xhttp request would be triggerd to load xml file in to varible.
- when page is ready, "displayLibrary()" function will be called.
- In function, first fetch all  "element" tag with getElementsByTagName and interate through each element.
- In each iteration, get the nodeValue and generate string html.
- For catalog, I instert empty table with column names with id of libraryId. Along with this, I also  add one button coulmn in library table that help to show and hide library's catalog details.
- The empty table is set initially display:none.
- The generated sting-html converted to html node and append in div tag with library.
- Now, "displayCatalog()" function will be called with library id.
- In this, we iterte thhrough each book element, and generate string-html  with that book.
- The catalog html string convected into html node and append it to empty table with libraryId.
- We have "showHide()" function that called when user clicks on "Show catalog".
- In this function, the catalog table's dispaly property set to 'block', so that user can see catalog of perticualar library.