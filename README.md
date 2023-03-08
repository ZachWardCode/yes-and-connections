# Yes And Connections

Welcome to Yes And Connections, a platform for performers to post shows, stay up-to-date with what's happening at their local theaters, and make plans with their castmates. 

Improv theaters have large communities and this site helps everyone in those communities to stay connected.

Visit the deployed application at: https://yes-and-connections.herokuapp.com/

Create an account to see functionality only available to users

## Features
**User Authentication**
- Users (improv performers) can create an account which they can then use to return and sign in

**Main Page (Displays all registered theaters)**
- User can click theater to see more information about that performance space (such as shows and teams)

![Screen Shot 2023-03-08 at 4 10 18 PM](https://user-images.githubusercontent.com/114544378/223850972-b2295af2-aa79-431c-820c-84e5371fd2b7.png)

**Theater Details Pages**
- Users can see a list of upcoming shows at that particular theater
- A logged in user can add a new show to the calendar
- The user who created the show (or an admin) can delete the show
- Show titles are links to individual show pages with additional information for that performance

![Screen Shot 2023-03-08 at 4 10 46 PM](https://user-images.githubusercontent.com/114544378/223851842-0028efc1-9b37-4762-b15f-e87001b7789d.png)

**Show Details Pages**
- Displays info about that particular upcoming show
- Will be implementing comments section so logged in users can make plans concerning that show

![Screen Shot 2023-03-08 at 4 10 58 PM](https://user-images.githubusercontent.com/114544378/223851880-94dc3b6b-f20c-4523-8080-669446cbe43a.png)

## Features In Progress
- Calendar displaying shows
- Comment section on each show to allow for making plans for before or after the show
- Improv team pages with discussion boards only visible to those on that team
- Google Maps API on comment sections and discussion board to plan for places to go

## Installation
After cloning the repo, install the packages.
```
$ yarn install
```
Then initialize the database.
```
$ createdb yes-and-connections_development
$ cd server
$ yarn migrate:latest
$ yarn db:seed
$ cd ..
```
Run the application.
```
$ yarn run dev
```
Access the website in your web browser at `http://localhost:3000`

## Technologies
Front End: React, JavaScript, Sass/CSS, Foundation, HTML

Back End: Node.js, Express, Objection.js, Knex.js

Additional libraries: react-icons
