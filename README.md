# errorlab

REMINDERS
 - Start with mobile first
 - Plan on which composition pattern will you use for each Component
 
IDEAS
 -
 
TECHNOLOGIES USED
- TypeScript
- React
- Bootstrap
- Express
- PostgreSQL / Sequelize
- Passport / JWT
- Jest / React Testing Library/ supertest
- Socket.io
- D3
- Vercel / Render
 
- RESOURCES
 https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
 https://sequelize.org/
 
 
### SCHEMAS ###

 - User
  *-* Username
  *-* Email
  *-* Password
  *-* Avatar
  *-* AssociatedProjects
  *-* SubmittedTickets
  
 - Project
  *-* Details info (all in its property > title, status, description progress, priority, start, deadline )
  *-* Members(array of objects with the User id and its status as props? (dev or manager?))
  *-* Tickets (array)

 - Ticket
  *_* Details(all in its property > title, description, status, progress, priority, type, entered, deadline )
  *-* Project
  *-* Submitter
  *-* Comments

<!-- !CORE FUNCTIONALITY -->
 
### AUTH ###
 
   <*DEMO*>
 
    - DEMO USER does not require signin-up
    - DEMO USER can acquire any ROLE and get a small set of its privileges
    - DEMO USER cannot save any changes he created on his session(do not POST, UPDATE or DELETE on database)
 
   <!*USER*>
 
    <!-- Creation -->
 
    - When sign-up with email and password
 
    <!-- Constraints -->
 
    - USER must log-in to see anything except the log-in/sign-up page (all other routes are protected)
    - USER must have his friend request accepted to become friends with any other USER
 
    <!-- Core abilities -->
 
    - Can recover their password
    - Can see any friend profile
    - Can send friend request to any USER
    - Can accept friend request
    - Can send friend request
    - Can chat with any other user in their friends list
    - Can update his profile
    - Can delete his profile
 
    - Can create PROJECT
    - Can see a list of his TICKETs across PROJECTS
    - Can see a list of his PROJECTs
    - Can view a TICKET graph on the Dashboard from all his tickets across PROJECTS
 
    - Can login-in from their Google and Facebook account and add his data from there to his profile
   
   
  <!-- **PROJECT SCOPE** -->
   <!*DEVELOPER ROLE* >
 
    <!-- Creation -->
 
    - When USER gets assigned to a PROJECT by a DEVELOPER, PROJECT MANAGER or an ADMIN
    - When USER is given the role manually by an ADMIN
 
    <!-- Core abilities -->
 
      - Anything above +
        - Assign USER to the PROJECT and give role DEVELOPER
        - Get assigned a TICKET
        - Create TICKET
        - Update TICKET details
        - View TICKETs from a PROJECT
        - Comment TICKETs from a PROJECT
       
  <!-- **PROJECT SCOPE** -->
   <!*PROJECT MANAGER ROLE*>
 
    <!-- Creation -->
 
    - When ANY USER creates a project
    - When a PROJECT MANAGER or an ADMIN assigns it to a user
 
    <!-- Core abilities -->
 
    - Anything above +
      - Assign and dissasign a DEVELOPER to/from a TICKET
      - Can see unassigned tickets tab
      - Delete TICKET
      - Update PROJECT details
      - Delete DEVELOPER from a PROJECT
      - Delete PROJECT
 
  <!-- *ADMINISTRATOR ROLE* -->
     <!-- Abilities -->
      - Anything above +
        - Assign and dissasign ROLES to any USER
        - Assign and dissasign USERS to any PROJECT
        - See any TICKET
        - See any PROJECT
 
 
### UI ###
 
<!-- SIGN-UP -->
 - Will ask for email and password
 - Will give the ability to go to the login page
 - Will have a tick so the browser remembers the credentials
 - Ability to recover their email with 'Forgot password'
 - Use the hooks to give good validation experience
 
<!-- LOG-IN -->
- Will ask for email and password
- Will give the ability to go to the login page
- Will have a tick so the browser remembers the credentials
- Use the hooks to give good validation experience
 
<!-- DASHBOARD -->
 
- Give total of: active projects, tickets, unassigned tickets
- Show 4 graphs: Projects by Tickets, Tickets by Priorty, Tickets by Type and Tickets by Status
- Show a graph on the total of Tickets vs Developers on each Project
- Show a small list of all company projects
- Show a small list of all company tickets
- Show a small list of all company members
 
 
<!-- NAVBAR  -->
 
 -ADMIN ROLE-
 
 - Dashboard
 - Manage role assignment
 - +
 
 - OTHERS
 
 - Dashboard
 - Projects
  - All projects
  - My projects
 
- Tickets
 - Created tickets
 - Assigned tickets
 
<!-- PROJECT -->
 
- Project progress percentage
- Project details (start date, deadline, priority, category )
v row of 3 columns
-Project manager details
-Project team list
-Project activity (history of actions)
-List of all tickets
 
<!-- TICKET -->
 
- Ticket progress
- Ticket details(start date, developer assigned)
- Ticket description (what's wrong)
- Ticket time estimate
- Ticket submitter
- Assigned developer
- Comments
 
<!-- USER PROFILE -->
 
 
SECONDARY FUNCTIONALITY
 

TODO
<!-- - Figure out how to use same Postgre database on different computers
:upload to Railway? -->
<!-- :upload to Render?(90 days free) -->
<!-- - Problem with @typescript-eslint/parser comes with Node version? -->

<!-- - Create Base Components -->
- Make skeleton of Project and Ticket 


