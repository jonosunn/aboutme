import "./aboutmeheader.css";

export default function AboutMeHeader() {
    return (
        <div className="aboutmeheader">
            <div className="aboutmeLeftDiv">
                <div className="aboutmeInfo">
                    <span className="aboutmeTitle">
                    Aspiring UI/UX Designer
                    </span>
                    <span className="aboutmeheaderDesc">
                    I’m Jonathan Sun, a <b>Technology Consultant Senior Analyst</b> currently working at <b> Accenture Melbourne, AUS. </b>
                    My goal is to apply my creative passion, analytical thinking and my understanding of technology to create 
                    informed and purposeful design solutions for people to enjoy.
                    </span>
                </div>
            </div>
            <div className="aboutmeRightDiv">
                <div className="aboutmeheaderItem">
                    <img 
                        src="https://scontent.fmel14-2.fna.fbcdn.net/v/t1.18169-9/18446918_10156159253923327_4380096700257372418_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SnR6CIaXRtYAX8D-DI8&_nc_oc=AQm64Ixn8yWzR8ZLp6cnBaKbhJjiKBs2PgKeR5iXUSJt33U2-kDLMfZ_7N3XT9KG25A&tn=AxJQ4ep0dJ8Rl67Q&_nc_ht=scontent.fmel14-2.fna&oh=00_AT9rSHiI0syclu5taua3eNr2yfR5h8gIbd7LP9EG4ebMZw&oe=62797361"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}