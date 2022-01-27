import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}