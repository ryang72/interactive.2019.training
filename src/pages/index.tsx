import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import { css } from 'react-emotion'
import Chevron from '../images/Vector.png'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />

    <CoverPhoto
      headline={'Declining Health, Declined Help'}
      authors={data.kerckhoffArticle.author}
      imageCredit={'Amy Dixon'}
      imageURL="https://assets.dailybruin.com/images/interactive.prime.2018.teddy/web.prime.homelessness.ADX_2-22751bcd4955eeb69f5d100c928d85fb.JPG"
      xPosition={XPosition.Right}
      yPosition={YPosition.Bottom}
      explainer={
        'Wilkes, an outreach specialist for homeless people in Westwood, is tasked with an impossible job: provide care to those who refuse it. Every day, he asks his regulars with serious health concerns if they are ready to accept resources, such as housing or medical treatment. Every day, they reject his offers of help.'
      }
    />
    <div
      className={css`
        position: absolute;
        width: 100%;
        color: #ffffff;
        text-align: center;
        top: 90%;
        font-size: 25px;
        justify-content: center;
        margin: auto;
      `}
    >
      <p
        className={css`
          margin: auto;
          font-family: Potano Sans;
        `}
      >
        Scroll to continue
      </p>
      <div
        className={css`
          @keyframes move {
            from {
              margin-top: 0px;
            }
            to {
              margin-top: 10px;
            }
          }
          animation: move 1s infinite alternate;
        `}
      >
        <img
          className={css`
            margin: auto;
            display: block;
          `}
          src={Chevron}
        />
        <img
          className={css`
            margin: auto;
            display: block;
            margin-top: -10px;
          `}
          src={Chevron}
        />
      </div>
    </div>

    <div
      className={css`
        width: 100%;
        background: #1d1a1a;
        color: #ffffff;
        margin-top: -46px;
        padding: 10px;
        font-size: 24px;
        margin-bottom: 60px;
      `}
    >
      <p
        className={css`
          margin-left: 10%;
          margin-right: 10%;
          margin-top: 50px;
        `}
      >
        <strong>Donovan Wilkes</strong> was eating lunch in his office when two
        of his colleagues told him Miss Mary, an older homeless woman he had
        been checking in on, wasn’t responsive.
      </p>
      <p
        className={css`
          margin-left: 10%;
          margin-right: 10%;
        `}
      >
        He checked the time: 11 a.m. He knew she was always awake, packed up,
        and on her way to Peete’s for her first cup of coffee by 9 a.m.
      </p>
      <p
        className={css`
          margin-left: 10%;
          margin-right: 10%;
          margin-bottom: 40px;
        `}
      >
        “My heart dropped,” he said. “The only thing I was thinking was ‘go to
        her.’
      </p>
    </div>
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
