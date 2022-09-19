### Assignment: Day 1

# Blog App

To complete this block read the instruction carefully:

- [x] Create a new repo on Github
- [x] Switch to the specific branch (eg: day-1)
- [x] Complete the task of the day in the branch
- [ ] Once complete push all the changes to the specific branch (day-1)
- [ ] Submit the link of the Github/branch as submission link
- [ ] Once completed create a pull request to master and merge it

## DAY 1

Use the blog API you have created while learning backend. If your API is not working properly you can use the endpoint given below.

Don't pollute the API by posting some test data (like testingggg etc). When you are adding article make sure to add article with proper title, description etc

### Basic Informations:

- BASE URL: `https://mighty-oasis-08080.herokuapp.com/api/`
- Demo for reference: [https://ac-blog-app.vercel.app/](https://ac-blog-app.vercel.app/) or [https://conduit-re-frame-demo.netlify.app/](https://conduit-re-frame-demo.netlify.app/)

**You can change the look of the website the way you want. Make sure to have all the functionality as mentioned**

### API Info:

For information regarding the API endpoints go through the link below. You will find everything you need. Look carefully

[API Endpoints Specs](https://gist.github.com/nnnkit/88db374b4ce62587a86bb32dd0b36ccb)

### Things To Complete Today

- [x] Setup React + React Router DOM
- [x] Home Page
- [x] Login Page
- [x] Signup Page
- [x] Home Page Navigation
- [x] Individual Article Page
- [x] Individual Tags Page

#### Boilerplate Setup (React + React Router DOM)

Setup create react app with the following requirements:

- [x] Install `react-router-dom`
- [x] Setup `BrowserRouter` in `App` component
- [x] Use loading indicator whenever you need to display data by fetching information

#### Home Page (Public)

- [x] Create Header and Hero section
- [x] List of 10 articles with title, description and read more button
- [x] Handle the error while fetching data
- [x] Posts will be visible under a tag named `Global Feed`
- [x] Each post will also display the author and the date of the article
- [x] Each post will also show a Heart for user to like the post. The heart will only be visible for logged in user. You can condition the heart in future baed on user is logged in or not.
- [x] Add tag cloud (collection of all tags) on the right sidebar of the page
- [x] On the bottom display pagination (this is based on the total number of articles and number of article you are displaying on the page) You need to display 10 articles on each page.
- [x] Clicking on pagination buttons will fetch 10 new articles and display

#### Login Page

- [x] Email Field
- [x] Password Field
- [x] Login Button
- [x] Each field (email, and password) should contain client side form validation
  - [x] Email should contain `@`
  - [x] Password should be at-least 6 characters
  - [x] Password must contain a letter and a number
  - [x] No fields can be empty
- [x] Display respective error message while doing the client side form validation
- [x] It should also contain a link to `Signup Page` if the user doesn't have an account

#### Signup Page

- [x] Email Field
- [x] Password Field
- [x] Username Field
- [x] Signup Button
- [x] Each field (email, and password) should contain client side form validation
  - [x] Email should contain `@`
  - [x] Password should be at-least 6 characters
  - [x] Password must contain a letter and a number
  - [x] No fields can be empty
  - [x] Username should be at-least 6 characters long
- [x] Display respective error message while doing the client side form validation
- [x] It should also contain a link to `Login Page` if the user already have an account

#### Complete Home Page Navigation

- [x] The Header will contain logo and links to login and signup
- [x] Clicking on links will take you to the respective page

#### Individual Article Page

- [x] Clicking on the article's read more button will take you to an individual article page
- [x] Individual article page will display all the information about the article
- [x] It will also have an hero section that will contain Author info and Title

#### Individual Tags Page

- [x] When user click on any tag it will be added next to the `Global Feed`
- [x] It will only display the article containing the specific tag
- [x] Display the list of 10 articles

Your GitHub Submission URL here:-

Submit
