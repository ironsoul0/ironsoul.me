import React from "react";
import me from "../images/me.jpeg";

import Layout from "../components/layout";
import SEO from "../components/seo";

import postStyle from "../styles/post.module.css";
import style from "../styles/about.module.css";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className={postStyle.post}>
      <h1>About</h1>
      <div className={style.card}>
        <img src={me} alt="Me" />
        <div className={style.card__desc}>
          <p>
            Temirzhan a.k.a <i>ironsoul</i>
          </p>
          <p>20 y.o. flexer</p>
        </div>
      </div>
      <p>Wassup, bro?</p>
      <p>
        This is the blog created for expressing my own thoughts on different
        things.
      </p>
      <p>
        I am mostly engaged into Ethereum and web dev stuff right now. My
        technology stack includes Node.js, React and scaffold-eth. Feel free to{" "}
        <a
          href="https://t.me/ironsoul0"
          target="_blank"
          rel="noopener noreferrer"
        >
          message
        </a>{" "}
        me if you have any cool project ideas.
      </p>
      <p>Before:</p>
      <ul>
        <li>nFactorial Incubator - 06/2018 - 08/2018</li>
        <li>Yandex Intern - 05/2019 - 08/2019</li>
        <li style={{ opacity: 0.55 }}>
          Google, Security STEP Intern - 07/2020 - 09/2020 (cancelled due to
          COVID-19)
        </li>
        <li>Ethereum Foundation ZK-summer - 06/2020 - 08/2020</li>
        <li>Citadel | Citadel Securities - 05/2021 - 08/2021 (hopefully!)</li>
        <li>Azimut Labs Frontend Engineer - 01/2021 - Current</li>
      </ul>
      <p>Some of the websites I am currently active in:</p>
      <ul>
        <li>
          <a
            href="https://github.com/ironsoul0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ironsoul0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.hackthebox.eu/profile/080415"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackTheBox
          </a>
        </li>
        <li>
          <a
            href="https://t.me/ironsoul0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://codeforces.com/profile/ironsoul"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeforces
          </a>
        </li>
      </ul>
      <p>Enjoy!</p>
    </div>
  </Layout>
);

export default About;
