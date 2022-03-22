# Marco Tracker

View the finished website here - https://paulfitzpatrick85.github.io/CI-Portfolio-Project-2/

## Who is this site for?

The function of the Macro Tracker web app, is to allow a user to manually enter and keep track of they're daily macronutrient (protein, carbohydrate and fat) intake, and to also calculate the calories based on the macro's entered.
While some calorie tracking app use a database of popular foods to choose from and add, these app's often lack less popular foods items such as foreign brand protein powders or foods/supplements only available in healths shops and not in the typical supermarket.



## User stories

- As a user I want to be able to use the app for its intended purpose easily and without having to through any trail and error to figure it out.
- As a user I want to I  want input a number of grams for each macro and have the overall totals of macro, total calories and remaining calories of my target to be calculated for me without out multiple click or inputting of data.
- As a user I would like to see popular ways of breaking down of food intake in the form of ratios/percentages of how much of each macronutrient to consume.

# Features

 ## Main App Page.
On loading the app, the user is greeted with an prompt welcoming them to the page and they are asked to enter the number of calories they want to set as a target to consume each day.

When the user enters a number, an alert follows to say "Great! let us help keep you within (the number entered) calories!"
The number entered is then displayed in 'Calorie Target'.
If the user enters anything that is not a number in the prompt, an alert will follow that reads "Sorry! (text entered) isn't a number! Please refresh the page and try again!" The user has the choice to refresh the page or continue using the app, in which case 'Calorie Target' will diplay "Target Not Set!"
 
 ### Inputting macros
![Screenshot (109)](https://user-images.githubusercontent.com/55660566/153726688-30f4e445-617b-4d63-be76-348f7e191830.png)

## Navagation.

At the top of all three pages, users will find links to the home, resources and signup pages, along with an underline indicating which page the user is currently on. The example below showing the menu responive at 325px. 

![Screenshot (109)](https://user-images.githubusercontent.com/55660566/154048008-963b9ea7-cf94-414a-9eb0-db6ba69aa3c8.png)


## Theme.
The color scheme of the header, footer and body where chosen to work around and play off the main hero image of the home page, and maintain the positive feel of the home page image throughout the pages that follow it.

## Footer
At the bottom of each page, the footer has social media icons linking to each sites homepage (as this is a ficitous site with without actual social media profiles).


## 'What you can do' and 'What you can use' sections.
The main idea behind this website is that the ideas outlined are shortlisted from other users (as in other parents that have used the site or from the related social media sites) submitted recommendations.
- The first section being what the users/parents can do to by themselves ie, educate themselves in the topic of ASD and also the mindset to approach the topic.

The layout for large screens is made to appear as four blocks, with the text and images of each section diagonal from one another.
And as this would not work on smaller screens, the order of the sections were reversed to appear as text/image/text/image as the user scrolls down the screen. 
- The second section shows what items can be used for what purposes and also includes a link to an external website for a parents course in communication called "Hanen:more than words".
![Screenshot (121)](https://user-images.githubusercontent.com/55660566/154048599-f12443bd-884d-4c6e-925e-efca9724a3f2.png)
![Screenshot (123)](https://user-images.githubusercontent.com/55660566/154049079-9a6b70ed-3c5c-4039-ab84-a7f041bac4e7.png)



## Recommened section.
This section contains two embedded links. 
1. Ted Talk video from youtube.
2. A book from amazon.
With it being stated on the homepage that these recommendations change weekly and monthly, with the idea of obviously trying to help the user, but also ensure users return to the site regulary.
 ![Screenshot (119)](https://user-images.githubusercontent.com/55660566/154045271-3b5ebb33-1aa0-429d-9185-b407c5473254.png)

## Signup form

A page were users can signup for a newsletter, enter details that the site owner can use to better understand the users situation (childs age, how often they attend services), and also a text area to submit comments and tips etc for the site to make its list for the resources page.
The form requires that the user fill in their name, email, childs age, and also the they click the appropriate button for have often they attend a service and where they heard of this website.

## Testing section
- I tested and confirmed that the website displayed correctly accross multipe screen sizes from large monitors to laptop, tablet and small smartphones (as small as 325px), and also in different browsers including chrome, firefox and microsoft edge.

- I tested my html on the w3c vaildator and my css on jigsaw and found all code to be ok. 

- I confirmed that the signup form cannot be submitted without a name, correctly input email and at least one checkbox being ticked in the radio btton sections. 

- I tested the all links work correctly in the navagtion menu, the social media links, and the links to external pages on the resources page like amazon.com and hanen.org 

- I tested the sites accessibility through lighthouse, the image below showing the results.

![Screenshot (118)](https://user-images.githubusercontent.com/55660566/154043336-24e31cfd-9f54-4622-843a-fb0eecc24a54.png)

### User story testing
- The navigation menu is very minimalistic across all pages and also maintains its centre position across all screen sizes for ease of use and familiarity across devices.
- The information is presented in a easy to understand manner free of any jargon users may run into in more formal settings such as meetings with psychologists, speech therapist and so on. 
- The sign up form  does not have a requirement for the text area to be fill out for the form to allow submission, as not every user, in this case a parent of a newly dianogised child, would be in a position to help with any recommendation to other parents.
     
## Bugs found while creaing and testing
- I found that a large number of breakpoints had to be used to allow for correct reponsiveness across screen sizes to maintain the sites structural intregrity, and mainly to maintain the aesthetics regarding images matching the sizes of the text sections next to them on the resources page.
- When vaildating my html, an error occurred as a result of adding a 'muted' attribute to the iframe holding the youtube video.
Within the 'allow' attribute, I replaced autoplay with muted and the error no longer occurs, and the video loads and does not play until prompted and without audio until prompted otherwise.
  
## deployment

I deployed the website through github pages through the following steps:
- I saved, commited and push my work to github using the commands git add ., git commit -m "example comment", and git push respectively.
- From my project repository I then navigated to the settings tab to find the github pages section where in the source section I selected main branch from the drop down menu and selected save, a link was then created for the published site.

## credits
- The main image on the home page and the 'born to stand out' image on the resources page are taken from pexels.
- The collage image on the resources page was made using images from different sources: 
1. The shape sorting toy image, top right is taken from fruugo.ie.  
2. The peg board image, bottom left, is taken from amazon.com.
3. The woman and child image is from pexels.
4. The visual schedule is taken from printablee.com

-

## media



notes

bugs
function totalal-- could not access variables in another function declared with var so had to copy and paste into function again

##credits
https://www.tutorialspoint.com/googlecharts/googlecharts_pie_basic.htm for pie charts