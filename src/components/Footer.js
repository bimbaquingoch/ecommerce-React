import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/footer.css";

export const FooterComponent = () => {
  return (
    <footer className="footer footer-content  animate__fadeInUp">
      <div className="content-icons">
        <a
          href="https://www.linkedin.com/in/bryan-imbaquingo-almagro-636a90168/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Icon"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/bimbaquingoch"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Icon"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/bryandresimba/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Icon"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          aria-label="Twitter Icon"
          href="https://twitter.com/bryandresimba"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
      </div>
      <div className="text-copy text-center">
        © 2021 Copyright:
        <a
          aria-label="repository"
          className="text-copy"
          href="https://github.com/bimbaquingoch/ecommerce-React"
          target="_blank"
          rel="noreferrer"
        >
          bimbaquingoch
        </a>
      </div>
    </footer>
  );
};
