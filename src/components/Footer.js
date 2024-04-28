import instagramIcon from "../icons/instagram-icon.png";
import facebookIcon from "../icons/facebook-icon.png";
import editLogo from "../logos/edIT-logo.png";

function Footer() {
  return (
    <div
      id="footer-element"
      className="flex flex-col items-center justify-around h-[25vh] md:h-[10vh] md:flex md:flex-row md:items-center md:justify-between "
    >
      <section className="social-media-links-section flex flex-col order-2 md:order-1 md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] md:items-center md:flex-row">
        <div className="social-media-flexbox justify-center md:justify-between md:w-[18%] lg:w-[16%] 2xl:w-[15%]">
          <a
            href="https://www.facebook.com/edit.udruga/"
            className="sm-link mr-2 md:mr-0"
          >
            <img
              src={facebookIcon}
              className="sm-link-icon"
              alt="edit facebook link icon"
            ></img>
          </a>
          <a href="https://www.instagram.com/udruga_edit/" className="sm-link">
            <img
              src={instagramIcon}
              className="sm-link-icon"
              alt="edit instagram link icon"
            ></img>
          </a>
        </div>
        <small>udruga.edit@gmail.com</small>
      </section>
      <section className="copyright-section order-3 md:order-2 md:w-[20%] lg:w-[30%] xl:w-[30%]">
        <small>© Udruga edIT</small>
      </section>
      <section className="logo-section order-1 md:order-3 md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%]">
        <div className="logo-flexbox items-center flex flex-col md:flex-row md:justify-center md:items-center md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%]">
          <img src={editLogo} className="edit-logo w-fit" alt="edit logo"></img>
          <small className="hidden md:inline">
            Ekonomsko društvo informacijskih tehnologija
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
