# trashare

Trash sharing platform
Author: Fengrui Gan, Felix Chung

Website for project 2 in [CS5610 Web Development](https://johnguerra.co/classes/webDevelopment_fall_2021/).

## Project Objective

The objective is to build platform for people to share their unwanted items with others.
The should should show no error in the [W3C Compliant](https://validator.w3.org/#validate_by_input)
It should implement at least 1 form.

Proposal Goals

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
- All field must be filled inorder to create post, and click create post button to create post

##Instruction to build
- When testing file, create your own .env file that inclode: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, DB_URL.
- Create your own Amazon Web Serverce for image upload
- Create your own google account for Goole Map and Goole Place API.
- Insert follow instruction on AWS and google to connect to AWS database and google map API.
- Deploy these files on any server

## [Video Demostration](####LINK####)
