### Assignment: Day 3

[(Discuss this block)](/forum/redirect/categories/BRaacq)

# Blog App

To complete this block read the instruction carefully:

- [x] Create a new repo on github
- [ ] Switch to the specific branch
- [ ] Do the following in that branch
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
- [ ] Make New Post Page Functional
- [ ] Complete Setting Page
- [ ] Make Setting Page Functional
- [ ] Implement Logout
- [ ] User Profile Page
- [ ] Other Users Profile

#### Complete Add New Post

- [ ] Add the following input fields `Title`, `Description` and `Markdown article body`
- [ ] Have a Add Article button
- [ ] Add tag input
- [ ] You can have multiple inputs. When you press comma the tag will be added
- [ ] Validate the error (none of the field should be empty)
- [ ] Display appropriate error message

#### Make New Post Page Functional

- [ ] Make adding new article functional
- [ ] Use post request to add the data
- [ ] If add article is successful redirect the user to the article page

#### Complete Setting Page

- [ ] Add input fields like URL of profile picture, username, bio, email, new password
- [ ] Add update setting button
- [ ] Validate email field

#### Make Setting Page Functional

- [ ] Pre-fill the use data component loads
- [ ] When update setting is clicked update the setting (use POST request with the updated data)
- [ ] If the updating is successful stay on the same page and update the information
- [ ] Test the updated value by hard refreshing the page

#### Implement Logout

- [ ] Implement logout button (you can add it in navigation or on the setting page)
- [ ] Make sure to clear the localStorage when you logout

#### User Profile Page

- [ ] Create a user info page
- [ ] It will have a hero section with user information and a way to update the setting
- [ ] List "My Articles" and "Favorited Articles" in two different tabs
- [ ] On both tabs list the first 10 articles
- [ ] Display the `Edit Setting` button in hero section

#### Other Users Profile

- [ ] When you click on the user avatar on the post it will take user to individual user profile
- [ ] It should go to `/profile/username`
- [ ] Display the follow button in hero section
