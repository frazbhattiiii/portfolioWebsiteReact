// import "./topBar.scss";
import './topBar.scss';
import { Person, Mail } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">
            bhatti.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+92 3014205979</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span >
              bhattifraz94@gmail.com
            </span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href="https://github.com/frazbhattiiii">Ahmed Fraz</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}