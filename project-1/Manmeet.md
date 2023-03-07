# My task was to "Create xslt to display data in the table format".

So, I made the xsl for the xml file which was created by Nrup and on the basis of xml file, I formed the data in xsl in table format.

The xml has many Universities with their addresses. These universities offer many courses and have faculties, and, many students are enrolled in them.

I first gave a heading "List of Universities" and under this, I displayed all the Universities name in list format along with their address separated by commas. 

I have used "for-each" for Universities, addresses, courses, students and faculties to traverse through each record and then display them.

Later, I made 3 different headings, each for Courses, Students and Faculties and displayed the data for each section in tabular format. I used table and gave table heading for each column in each section and displayed the table data using table rows. I used in-line style to give border to table and background colour to row which includes the column headings.