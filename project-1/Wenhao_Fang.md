# Project - 01

- Name: Wenhao Fang
- Id: n01555914
- Contribution: Create `xslt` to display data in the table format, based on the xml file created by Meghna.

---

1. Analyze XML architecture

   - XML file has 15 `<Library>` elements which contain detail information about the library.
   - Miltiple `<catalog>` elements exist in each `<Library>` element.

2. Create a `xsl` file and link this file to `xml` file.
   ![02_01](./pic/02_01.png)

   ![02_02](./pic/02_02.png)

3. Create `<xsl:template>` and html tag using bootstrap as style format.

   ![03_01](./pic/03_01.png)

4. use `<xsl:for-each>` to loop each `<Library>` element.

   ![04_01](./pic/04_01.png)

5. create a `<table>` tag in which loops each `<catalog>` elements.

   ![05_01](./pic/05_01.png)

6. render:

   ![06_01](./pic/06_01.png)

   ![06_02](./pic/06_02.png)

   ![06_03](./pic/06_03.png)
