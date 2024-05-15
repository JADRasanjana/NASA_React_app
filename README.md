

# STUDENT DETAILS
 - IT21812262
 - Rasanjana J A D
 - Y3 S1 WE 01.01

# Explore NASA React App

The user is presented with data that has been retrieved from the public APIs provided by NASA through the use of this React application. Specifically, "Picture of the day" and "Mars Rover Photos" are the names of the two distinct application programming interfaces (APIs).

Following the completion of the registration process, users will be able to access the information of the NASA API by logging in with their email address and password. The following is a more in-depth description of the application programming interfaces (APIs). This project has both a backend and a frontend in addition to its elements. For the purpose of implementing the registration, login, and authentication logic that is based on JWT, the backend is utilized.



## Application URL

[explorenasabygavithra.netlify.app](https://nasa-explorer-jad-rasanjana.netlify.app/)


## API Reference

#### PICTURE OF THE DAY

```http
  GET https://api.nasa.gov/planetary/apod
```

| Parameter | Type     | Default                | Description |
| :-------- | :------- | :------------------------- | :-----|
| `date` | `YYYY-MM-DD` |  `today` | `The date of the APOD image to retrieve`|
| `start_date` | `YYYY-MM-DD` |  `none` | `The start of a date range, when requesting date for a range of dates. Cannot be used with date.`|
| `end_date` | `YYYY-MM-DD` |  `today` | `The end of the date range, when used with start_date.`|
| `count` | `int` |  `none` | `If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.`|
| `thumbs` | `bool` |  `False` | `Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.`|
| `api_key` | `string` |  `DEMO_KEY` | `api.nasa.gov key for expanded usage`|

### Mars Rover Photos

#### Querying by Martian sol

```http
  GET https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
```

| Parameter | Type     | Default                       | Description |
| :-------- | :------- | :-------------------------------- | :-------|
| `sol`      | `int` | `none` | `sol (ranges from 0 to max found in endpoint)` |
| `camera`      | `string` | `all` | `see table above for abbreviations` |
| `page`      | `int` | `1` | `25 items per page returned` |
| `api_key`      | `string` | `DEMO_KEY` | `sol api.nasa.gov key for expanded usage` |



#### Querying by Earth date

```http
  https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
```

| Parameter | Type     | Default                       | Description |
| :-------- | :------- | :-------------------------------- | :-------|
| `earth_date`      | `YYYY-MM-DD` | `none` | `corresponding date on earth for the given sol` |
| `camera`      | `string` | `all` | `see table above for abbreviations` |
| `page`      | `int` | `1` | `25 items per page returned` |
| `api_key`      | `string` | `DEMO_KEY` | `sol api.nasa.gov key for expanded usage` |

## Deployment

If the user wants, they can run the backend and frontend seperately in local machine using below commands 

#### Backend

```bash
  npm run server
```

#### Frontend

```bash
  npm start
```

#### Base URL

If the project needs to run in the local machine, the base URL for ti use in the browser is,

```bash
  http://localhost:3000
```
## Running Tests

To run tests, run the following commands in the frontend folder terminal.

```bash
  npm run test
```


## Appendix

- This project includes both a backend and a frontend in addition to its other components. For the purpose of implementing the registration, login, and authentication logic that is based on JWT, the backend is utilized. 

- In the event that the user desires to manually execute the frontend and the backend applications independently. Additionally, the Jest and React testing library is utilized for the testing of React. All of the properties in the frontend are examined during the testing that is carried out. 



## Acknowledgements

 - [NASA PUBLIC API](https://api.nasa.gov/)


