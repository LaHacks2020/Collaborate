# Vmeet
A new way to collaborate with your colleagues and organizing your meetings.

## Usage
An *ML based web platform* which not only enables users to organize all their virtual meetings within an organization, company or a startup but more importantly helps them to get to know their fellow participants before they virtually start a meeting with them. This will help prevent strange culture within the the company where employees are still getting to know each other in first couple of minutes and then starting the meeting. 
Considering the current situation where almost all the meetings have turned virtual, it is quite essential to have a one stop destination which enables effective collaboration and organize all you meetings together . Especially in in huge organizations every single meeting will atleast consist of 10-200 participants and a lot of their emplooyees who join the meeting do not even know about 80% of other individuals joing those big meetings. So to improve this situation we created this platform, where: 

• After logging it :The user would be able to see their own profile and edit it. See their meetings dialog, their connections within the organization, tasks completed.

• They can see upcoming meeting on their portal which includes both mandatory meetings(ex: Daily Stand up meeting) + optional AI recommended virtual meetings which empowers users at different locations to collaboratively share knowledge, have fun and feel relieved from the stress caused by current outbreak (ex: abstract card meeting). 

• Recommended Events: If the user clicks on the photo of the upcoming events, then it will take user to a place where they can see more deatils about upcoming event and that page will also have recomened events for them.

• Join the Meeting: There is begin button for meeting is only enables if metting is starting in 30 mins for you to join the call. If meeting is in 2 days then the begin button is disable until you approach withi 30 min time frame. 

• See who is Joining:This is crucial because if employees et to know fellow employees' who are joing the meeting their rolr, skills, interests and also can connect with them or ask for them just get to know them because the upcoming meeting. 

• User can also see where the other employees are meeting joining from. for Example one employee could be joing from California, other from New York, someone from Singapore, India or Africa.

• Within user portal, user has an option to host new meeting in zoom or hangouts and send invites as well. If the user chooses to host the meeting then it will take user to a form where they fill out the data, time and purpose of the meeting and choose the people within the organization whom the user wants to join their meeting. The new meeting created will immediately be added into upcoming meetings and these attendees will be notified with the link in mail and also they'll be reminded through a text message which is sent few minutes before the scheduled meeting time.  

## Challenges ##

1) Styling the web pages was tedious. We had to create 5 fully responsive polished pages from scratch, which itlsef took around 30 hours of continous effort to craft them and to create an end-to-end working model. At one point, we were scared if we could even get to our goal before the deadline.

2) Training an ML model to give meetup recommendations based on user profile and meetup api keywords

3) Backend integration of 7 different api's( Twilio, google, zoom, calendly, meetup)

4) Integrating front end with back end
