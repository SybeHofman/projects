import "./NavBar.css";

function NavBar() {
    return(
        <nav>
            
            <span className="nav-contents homepage-icon">SH</span>
    
            <a href = "https://sybehofman.github.io/homepage/#about">
                <span className="nav-contents about">ABOUT</span>
            </a>
            |
            <a href = "https://sybehofman.github.io/projects/">
                <span className="nav-contents projects">PROJECTS</span>
            </a>
            |
            <a href = "https://sybehofman.github.io/homepage/#contacts">
                <span className="nav-contents contacts">CONTACTS</span>
            </a>
        </nav>
    )
}

export default NavBar;