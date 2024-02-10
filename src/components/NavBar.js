import NavButton from "./NavButton";

function NavBar() {
    return (
        <div id="navbar-element">
            <section className="navbar-content-section">
                <div className="logo-section">
                    <h1>Quizko</h1>
                </div>
                <div className="nav-buttons-section">
                    <NavButton
                        index={1}
                        title="Početna"
                    />
                    <NavButton
                        index={2}
                        title="Kreiraj kviz"
                    />
                    <NavButton
                        index={3}
                        title="Moji kvizovi"
                    />
                    <NavButton
                        index={4}
                        title="Moj profil"
                    />
                </div>
                <div className="log-in-out-section">
                    <NavButton
                        title="Odjavi me"
                    />
                </div>
            </section>
        </div>
    )
}

export default NavBar;