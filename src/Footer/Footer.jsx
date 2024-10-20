import "./Footer.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="part1">
        <div className="subscribe-section">
          <h1>
            SUBSCRIBE TO OUR <br />
            NEWSLETTER
          </h1>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam <br />
            illum et nostrum quidem aut necesbus enim
          </p>
          <div className="subscribe-search-button">
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="about-section">
          <h1>ABOUT US</h1>
          <ul className="about-list">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="ourservice-section">
          <h1>OUR SERVICES</h1>
          <ul className="services-list">
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="usefullinks-section">
          <h1>USEFUL LINKS</h1>
          <ul className="usefullinks-list">
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        <div className="getintouch-section">
          <h1>GET IN TOUCH</h1>
          <p>
            Address: F-262, First Floor, <br />
            Sushant Lok Phase-III,
            <br /> Sector-57, Gurgaon, Haryana, <br />
            India 122003
          </p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="part2">
        <h1>CHAPERONE</h1>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum<br/> doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
          laborum<br/> doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>

      <div className="part3">
        <h1>Follow us on</h1>
        <a href="https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D"><FaSquareInstagram className="icon"/></a>
        <a href="https://www.facebook.com/?_rdr"><RiFacebookCircleFill className="icon"/></a>
        <a href="https://www.threads.net/login"><FaXTwitter className="icon" /></a>
        <a href="https://www.youtube.com/"><FaYoutube className="icon"/></a>
      </div>
      <hr/>

      <div className="part4">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
