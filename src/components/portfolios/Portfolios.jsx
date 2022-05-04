import "./portfolios.css";

export default function Portfolios() {
    return (
        <>
            <div className="portfolio"> 
                <img
                className="imgDivLeft"
                src="/accenture-image.jpeg"
                alt=""
                />
                <div className="workDescDivRight">
                    <h1 class="experienceTitle">
                        Accenture
                    </h1>
                    <p class="experienceSubTitle">
                        Technology Consultant Senior Analyst
                    </p>
                    <p class="experienceSubTitle">
                        Application Developer / Application Designer / Business Analyst
                    </p>
                    <p class="experienceDesc">
                        Working as a Technology Consultant Senior Analyst, I have experience in java development and business 
                        anaylst work. My Business analyst role was working on a new SaaS project, by provding skills in 
                        requirements gathering, business process design and buisness model strategy. As a java developer, 
                        i also wokred in web development very closely to the UI/UX designers and product owers in enhacing 
                        the userbility of web applications. I have also recieved a Recognition award from one of the clients 
                        Product owners.
                    </p>
                </div>
            </div>
            <div className="portfolioTwo"> 
                <div className="workDescDivLeft">
                    <h1 class="experienceTitle">
                        StopOver Project
                    </h1>
                    <p class="experienceSubTitle">
                        University Final Project (GRADE: HD)
                    </p>
                    <p class="experienceSubTitle">
                        Team Leader / Full Stack Developer / UI Designer 
                    </p>
                    <p class="experienceDesc">
                    With a team of 4, developed a cross-platform ride-sharing Web application using Python Django Framework 
                    with PostgreSQL as our database management and Heroku for CI/CD and deployment. With the use of Agile
                    methodology, we successfully completed all request from the client, over 4 sprints (10 days each). 
                    Designed a user interfaced that was easy to use for mobile and desktop web application. As a side Project
                    for UI/UX I decided to enhance the users experience, applying UI/UX methodoloy and a new User Interface design.
                    </p>
                    <a href="/" class="readMoreLink">Read More (COMING SOON)&gt;</a>
                </div>
                <img
                className="imgDivRight"
                src="/stopover.png"
                alt=""
                />
            </div>
            <div className="portfolio"> 
                <img
                className="imgDivLeft"
                src="/reactwebsite.png"
                alt=""
                />
                <div className="workDescDivRight">
                    <h1 class="experienceTitle">
                        React-Website Project
                    </h1>
                    <p class="experienceSubTitle">
                        Personal Project
                    </p>
                    <p class="experienceSubTitle">
                        Front End Developer (React)
                    </p>
                    <p class="experienceDesc">
                        Learnt react JS to build a my website to showcase my experience as a Developer and a Designer.
                    </p>
                    <a href="/" class="readMoreLink">Read More (COMING SOON)&gt;</a>
                </div>
            </div>
            <div className="portfolioTwo"> 
                <div className="workDescDivLeft">
                    <h1 class="experienceTitle">
                        Discord-Bot Project
                    </h1>
                    <p class="experienceSubTitle">
                        Personal Project
                    </p>
                    <p class="experienceSubTitle">
                        Application Developer (Python)
                    </p>
                    <p class="experienceDesc">
                        In my free time I coded a discord bot that accept commands to store data inside a table. 
                        Within discord you could use commands to modify the data stored and print out the data within a table. 
                    </p>
                    <a href="/" class="readMoreLink">Read More (COMING SOON)&gt;</a>
                </div>
                <img
                className="imgDivRight"
                src="/discordbot.png"
                alt=""
                />
            </div>
            {/* <div className="portfolio"> 
               <img
                className="imgDivLeft"
                src=""
                alt=""
                />
                <div className="workDescDivRight">
                    <h1 class="experienceTitle">
                        UI/UX Project (COMMING SOON)
                    </h1>
                    <p class="experienceSubTitle">
                        Personal Project (COMMING SOON)
                    </p>
                    <p class="experienceSubTitle">
                        UX Designer / UI Desginer 
                    </p>
                    <p class="experienceDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                    </p>
                    <a href="" class="readMoreLink">Read More (COMING SOON) &gt;</a>
                </div>
            </div> */}
        </>
    )
}