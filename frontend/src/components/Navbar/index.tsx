import { ReactComponent as GithubIcon } from '../../assets/github.svg';

import './styles.css';

export const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/LuannMateus"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/LuannMateus</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
