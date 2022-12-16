# Project 2

- Read API documentation to understand how to use the API
    - API used: `https://docs.carboninterface.com/#/`
    - Learned how to use Postman
    - Used Postman to understand how to use the API to fetch JSON data
     
- API used to fetch the data
    - Converted the mentioned CURL commands into usable fetch commands to use in JS
    - Used AJAX and promises to fetch the JSON response from the API endpoints.
    - Fetched all the vehicle makes using API endpoint `GET https://www.carboninterface.com/api/v1/vehicle_makes`
    - Fetched all the vehicle models of each make using API endpoint `GET https://www.carboninterface.com/api/v1/vehicle_make/${vehicle_make_id}/vehicle_models`
    - Fetched the carbon emissions for the trip that a user does by specifying the distance unit and the distance value and using the ID returned by the vehicle model in the previous step to get the vehicle emmission estimate data using the `https://www.carboninterface.com/api/v1/estimates` endpoint.
    - Implemented the fetching in the way taught in class where we fetch all the data once and store it in one `_data` variable and use that throughout the application without the need to fetch again.
    - Combined all responses into a single easy-to-use JSON.
    