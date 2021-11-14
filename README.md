# Trashare

<br>Trash sharing platform<br/>
<br>Author: Fengrui Gan, Felix Chung<br/>

Website for project 2 in [CS5610 Web Development](https://johnguerra.co/classes/webDevelopment_fall_2021/).

## Project Objective

<br>The objective is to build platform for people to share their unwanted items with others. <br/>
The should should show no error in the [W3C Compliant](https://validator.w3.org/#validate_by_input)
<br>It should implement at least 1 form.<br/>

## Proposal Goals

1. User registration/login.
2. All visitors can read posts
3. Each post will contain at least 1 photo and an approximate location that users enter
4. Only registered users can create posts.
5. Users should be able to modify (stretch goal) and delete their own post

[Link to landing page](https://trashare.herokuapp.com/)

![Home page of website](/public/images/homepage.png)
![Demo of post page](/public/images/postdemo.png)


## Tech requirements

- The home page should be able to open on most browser
  -Chrome, Firefox, Safari, Internet Explore etc...

## How to Use?
- Navigate through navbar or click "Click to start browsing treasures" to direct to list of posts.
- All users can read and browse posts
- Register a new account or sign in to create posts
- Click the post title to view posts
- Click create post button after sign in to create post
- Click choose file to upload file
- Enter address and choose the address automatically filled by Goole API
- All field must be filled in order to create post, and click create post button to create post

## Instruction to build

- When testing file, create your own .env file that inclode: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, DB_URL.
- Create your own Amazon Web Serverce account for image upload
- Create your own google account for Google Map and Google Place API.
- Insert follow instruction on AWS and google to connect to AWS S3 and google map API.
- Deploy these files on any server

## [Video Demostration](https://youtu.be/ac_AmGwVtqY)
## [Slides](https://docs.google.com/presentation/d/1Vfwai_Shm6E11dGGUrb8bUUEbyVstN1IpY3wyM0T9JM/edit?usp=sharing)


## Code Review Comments by Kennedy C. Ezumah for Fengrui Gan
- Great work! I particularly enjoyed how you were able to build a full-stack project that not only met the technical requirements, but also presented a useful solution to a real-world problem.
- I found the overall design and layout of your platform simple and easy to use, which I believe would make it attractive to users. From a technical standpoint, I can see how choosing a clean UI would be beneficial in enabling you to invest more of your time in building out the core functionality of your application.
- Your code is clean, easy to follow, and the division of responsibilities is clearly documented.
- Some ideas for future features to implement: it would be nice to have an automated "Contact" process, in which users could simply email owners by the click of a button!
