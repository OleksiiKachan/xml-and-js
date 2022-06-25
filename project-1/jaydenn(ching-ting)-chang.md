Jaydenn (Ching-Ting) Chang
 N01511476
### My Contributions

1. Discuss in which way do we transform JSON into XML

- To put each stock under stocks tag.
- To put each account under accounts tag.

2. Transformed first half of JSON elements into XML

- Adding and changing tags according to what we have discussed.

3. Created DTD

- Changed exchange name tag from "name" to "exchange" to avoid name conflict.
- If there are multiple similar items under a category, ie. multiple \<stock> under \<stocks>, I set a requirement of having at least one item with regex "+" sign.
- Changed "&" into "\&#38;" to allow correct parsing.

4. Created html and css files

- In Javascript, I went through each user item and printed out the information as html in the created \<main> tag. For user information I used \<list> format. For stocks and accounts the user owns, I used \<table> to display the content.
- I tested if Node exist before grabbing the value from the node. Howeverm it seems like there's no missing data...
- Created CSS for spacing and table bordering.
