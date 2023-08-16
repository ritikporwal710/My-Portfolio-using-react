import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div id='footer'>
        <div className="container">
                <section>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="#">Leetcode</a></li>
                        <li><a href="#">Codechef</a></li>
                        <li><a href="#">Codeforces</a></li>
                        <li><a href="#">GFG</a></li>

                    </ul>
                </section>
                <section>
                    <h2>Address</h2>
                    <ul>
                        <li>+918439026710</li>
                        <li>BIET College</li>
                        <li>Jhansi,India</li>

                    </ul>
                    
                </section>
                <section>
                    <h2>Connect</h2>
                    <article>
                        <a href="" target={"blank"}>
                            <AiFillLinkedin/>
                        </a>
                        <a href="" target={"blank"}>
                            <AiFillGithub/>
                        </a>
                        <a href="" target={"blank"}>
                            <AiFillInstagram/>

                        </a>
                        <a href="" target={"blank"}>
                            <AiFillFacebook/>
                        </a>
                        <a href="" target={"blank"}>
                            <AiFillTwitterCircle/>
                        </a>
                    </article>
                </section>
        </div>
    </div>
  )
}

export default Footer;