import React from 'react'
import me from '../images/me.jpeg'

import Layout from '../components/layout'
import SEO from '../components/seo'

import postStyle from '../styles/post.module.css'
import style from '../styles/about.module.css'

const About = () => (
  <Layout>
    <SEO />
    <div className={postStyle.post}>
      <h1>About</h1>
      <div className={style.card}>
        <img
          src={me} 
          alt="Me"
        />
        <div className={style.card__desc}>
          <p>Temirzhan</p>
          <p>19 y.o. fleXer</p>
        </div>
      </div>
      <p>Wassup, bro?</p>
      <p>
        This is the blog created for expressing my own thoughts on different things.
        I will mainly write for my friends, brothers and family so that 
        they have a basic understanding 
        of what happens in my life. It will also be used for the course I 
        am currently taking in the university.
      </p>
      <p>
        I am mostly engaged into website development stuff right now. My technology stack
        includes Node.js, React, Redux, GraphQL, PostgreSQL and TypeScript. 
        Feel free to{' '}
        <a 
          href="https://t.me/ironsoul0"
          target="_blank"
          rel="noopener noreferrer"
        >message
        </a>
        {' '}me if you have any cool project ideas.
      </p>
      <p>Some of the websites I am currently active in:</p>
      <ul>
        <li>
          <a 
            href="https://github.com/ironsoul0"
            target="_blank"
            rel="noopener noreferrer"
          >Github
          </a> 
        </li>
        <li>
          <a 
            href="https://vk.com/ironsoul0"
            target="_blank"
            rel="noopener noreferrer"
          >VK
          </a> 
        </li>
        <li>
          <a 
            href="https://t.me/ironsoul0"
            target="_blank"
            rel="noopener noreferrer"
          >Telegram
          </a> 
        </li>
        <li>
          <a 
            href="https://www.instagram.com/ironsoul0/"
            target="_blank"
            rel="noopener noreferrer"
          >Instagram
          </a> 
        </li>
        <li>
          <a 
            href="https://codeforces.com/profile/ironsoul"
            target="_blank"
            rel="noopener noreferrer"
          >Codeforces
          </a> 
        </li>
      </ul>
      <p>
        Enjoy!
      </p>
    </div>
  </Layout>
)

export default About
