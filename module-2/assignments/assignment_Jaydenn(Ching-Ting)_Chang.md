# Assignment 1

1. 

Error 1

![Error Message](../assets/q1-line11-error.jpg)

It is a "not well-formed" error which the problem lies in the xml code itself on Line 11. We can fix it by removing the space and replace with underscore (_).

![Before](../assets/q1-line11-before.jpg)

![After Fix](../assets/q1-line11-before.jpg)

Error 2

![Error Message](../assets/q1-line31-error.jpg)

The second error is mismatched tag. The capitalization on originalName tag don't match. We can fix it by matching the tag name.

![Before](../assets/q1-line31-before.jpg)

![After Fix](../assets/q1-line31-after.jpg)


Error 3

![Error Message](../assets/q1-line51-error.jpg)

The third error is also a mismatched tag. The tag names don't match. We can fix it by matching the tag name.

![Before](../assets/q1-line51-before.jpg)

![After Fix](../assets/q1-line51-after.jpg)

2. 

CDATA in the document is used to add text description to the items o the menu. And also the text summary of the menu. It is marked as CDATA so it will be interpreted as characters and not as markup.

3. 

![My Info](../assets/q3.jpg)

4. 

![Prolog](../assets/q4-prolog.jpg)

![Document Body](../assets/q4-document-body.jpg)

![Epilog](../assets/q4-epilog.jpg)

There are no processing instruction. In the screenshot there are only xml declaration and document type declaration.


5. 

Added DTD directly to the xml file.

![Inline DTD](../assets/q5.jpg)

6. 

I validated the xml file with DTD. 

![Select File](../assets/q6-validate.jpg)

And the test passed.

![Validation Result](../assets/q6-validate-result.jpg)


7. 

First, add the css file link to xml.

![css Processing Instruction](../assets/q7-css-processing-instruction.jpg)

Then, I changed the font size of originalName to large with font-size. Changed the display for category to block so it's content will be on a new line. And also, I added some coloring to the categories, display menuItem and description on new lines, and changed the font-weight of originalName so it stands out a little bit more.

![css code](../assets/q7-css-code.jpg)

![css result](../assets/q7-css-result.jpg)