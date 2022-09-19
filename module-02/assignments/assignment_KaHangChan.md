# Assignment 1

1. There are some errors shown as below, and fixed in the xml document:
    - For the `<effective Date>` in line 28, 'Date' should follow the 'effective'. e.g. `<effectiveDate>`, `<effective_date>`, etc.<br>
    After fixing:<br>
    ![effectiveDate](./img/effectiveDate.png)

    - In line 48, the closing tag should be the same as the opening tag. Therefore, `</originalname>` should be changed to `</originalName>`<br>
    After fixing:<br>
    ![originalName](./img/originalName.png)

    - In line 68, the name of the opening tag `<name>` is not match with the name of the closing tag `</originalName>` . The opening tag should be changed to `<originalName>` <br>
    After fixing:<br>
    ![originalName2](./img/originalName2.png)

2. The CDATA block in this document will only interpret the content as character data. The markup or special symbol will be treat as character data in the CDATA block.

3. Add comment line to the end of file which contains you name and student id.<br>
![Comment](./img/comment.png)

4.  Prolog (line 1-17):<br>
    ![Prolod](./img/Prolog.png)
    
    Document Body (line 19-99):<br>
    ![DocumentBody](./img/DocumentBody1.png) 
    ![DocumentBody](./img/DocumentBody2.png)

    Epilog (line 100-101):<br> 
    ![Epilog](./img/Epilog.png)<br>
There is a processing instruction in the prolog:<br>
![processingInstructor](./img/processingInstructor.png)

5. Add inline DTD for this document.<br>
![DTD](./img/DTD.png)

6. Verify that file is well-formed and valid.<br>
![validation](./img/validation.png)

7. Create style.css file and link it to the file. Add the following styles to the .css:<br>
style.css:<br>
![css](./img/css.png)<br>
xml (line 2):<br>
![css2](./img/css2.png)