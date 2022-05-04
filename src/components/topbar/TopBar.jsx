import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <Link className="link" to="/">
                    <h1 className="nameTitle">JS</h1>
                </Link>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/aboutme">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/work">
                            Work
                        </Link>
                    </li>
                    {/* <li className="topListItem">Travel</li> */}
                    <li className="topListItem">
                        <Link className="link" to="/food">
                            Food
                        </Link>
                    </li>
                </ul>
                <a className="resumeLink" href="/jonathan_sun_Resume2022.pdf" download>
                    Resume Download  <i class="fa-solid fa-file-arrow-down"></i>
                </a>
            </div>
        </div>
    )
}