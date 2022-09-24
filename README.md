### Assignment: Day 3

[(Discuss this block)](/forum/redirect/categories/BRaacq)

# Blog App

To complete this block read the instruction carefully:

- [x] Create a new repo on github
- [x] Switch to the specific branch
- [x] Do the following in that branch
- [ ] Once complete push all the content to the specific branch
- [ ] Submit the link of the github/branch as submission link
- [ ] Once completed create a pull request to master and merge it

## DAY 3

Use the blog API you have created while learning backend. If your API is not working properly you can use the endpoint given below.

Don't pollute the API by posting some test data (like testingggg etc).

### Basic Informations:

- BASE URL: [https://mighty-oasis-08080.herokuapp.com/api/](https://mighty-oasis-08080.herokuapp.com/api/)
- Demo for reference: [https://ac-blog-app.vercel.app/](https://ac-blog-app.vercel.app/)

**You can change the look of the website the way you want. Make sure to have all the functionality as mentioned**

### API Info:

For information regarding the API endpoints go through the link below. You will find everything you need. Look carefully

[API Endpoints spec](https://gist.github.com/nnnkit/88db374b4ce62587a86bb32dd0b36ccb)

### Things To Complete Today

- [x] Complete Add New Post
- [x] Make New Post Page Functional
- [x] Complete Setting Page
- [x] Make Setting Page Functional
- [x] Implement Logout
- [x] User Profile Page
- [x] Other Users Profile

#### Complete Add New Post

- [x] Add the following input fields `Title`, `Description` and `Markdown article body`
- [x] Have a Add Article button
- [x] Add tag input
- [x] You can have multiple inputs. When you press comma the tag will be added
- [x] Validate the error (none of the field should be empty)
- [x] Display appropriate error message

#### Make New Post Page Functional

- [x] Make adding new article functional
- [x] Use post request to add the data
- [x] If add article is successful redirect the user to the article page

#### Complete Setting Page

- [x] Add input fields like URL of profile picture, username, bio, email, new password
- [x] Add update setting button
- [x] Validate email field

#### Make Setting Page Functional

- [x] Pre-fill the use data component loads
- [x] When update setting is clicked update the setting (use POST request with the updated data)
- [x] If the updating is successful stay on the same page and update the information
- [x] Test the updated value by hard refreshing the page

#### Implement Logout

- [x] Implement logout button (you can add it in navigation or on the setting page)
- [x] Make sure to clear the localStorage when you logout

#### User Profile Page

- [x] Create a user info page
- [x] It will have a hero section with user information and a way to update the setting
- [x] List "My Articles" and "Favorited Articles" in two different tabs
- [x] On both tabs list the first 10 articles
- [x] Display the `Edit Setting` button in hero section

#### Other Users Profile

- [x] When you click on the user avatar on the post it will take user to individual user profile
- [x] It should go to `/profile/username`
- [x] Display the follow button in hero section
