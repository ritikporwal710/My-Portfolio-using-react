import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineMan,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    // <div id="footer">
    //   <div className="container">
    //     <section>
    //       <h2>Links</h2>
    //       <ul>
    //         <li>
    //           <a href="#">Leetcode</a>
    //         </li>
    //         <li>
    //           <a href="#">Codechef</a>
    //         </li>
    //         <li>
    //           <a href="#">Codeforces</a>
    //         </li>
    //         <li>
    //           <a href="#">GFG</a>
    //         </li>
    //       </ul>
    //     </section>
    //     <section>
    //       <h2>Address</h2>
    //       <ul>
    //         <li>+918439026710</li>
    //         <li>BIET College</li>
    //         <li>Jhansi,India</li>
    //       </ul>
    //     </section>
    //     <section>
    //       <h2>Connect</h2>
    //       <article>
    //         <a href="" target={"blank"}>
    //           <AiFillLinkedin />
    //         </a>
    //         <a href="" target={"blank"}>
    //           <AiFillGithub />
    //         </a>
    //         <a href="" target={"blank"}>
    //           <AiFillInstagram />
    //         </a>
    //         <a href="" target={"blank"}>
    //           <AiFillFacebook />
    //         </a>
    //         <a href="" target={"blank"}>
    //           <AiFillTwitterCircle />
    //         </a>
    //       </article>
    //     </section>
    //   </div>
    // </div>
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am a software engineer from India with 1+ years of experience in
            Full-stack MERN development.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <a target={"blank"}>
              <AiFillMail />
            </a>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Ritik Porwal. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
