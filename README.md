### Assignment: Day 2

# Blog App

To complete this block read the instruction carefully:

- [x] Create a new repo on Github
- [x] Switch to the specific branch (eg: day-1)
- [ ] Complete the task of the day in the branch
- [ ] Once complete push all the changes to the specific branch (day-1)
- [ ] Submit the link of the Github/branch as submission link
- [ ] Once completed create a pull request to master and merge it

## DAY 2

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

- [ ] Make Login Page Functional
- [ ] Make Signup Page Functional
- [ ] Home Page (Private - only for logged in user)
- [ ] Add Private Navigation
- [ ] Implement Hard Reload

#### Make Login Page Functional

- [x] Using fetch `POST` request implement login
- [ ] On login success redirect to home page
- [x] Handle error when the login fails

#### Make Signup Page Functional

- [x] Using fetch `POST` request implement signup
- [ ] On signup success redirect to home page
- [x] Handle error when the signup fails

#### Home Page (Private)

- [ ] Create a private home page
- [ ] It will contain 2 tabs `Your Feed` and `Global Feed`
- [ ] Both tab will display top 10 articles in the respective tab

#### Make sure to retain the logged in user after hard reload

- [ ] Make sure the logged in user persists after hard reload
- [ ] Verify the user using the `jwt` token saved in localStorage
- [ ] Show a loading indicator when user is being verified
- [ ] Only after user verification redirect to home page
