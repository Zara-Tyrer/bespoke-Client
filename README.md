# Bespoke Nails

#### Developers
Jade Tyrer & Cassandra Zara

The Bespoke Nails client was built with React, utilizing the built-in React-Dom, React-Router-Dom and React Scripts. It was developed to fulfil project criteria for a MERN stack application for Coder Academy, 2020. 

## Deployment

Deployed on Netlify:
https://bespoke-nails.netlify.app/

Using Deployed Server:
https://bespoke-nails.herokuapp.com/


## Part A: Planning and Purpose

Current Iteration, as of July 2020:

The purpose of the application is to extend the online platform and functionality for "Bespoke Nails" to digitally manage orders and queries more easily during the work from home era. The application allows orders to be made online for press-on nails either for a pre-made design or by creating a custom order. The application allows the admin user to view and manage all orders and all queries in their dashboard, and manage the products in the shop. The customer is able to see examples of work in the 'Lookbook', view information in the 'About' page, order products from the shop or create a custom order and contact the admin via a query form. The customer receives an order or query confirmation for future reference. The data is persisted in a cloud Mongo database (Atlas), and AWS S3 storage bucket for image upload (see Bespoke-Server in Zara-Tyrer GitHub organization https://github.com/Zara-Tyrer) 

To see the full planning and purpose outline, including plans for functionality in later releases, links to the Figma prototype and overall Tech Stack, please see:
https://github.com/Zara-Tyrer/MERNproject-partA


## Client Libraries (Dependencies)

**React Testing Library**
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event

**Axios**
HTTP client to manage request and response between the server API and client application. The two endpoints communicate through requests and responses with data in JSON format. 

**React-instagram-embed**
Structure to embed instagram posts from the product owner page into the 'Lookbook' in the application. 

**Styled-components**
Used for consistent styling and theme across the application and to separate code for clarity in components. 


## Testing (DevDependencies)

Cypress was utilized for end-to-end integration testing. Tests were written and run for the main resources: Product*, Order*, Query and Admin User authentication. Please see the Cypress folder/videos to examine the tests. 

![Summary of Cypress tests](/CypressTest.png)

*It should be noted that there were difficulties in fully assessing the file upload functionality in the Cypress tests due to integration with AWS S3 storage. The test result demonstrates that a fileLink is created and saved into the resource but there were difficulties rendering the image from the test. This functionality was assessed manually and functions effectively both in the development and production environments. 

## WorkFlow

A forking feature branch workflow was utilized by the developers throughout the project with daily communication to discuss allocation of tasks. As there was a very high level of verbal communication over video conference about which features were being worked on, consultation and demonstration of new code before merging into the central repository and substantial pair programming, tasks have not always been tagged by developer name. The developers consider the consistent and daily communication in allocating and collaborating on features to have been an effective process throughout the project. 

The user stories were transferred to a Trello Kanban board, and their progress was tracked by tags that further broke down the task by time and difficulty. In general, tasks were first built into the server to develop CRUD functionality, Mocha tests written, Manual testing using VS Code client (client.http) and recorded in a spreadsheet (see docs). The task was then tagged with 'Done in Server'. The task was then moved into from Current Sprint (initial listing of tasks, tagged with Admin or Customer and whether authentication was required to use the route) to the 'To do' column. Once in the To-do column, a developer would then build the functionality into the client and once this was completed and tested manually by completing the action and checking the result in the deployed cloud Mongo database, the task was tagged 'Done in Client'. The task would then be moved into the 'In progress - needs styling' column. The developer would then apply styling and once satisfied, the task would be moved into the 'Done & Styled' Column. Cypress testing was used to assess the effectiveness of integration between the client, server, cloud database and the S3 bucket that was incorporated for file upload (see tasks tagged 'Beyond MVP'). The developers would regularly undertake review to consult and collaborate on choices about further functionality and styling on tasks in the 'Done & Styled' column. 

![Example of workflow using trello/kanban board](/trello.png)

Trello board: https://trello.com/b/iQyZYJnh/mern-project-part-a

