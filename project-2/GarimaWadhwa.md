# Name: Garima Wadhwa
# Student ID: N01530634

# Contribution
- I have worked on store.js , implemented functions to fetches store locations from the Kroger API.
- Used clientId and clientSecret constants for the Kroger API to create token.
- In getStores() function used locationList API with filter limit = 99  to fetch store locations by sending a GET request ,by taking Token as input parameter and returning an array of store location objects which gets stored in _stores variable.
- Implemented getToken() function that fetches an access token with the help of API by sending a POST request.But due to some course policy not able to get token from server side.So for now we have generated Token from postman using the clientId and clientSecret constants and hardcoded it.
- Implemented renderStores() function that takes a filterTerm as input parameter to filter the _stores array, based on which it will create HTML elements for each store location and appends them to div element with id of "stores" on the webpage. It also sets an onclick event listener to call the getStoreProducts() function with location id as argument.
- The getStoreProducts() function takes locationId as argument and will assign the URL for the "products.html" page with parameter location ID. When this function will be called it will navigate to the page for a specific store to view its products.
- To implement the filter method, onSubmit() function is triggered when a form is submitted, and with the help of 
event.preventDefault() it will prevent the default behavior of the form submission.It will pass the filtermterm to renderStores function.
