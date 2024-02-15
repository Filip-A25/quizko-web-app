import instagramIcon from "../icons/instagram-icon.png";
import facebookIcon from "../icons/facebook-icon.png";
import editLogo from "../logos/edIT-logo.png";

function Footer() {
    return (
        <div id="footer-element">
            <section className="social-media-links-section">
                <div className="social-media-flexbox">
                    <a href="https://www.facebook.com/edit.udruga/" className="sm-link">
                        <img src={facebookIcon} alt="Facebook Logo" className="sm-link-icon"></img>
                    </a>
                    <a href="https://www.instagram.com/udruga_edit/" className="sm-link">
                        <img src={instagramIcon} alt="Instagram Logo" className="sm-link-icon"></img>
                    </a>
                </div>
                <small>udruga.edit@gmail.com</small>
            </section>
            <section className="copyright-section">
                <small>© Udruga edIT</small>
            </section>
            <section className="logo-section">
                <div className="logo-flexbox">
                    <img src={editLogo} alt="edIT Logo" className="edit-logo"></img>
                    <small>Ekonomsko društvo informacijskih tehnologija</small>
                </div>
            </section>
        </div>
    )
}

export default Footer;