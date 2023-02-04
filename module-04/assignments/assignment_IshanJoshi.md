# Assignment

1. Open `module-4/assignments/assignment.xml` in your editor
2. Create xsl file and add link to it
    A xsl file is created with name assignment_n01491168 and linked to assignment_n01491168.xml file.
3. Display catalog in the following way

- main title is "Catalog"
- use html list tag to display catalog
- render each item as `<article>` inside list item tag
- display product id as h3
- display product description as paragraph
- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
- for gender column render M for Men, W for Women
- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image

    Bellow is the screenshot after applying all the above requirments.
    [image info](../assignments/assignment.png)

-- Thought process :- While creating the xsl file for the assignment, I got to learn some new  XSL tags which were required to complete this assignment.
Those tags are "For Each" and "If".
FOR EACH is used to create looping in XSLT and IF is used to test condition in XSLT.
