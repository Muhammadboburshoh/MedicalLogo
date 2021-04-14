import { Link } from "react-router-dom"

import footer_logo from "../../../images/footer-logo.png"
import "./Footer.css"



function Footer () {

  return (
    <footer className="footer">
      <div className="container footer__container">
        <img className="footer__logo" src={footer_logo} width="160" height="52" alt="Footer logo"/>

        <div className="footer__contact">
          <h2 className="footer__contact-heading">Contact</h2>
          <span className="footer__contact-number first-contact-number">+85258049725</span>
          <span className="footer__contact-email second-contact-number">companyname@gmail.com</span>
        </div>

        <div className="footer__quick-link">
          <h3 className="footer__quick-link-header">Quick Link</h3>
          <ul className="footer__quick-link-list">
            <li className="footer__quick-link-item">
              <Link to="#" className="footer__quick-link-link">Get a quote </Link>
            </li>
            <li className="footer__quick-link-item">
              <Link to="#" className="footer__quick-link-link">Contact us </Link>
            </li>
            <li className="footer__quick-link-item">
              <Link to="#" className="footer__quick-link-link">Our organization </Link>
            </li>
            <li className="footer__quick-link-item">
              <Link to="#" className="footer__quick-link-link">Relocation </Link>
            </li>
            <li className="footer__quick-link-item">
              <Link to="#" className="footer__quick-link-link">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="footer__media">
          <h3 className="footer__media-header">Get In Touch</h3>

          <div className="footer__medias">
            <Link to="#" className="footer__media-item">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8652 2H15.8652C14.5392 2 13.2674 2.52678 12.3297 3.46447C11.392 4.40215 10.8652 5.67392 10.8652 7V10H7.86523V14H10.8652V22H14.8652V14H17.8652L18.8652 10H14.8652V7C14.8652 6.73478 14.9706 6.48043 15.1581 6.29289C15.3457 6.10536 15.6 6 15.8652 6H18.8652V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

            </Link>
            <Link to="#" className="footer__media-item">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
              <path d="M23.8652 2.9998C22.9076 3.67528 21.8473 4.19191 20.7252 4.5298C20.123 3.83731 19.3226 3.34649 18.4323 3.12373C17.542 2.90096 16.6047 2.957 15.7473 3.28426C14.8899 3.61151 14.1537 4.1942 13.6382 4.95352C13.1228 5.71283 12.8529 6.61214 12.8652 7.5298V8.5298C11.1079 8.57537 9.36651 8.18561 7.79624 7.39525C6.22598 6.60488 4.87555 5.43844 3.86523 3.9998C3.86523 3.9998 -0.134766 12.9998 8.86523 16.9998C6.80576 18.3978 4.35239 19.0987 1.86523 18.9998C10.8652 23.9998 21.8652 18.9998 21.8652 7.4998C21.8643 7.22126 21.8375 6.9434 21.7852 6.6698C22.8058 5.6633 23.5261 4.39251 23.8652 2.9998V2.9998Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="24" height="24" fill="white" transform="translate(0.865234)"/>
              </clipPath>
              </defs>
              </svg>
            </Link>
            <Link to="#" className="footer__media-item">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8652 2H7.86523C5.10381 2 2.86523 4.23858 2.86523 7V17C2.86523 19.7614 5.10381 22 7.86523 22H17.8652C20.6267 22 22.8652 19.7614 22.8652 17V7C22.8652 4.23858 20.6267 2 17.8652 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.8652 11.3698C16.9886 12.2021 16.8464 13.052 16.4589 13.7988C16.0714 14.5456 15.4583 15.1512 14.7068 15.5295C13.9553 15.9077 13.1036 16.0394 12.273 15.9057C11.4423 15.7721 10.6749 15.3799 10.08 14.785C9.4851 14.1901 9.09292 13.4227 8.95925 12.592C8.82559 11.7614 8.95725 10.9097 9.33551 10.1582C9.71377 9.40667 10.3194 8.79355 11.0662 8.40605C11.813 8.01856 12.6629 7.8764 13.4952 7.99981C14.3441 8.1257 15.13 8.52128 15.7369 9.12812C16.3437 9.73496 16.7393 10.5209 16.8652 11.3698Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3652 6.5H18.3752" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="#" className="footer__media-item">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
              <path d="M23.4053 6.42C23.2865 5.94541 23.0446 5.51057 22.704 5.15941C22.3633 4.80824 21.9361 4.55318 21.4653 4.42C19.7453 4 12.8653 4 12.8653 4C12.8653 4 5.98532 4 4.26532 4.46C3.79456 4.59318 3.3673 4.84824 3.02666 5.19941C2.68603 5.55057 2.44411 5.98541 2.32532 6.46C2.01053 8.20556 1.85655 9.97631 1.86532 11.75C1.8541 13.537 2.00809 15.3213 2.32532 17.08C2.45628 17.5398 2.70362 17.9581 3.04346 18.2945C3.3833 18.6308 3.80414 18.8738 4.26532 19C5.98532 19.46 12.8653 19.46 12.8653 19.46C12.8653 19.46 19.7453 19.46 21.4653 19C21.9361 18.8668 22.3633 18.6118 22.704 18.2606C23.0446 17.9094 23.2865 17.4746 23.4053 17C23.7177 15.2676 23.8716 13.5103 23.8653 11.75C23.8765 9.96295 23.7226 8.1787 23.4053 6.42V6.42Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6152 15.02L16.3652 11.75L10.6152 8.47998V15.02Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="24" height="24" fill="white" transform="translate(0.865234)"/>
              </clipPath>
              </defs>
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer