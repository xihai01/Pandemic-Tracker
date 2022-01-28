# Pandemic Tracker
In March 2020, Covid-19 was declared a pandemic by the WHO. In Ontario, waves upon waves of restrictions were implemented to curb the spread of this virus. Life became unpredicatable and it became difficult for the public to keep track of what is open.

The Pandemic Tracker is an interactive map application built with React using d3.js that shows users restrictions and key covid statistics for a region they click on.

This application also has an admin route allowing owners to create, view, edit and delete health regions and restrictions.

## Tech Stack and Tools
| Front-End  | Back-End | Database | Testing | Deployment |
| ------------- | ------------- | ------ | ---------- | --------- |
| React | Rails  | SQlite | RSpec | **Heroku** for API server (coming soon)|
| material UI | Ruby | | | **Netifly** (coming soon) |
| d3.js | bcrypt | |  |
| CSS | | | | | |

## Demo
Interactive map implemented using d3.js

Admin Dashboard for performing CRUD operations on restrictions data

## make sure your system is running:
- ruby 2.3.5
- rails 4.2.6
- node 14.17.6

## first time setup
### rails setup (vagrant)
1. git clone to a convient place
2. bundle install
3. setup database -> run rake db:migrate and run rake db:seed
4. rails server -p [port#] -b 0.0.0.0

### react setup
1. npm install
2. npm start to open server
