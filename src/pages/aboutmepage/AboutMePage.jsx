import AboutMe from "../../components/aboutme/AboutMe";
import AboutMeHeader from "../../components/aboutmeheader/AboutMeHeader";
import "./aboutmepage.css";

export default function AboutMePage() {
    return (
        <div className="aboutMe"> 
            <AboutMeHeader />
            <AboutMe />
        </div>
    )
}