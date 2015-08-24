htmljs
======

The front Luandun blog of repo. http://www.html-js.com

Powered codes for reference only missing configuration file can not be run locally, based on express, rainbow, sequelize, jade, coffeescript, less, moment techniques and frameworks.

update: the site code is old, the proposed reference RabbitJS the realization of ideas, clearer, the same principle: https: //github.com/xinyu198736/Rabbit.js

Conventions mode:
==
* The entire system from the data to the final is logically divided into five levels: 1.models, 2.functions, 3.filters, 4.routes, 5.views
d
Each part of the function:
==
* Models, the database operations using sequelize abstraction, using their prescribed format defined data objects, totally do not care about the database issue.
* Functions, operating on sequelize after layer package, mainly a variety of data manipulation, which is encapsulated, or filters for different routes calls.
* Filters, some of the multiplex route of collection, such as the user to check, check the permissions, general module, in short, is a variety of abstraction.
* Top level routes, logical, responsible for scheduling request, a request through the filters, get to a common data, and then go their own routes, call the method of operating functions and access data models defined in the routes. And then the data is displayed on the views or directly back to the user.
* Views, in routes where call, use the data to render the page


Global method:
==
Several global methods use package can save a lot of duplicate code.

* __M Call the method to return a Model object that is a sequelize of model objects, you can directly manipulate the database. Eliminating the need to write the initial configuration code.
* __F Call the method to return a function object search from functions folder.
* __FC Call this method, you can generate some common methods of operation to a function: getById, getAll, add, update, count, delete
* __R Unrealized, call the method directly generate common route, save a lot of code amount of ordinary crud

Features:
==
* No need to write to configure routes, routes in accordance with the controllers in the folder and file structure generated automatically, so that one does not need handwriting configuration, the second is to facilitate logical separation and maintenance.
* Do not care about the database, all the data are used stuff sequelize to operate.
* Some global methods, automate redundant code, reduce duplication of effort.

Other:
==
* Libs generic library
* Uploads uploaded temporary file
* Assets static files, use less direct translation
* Run.js start
* Config.coffee configuration information
