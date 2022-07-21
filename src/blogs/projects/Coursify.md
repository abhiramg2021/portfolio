# Project: Coursify

# Colors: #E0B53E

# Tags: next.js, twilio, flask, firebase

# Github:

# Deployment: http://run-coursify.herokuapp.com

# GIF: 

# Description

Getting the classes you want at GT is hard. So, I built a website that allows GT students to track course seating changes and notifies them using SMS.

#####

## Why not Coursicle?

Normally, you would be able to to use Coursicle to track open spots in courses. Coursicle notifies its users of an opening in the class every 15 minutes. But, the issue at a Tech school like GT is that everyone has a scraper of some sort that notifies them instantly when a spot opens up. So the only solution for me was to build my own scraper.

## The Structure

At first, Coursify was nothing more than a python script backed by a text file running locally on my computer.
Now, Coursify has 3 layers: A frontend Next.js app, A Flask API, and a rate limited python script that sends SMS using Twilio. All of these 3 layers are being hosted on Heroku. To store the data, instead of a text file, I have upgraded to using a Firebase Firestore. This way, it became a lot easier to track courses, but also more friendly to scale the application to support a small group of users.

## Credits
One of my friends contributed just as much to this project: Yashas Ambati

