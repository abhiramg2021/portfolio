# Title: Coursify

# Colors:

# Tags: next.js, twilio, flask, firebase

# Github:

# Deployment: http://run-coursify.herokuapp.com

# GIF: ![GIF](../../../public/GIFS/Coursify.gif)

# Description

Getting the classes you want at GT is hard. So, I built a website that allows GT
students to track course seating changes and notifies them using SMS.

#####

## Why not Coursicle?

Normally, you would be able to to use [Coursicle](https://www.coursicle.com) to
track open spots in courses. Coursicle notifies its users of an opening in the
class every 15 minutes. But, at a Tech school like GT, every CS student has a
scraper of some sort that notifies them instantly when a spot opens up. So the
only solution for me was to join them.

## The Structure

At first, Coursify was nothing more than a python script backed by a text file
running locally on my computer. Now, it has 3 layers: A frontend Next.js app, A
[Flask](https://flask.palletsprojects.com/en/2.1.x/) API, and a rate limited
python script that sends **SMS** using
[Twilio](https://www.twilio.com/messaging/sms). All of 3 layers are being hosted
on Heroku. To store the data, instead of a text file, I have upgraded to using
[Google's Firebase Firestore](https://cloud.google.com/firestore). This way, it
became a lot easier to track courses, but also more friendly to **scale** the
application to support a small group of users.

## Credits

One of my friends contributed just as much to this project: Yashas Ambati
