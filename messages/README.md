## README.md for Tufts Comp 20 Lab 6: Messages
By: Yuta Okada
Date: 03/10/2016


SPECIFICATIONS:

1. Includes index.html, style.css, lab.js, data.json, and README.md 
(this file).

2. Styling of the page is done using CSS in the file style.css.

3. When the page is served via Python's Simple HTTP server, the page may 
be browsed by going to http://localhost:8000. The page displays the JSON 
data in the "messages" section of the HTML.

4. No error is displayed in the JavaScript console when the page is 
browsed by going to http://localhost:8000.


COLLABORATER:
Joe Kamibeppu


HOURS SPENT:
I have approximately spent 3 hours completing this assignment.


*** SHORT ANSWER ***
PART TWO:
No, it does not work. In fact, it should not work because the file 
data.json is requested by the client (lab.js referred by index.html) to 
be served through server, but when the index.html is opened via
double-clicking on the file, it does not go through the server.

PART THREE:
No, it does not work. In fact, it should not because of the same origin 
policy. Since https://messagehub.herokuapp.com/messages.json is not 
served from the same origin as the index.html is served from 
(http://localhost:8000), the same origin policy prevents the 
index.html from accessing the messages.json, which has the different 
origin.


ANSWER TO THE QUESTION "is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?":

No, it is not possible because of the same origin policy. The same origin
policy means that a page can only access data in other pages that have 
the same origin. The implication is that this policy prevents malicious 
activities in which one page tries to access confidential/important
data on another web page. For example, scripts from the Facebook 
domain that a browser (client) get cannot access the data on Bank of 
America domain, but it can only access the data served by the 
Facebook domain. (this example was given by Ming in class).
(Referenced: https://en.wikipedia.org/wiki/Same-origin_policy)