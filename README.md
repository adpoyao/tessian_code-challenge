# TESSIAN CODE CHALLENGE

## WIREFRAME
<img src='http://res.cloudinary.com/adpoyao/image/upload/c_scale,w_1000/v1519857152/Code%20Challenges/Tessian_wireframe.png' alt='app wireframe'>

## TECHNOLOGY STACK

### FRONT-END TECHNOLOGIES:
* JavaScript
* CSS & SASS
* HTML
* React/Redux

### API:
* GitHub API

### NOTES:
This is a single page app challenge that was planned and built in a day. Although configuration is heavy for a small app, I chose to use ReactJS with Redux because this is the position I am applying for. I made use of ES6 syntax/features, such as arrow functions, template literals & basic Promises. I didn't force a need to use spread operator, but am able to call it if needed.

Seeing that I have surpassed the recommended time, I drew the line up to this point thus the challenge is incomplete; however, it was a fun one and I wanted to keep building at it.

* Working MVPs: Logic filter for the list of Github issues are mostly done. Everything clicked on the query gets updated in the Redux state. Upon clicking on Search, the qualifying list of GitHub issues are stored under Redux Dev Tool: state > query > results -- it just needs to be mapped as JSX. 

* Working Extras: Nav Bar, Responsive Design. 

* Non-Working MVPs: Not all the filters are implemented in interest of time (i.e. Since). I alloted 2 skeleton components called "Search Query" and "Search Result", where the Search Query ideally would display which queries are active (pressed), as well as a list of all qualifying GitHub issues that would display under Search Result. 

* Future Improvements: I would incorporate Redux Form to manage the state of the selected query. I made a choice to not use it this time for the sake that it would take me possibly longer to configure the Redux Form. Returned result for all searches are also capped at 30 and needs code implementation to allow user to toggle to succeeding pages.  

## ATTRIBUTIONS
* Create-React-App by Facebook - 2018