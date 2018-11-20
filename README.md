# Flight Map API

API example for [flight-map](https://github.com/dancespiele/flight-map)

## Requirements

* node > 8
* typescript 3

## How use it

Execute the next commands:

* `git clone git@github.com:dancespiele/flight-map-api.git`
* `cd flight-map-api`
* `npm install`
* Create a .env file in the root of flight-map directory

```
APP_ID=[your api id from flightstats]
APP_KEY=[your api key from flightstats]
```

* `npm start`

## Test

* create a .env.test in the test directory

```
APP_ID=[your api id from flightstats]
APP_KEY=[your api key from flightstats]
```
* execute `npm test` in the root of flight-map-api directory