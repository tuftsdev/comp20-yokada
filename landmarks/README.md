README.md for Tufts Comp 20 Assignment 2: Historic Landmarks
By: Yuta Okada
Date: March 15th, 2016


SPECIFICATIONS:
1. Includes index.html, style.css, README.md (this file), myIcon.png, friendIcon.png, and landmarkIcon.png

2. Uses JavaScript navigator.geolocation object to retrieve my location

3. Sends my location (login, latitude, and longitude information) to datastore via HTTP POST using the JavaScript XMLHttpRequest

4. Displays locations of people in the class (friendIcon.png used as the icon for all classmates),  historic landmarks within one mile of where I am (landmarkIcon.png used as the icon for all landmarks), and myself on the map (myIcon.png used as the icon)

5. Clicking on a classmate's marker displays the classmate's login, and mile(s) away from me in an information window

6. Clicking on a landmark's marker displays landmark's details in an information window

7. Clicking on my marker displays the name of the closest historic landmark from where I am including the miles away in an information window, and renders a polyline between my current location and that closest historic landmark

8. Only one information window is displayed in the map at any time

9. No errors and console.log() outputs exist in JavaScript console


COLLABORATORS:
Exchanged ideas with: Joe Kamibeppu, Anna Kasagawa


HOURS SPENT:
I have approximately spent 20 hours on this assignment.


REFERENCES:
Rendering Google Map: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/google_maps/geolocation_map.html

Google Map Polyline API: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple

JavaScript implementation of the Haversine Formula:
http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript

navigator.geolocation: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/google_maps/getmylocation.html

Styling in CSS (style.css) adapted from: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/google_maps/geolocation_map_style.css