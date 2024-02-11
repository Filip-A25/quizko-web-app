import instagramIcon from "../icons/instagram-icon.png";
import facebookIcon from "../icons/facebook-icon.png";

function Footer() {
    return (
        <div id="footer-element">
            <section className="logo-section">
                <img src=""></img>
            </section>
            <section className="social-media-links-section">
                <a href="https://www.facebook.com/edit.udruga/" className="sm-link">
                    <img src={facebookIcon} className="sm-link-icon"></img>
                </a>
                <a href="https://www.instagram.com/udruga_edit/" className="sm-link">
                    <img src={instagramIcon} className="sm-link-icon"></img>
                </a>
            </section>
            <section className="copyright-section">
                <small>© Udruga edIT</small>
            </section>
        </div>
    )
}

export default Footer;