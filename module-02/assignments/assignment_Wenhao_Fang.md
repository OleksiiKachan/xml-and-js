# Assignment - Module

1. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

- **Error#01**

  - **Error**: <br>![error01](./pic/1.error01.png)
  - **Cause** : Element name`<effective Date>` contains blank space.
  - **Fix**: <br>![fix01](./pic/1.fix01.png)

- **Error#02**

  - **Error**: <br>![error02](./pic/1.error02.png)
  - **Cause** : The opening tag`<originalName>` mismatches the closing tag `<originalname>`.
  - **Fix**: <br>![fix02](./pic/1.fix02.png)

- **Error#03**

  - **Error**: <br>![error03](./pic/1.error03.png)
  - **Cause** : The opening tag`<name>` mismatches the closing tag `<originalName>`.
  - **Fix**: <br>![fix03](./pic/1.fix03.png)

- Display in browser after fixing:![display](./pic/1.after_fix.png)

---

2. What is the use of CDATA block in this document?

- The `CDATA` block is used in `<summary>` and `<description>` tags that might contain a bunch of character data, including the reserved symbols like `'` or `&`. Thus, the purpose of the `CDATA` block employed in this document is to keep the whole block of data intact.

---

3. Add comment line to the end of file which contains you name and student id.

- A comment `<!-- Name: Wenhao Fang; ID: n01555914 -->`has been added to the end of the file.
  ![comment](./pic/3.comment.png)

---

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

![parts](./pic/4.parts.png)

- **prolog**: XML declaration in the first line of the document. `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`. (The part underlined in red)

- **document body**: the elements in a hierarchical tree structure between the `<menuInfo>` tag and `</menuInfo>`.(The part in the green rectangle)

- **epilog**: the comment added at the end of the file `<!-- Name: Wenhao Fang, Student ID: n01555914 -->`.(The part underlined in yellow)

- The document contains no processing instruction.

---

5. Add inline DTD for this document.

- 1. Before adding the DTD, the architecture of this document has been reorganized. In particular, attributes will be added to the elements of name and indicator.
     ![attr01](./pic/5.attr01.png)
     ![attr02](./pic/5.attr02.png)

- 2. Creates a sketch accordingly:
     ![sketch](./pic/5.sketch.png)

- 3. Adds DTD:
     ![DTD](./pic/5.DTD.png)

---

6. Verify that file is well-formed and valid.

- **Code**: ![code](./pic/6.code.png)

- **Result**: ![code](./pic/6.result.png)

7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Css codes: ![css](./pic/7.css.png)

- Display in browser: ![display](./pic/7.display_css.png)
