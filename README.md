# Pandemic Tracker
In March 2020, Covid-19 was declared a pandemic by the WHO. In Ontario, waves upon waves of restrictions were implemented to curb the spread of this virus. Life became unpredicatable and it became difficult for the public to keep track of what is open.

The Pandemic Tracker is an interactive map application built with React using d3.js that shows users restrictions and key covid statistics for a region they click on.

This application also has an admin route allowing owners to create, view, edit and delete health regions and restrictions.

## Tech Stack and Tools
| Front-End  | Back-End | Database | Testing | Deployment |
| ------------- | ------------- | ------ | ---------- | --------- |
| React | Rails  | SQlite | RSpec | **Heroku** for API server (coming soon)|
| material UI | Ruby | | | **Netlify** (coming soon) |
| d3.js | bcrypt | |  |
| CSS | | | | | |

## Demo
Interactive map implemented using d3.js
!["map"](https://github.com/xihai01/Pandemic-Tracker/blob/master/docs/interactive-map.gif?raw=true)

Admin Dashboard for performing CRUD operations on restrictions data
!["Admin dashboard"](https://github.com/xihai01/Pandemic-Tracker/blob/master/docs/admin.png?raw=true)

## Packages and Gems
```javascript
"dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@iconify/icons-ant-design": "^1.1.1",
    "@iconify/react": "^3.1.3",
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@mui/icons-material": "^5.3.0",
    "@mui/material": "^5.3.0",
    "@mui/styles": "^5.3.0",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.24.0",
    "classnames": "^2.2.6",
    "d3": "^7.3.0",
    "date-fns": "^2.28.0",
    "framer-motion": "^6.2.1",
    "material-table": "^1.69.3",
    "node-sass": "^7.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "react-scroll": "^1.8.4",
    "react-spring": "^9.4.2",
    "react-tsparticles": "^1.39.1",
    "web-vitals": "^2.1.3"
  },
  ```
  ```ruby
  gem 'bcrypt', '~> 3.1.7'
  gem 'rubocop', require: false
  gem 'faker' # awesome package for generating random seed data
  gem 'rack-cors' # since server and client runs on different ports
  gem 'rspec-rails', '~> 3.5'
  ```

## Local Machine Setup Instructions
Fork and git clone this repo
### Rails Setup
1. bundle install
2. setup database -> run rake db:migrate and run rake db:seed
3. rails server -p 3001 (note: if using a different port #, make sure to change proxy url in client's package.json to match)

### React setup
1. npm install
2. npm start to open server

### Project built using:
- ruby 2.3.5
- rails 4.2.6
- node 14.17.6
