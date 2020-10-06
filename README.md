# Spring Angular App

Spring Angular App is a skeleton application or a starter application structure for Spring Boot and Angular integration. This application provides you the following included
  - Spring Boot 2.4.0-SNAPSHOT
  - Spring MVC Web starter
  - Angular 10
  - Bootstrap 4.0

# What is special about this starter project?

There are many starter projects available which are good. But in this project, I tried to keep it simple but useful. 
  - A test REST API is available
  -- HTTP GET method
  -- The return type is "application/json"
  -- Test.java is the model object which is returned as a result.
  -- This helps to concentrate on adding your APIs and add model object in their respective packages and get them working fine.
  - Angular project is integrated
  -- Routing enabled
  -- SCSS based
  -- Added HTTP Client module
  -- Added the call to the TEST REST API which we developed using Spring Boot.
  - Bootstrap in enabled
  -- Used dashboard layout from bootstrap examples.
  -- The navbar and sidenav are seperate components under layout package. So you can manage them seperately according to your need.
  -- The main content is displayed using <router-outlet>. So, you can only focus on adding actual pages.
  -- The home page is added under pages package. So you can generate new components accordingly and managethem accordingly.


### To be added:
  - Add icon font support
  - Add support to theming
  - Export documents as Markdown, HTML and PDF

### Installation
- Pre-requisites
-- Gradle v6.4 or later
-- Node v12.18.2 or later
-- npm v6.14.5 or later
-- Angular CLI v10.1.4

Clone the project "https://github.com/binkamgospelworks/spring-angular-app.git" or download using the download button.
Open in your favourite editor. (I used Visual Studio Code)
