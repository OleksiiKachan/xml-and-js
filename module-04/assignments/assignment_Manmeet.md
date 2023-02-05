# Assignment

1. Open `module-4/assignments/assignment.xml` in your editor
2. Create xsl file and add link to it

![image info](../images/xsl_linked.png)

3. Display catalog in the following way

- main title is "Catalog"
- use html list tag to display catalog
- render each item as `<article>` inside list item tag
- display product id as h3
- display product description as paragraph.

![image info](../images/first_part_code.png)

![image info](../images/first_part.png)

- render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
- for gender column render M for Men, W for Women
- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image

![image info](../images/final.png)
        
Create `module-4/assignments/assignment_YOURNAME.md` and explain your thought process in it. Add screenshots of each step to the file (Refer `week-1/assignments/evaluation-1.md` on how to add image to md file)

We used xslt to transform xml. The transformation rules defined in xslt stylesheet are applied on xml and it generated a formatted document in form of html which is displayed to end-user.

So, the output shows a catalog table which contains the info of a product.

AS per the question, I used the list tag to display the catalog and used the article tag for the items inside the list.

Then I created a table for the catalog item and used the value-of tag to show the selected node value as text on screen.

For gender column, I used the "choose" tag to check whether it's Men/Women and displayed accordingly.

Then I compared the size "desciption" attribute to check whether its S, M, L, XL and used for each loop to display all records.

I further used a nested table as per the question to show the colour and image for each size category.