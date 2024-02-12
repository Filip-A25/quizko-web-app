import instagramIcon from "../icons/instagram-icon.png";
import facebookIcon from "../icons/facebook-icon.png";
import editLogo from "../logos/edIT-logo.png";

function Footer() {
    return (
        <div id="footer-element">
            <section className="social-media-links-section">
                <div className="social-media-flexbox">
                    <a href="https://www.facebook.com/edit.udruga/" className="sm-link">
                        <img src={facebookIcon} className="sm-link-icon"></img>
                    </a>
                    <a href="https://www.instagram.com/udruga_edit/" className="sm-link">
                        <img src={instagramIcon} className="sm-link-icon"></img>
                    </a>
                </div>
            </section>
            <section className="copyright-section">
                <small>© Udruga edIT</small>
            </section>
            <section className="logo-section">
                <div className="logo-flexbox">
                    <img src={editLogo} className="edit-logo"></img>
                    <span>Ekonomsko društvo informacijskih tehnologija</span>
                </div>
            </section>
        </div>
    )
}

export default Footer;