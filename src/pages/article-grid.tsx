import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Footer,
  Head,
  Headline,
  ArticleGrid,
  convertEdgesToArticles,
  extractSectionsFromArticleEdges,
} from '@dailybruin/lux'
import { css } from 'react-emotion'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    allGoogleSheetRow {
      edges {
        node {
          section
          iscolumn
          headline
          byline
          imageurl
          imagecredits
          imagedescription
          link
        }
      }
    }
  }
`

export default function ArticleGridPage({ data }) {
  const sections = extractSectionsFromArticleEdges(data.allGoogleSheetRow.edges)

  const articleGrids = sections.map((section, i) => {
    const articles = convertEdgesToArticles(
      data.allGoogleSheetRow.edges
    ).filter(article => article.section === section.toLowerCase())
    return <ArticleGrid key={i} heading={section} articles={articles} />
  })

  return (
    <>
      <div
        className={css`
          margin: 0 auto;
          max-width: 1080px;
          padding: 0px 1.0875rem 1.45 rem;
          padding-top: 0px;
        `}
      >
        <Head {...data.site.siteMetadata} />
        <div
          className={css`
            padding-top: 45px;
            width: 100%;
            text-align: center;
          `}
        >
          <Headline text="Article Grid Gatsby Starter Page" />
        </div>
        {articleGrids}
      </div>
      <Footer developers="Karl Huang" copyrightYear={2018} />
    </>
  )
}
