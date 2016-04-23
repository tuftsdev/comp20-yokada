## README.md for Tufts Comp 20 Spring 2016 Assignment 4 Security ##
By: Yuta Okada <br>
Date: April 26th, 2016 <br>

**1. Introduction** <br>
The product *landmarks* is a web application that takes the user's login and current location, and render the user, other users of *landmarks* who have checked in, and historic landmarks that are within one mile of the user's current location onto Google Map. Additionally, the users can query for the list of all the check-ins by the entire set of users up to now, and the users can also query for the check-ins made by the user with specified login. Because the product *landmarks* was developed by a student software engineer with limited experience with web application, the software engineer was allowed (and in fact, forced) to ignore any security concerns whatsoever. Therefore, I am hired to inspect *landmarks* and solve security flaws in order to improve the application to be more secure.

**2. Methodology** <br>
I inspected the applications using curl. Specifically, I used the GET and POST command line interface of curl to test for whether data validation is done on the web server application upon POST request and whether cross-site scripting is possible, among other potential security vulnerabilities. I also setted up Burp Suite and Tamper Data (on Firefox), but curl sufficed for the purpose of inspecting this specific web application.

**3. Abstract of Findings** <br>
I found multiple security flaws related to how the input data from the application users are dealt with. The application currently does not validate the data input in anyway, and because of the invalid, and potentially malicious data included, the application may: 1. crash on the users, 2. exhaust storage in database, and 3. redirect user to unwanted sites (and other effects caused by cross-site scritping). Additionally, I am concerned that the application users' privacy is at risk due to the design of the application. Specifically, any user can effectively see every other user's history of check-ins; in other words, the users can effectively "stalk" other users -- you can imagine that this is an obvious privacy issue.


**4. Issues Found** <br>
**Issue One "Cross-site scripting vulnerability"** <br>






**Issue Two "Application crash caused by un-sanitaized input data in /sendLocation API"** <br>







**Issue Three "Database resource exhausted by spam input (possibly invalid) data"** <br>







**5. Conclusion** <br> ##ADD FUTURE SUGGESTIONS
In order to implement the suggestions made in the section *4. Issues Found*, we will need to deploy two software engineer for 3 days, two days for implementation and another day for testing. With the flat cost of $100 for consulting report, the overall cost would be $100 / report + ($20 x 7 hours x 3 days x 2 engineers) = $940. As for the future reference, we suggest to modify two API specifications. First, for GET/checkin.json API, the API should explicitly list the number of times a given user can try querying for seemingly similar login (similar to how one gets locked out of an online banking account after several failed login attempts). This is to strengthen the application from the privacy perspective -- in the current API, anyone can query for anyone's check-in history -- I am concerned that this may be a significant privacy flaw. Second, for the same reason but more importantly, the GET/ API and POST/sendLocation API should only be allowed to display the history of check-ins by the users (logins) who explicitly have given permissions to be displayed. For example, some users of *landmarks* may use the application to look for historic landmarks around her current location, but may not want to be displayed in other users Google Map, or worse, may not even want her check-in to be stored in the application server database. These privacy flaws are not the result of poor implementations of the application, but rather the design/specifications of the application itself (API design not considering the pirvacy of the users sufficiently).

Thank you very much for reading my report, and please send any further inquery to Yuta Okada at yuta.okada@tufts.edu.
