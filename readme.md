# My Radio

A single page application that plays music uploaded from your computer.

## Built on Rails w/ Backbone

This application is built with rails on postgresql with a backbone.js front end.

This app is set up to load backbone inside rails, as well as handlebars
templates, both using the respective rails gems.

##Installation Instructions

To run on local:

1. Clone this repo
2. Run postgresql on your machine
3. Inside the repo from the command line: rake db:drop, rake db:create, rake db:migrate, rake db:seed
4. Start the rails server with rails s
5. Go to localhost:3000 in your browser
