import * as React from 'react'
import {
  PullQuote
} from '@dailybruin/lux'
import { css } from 'react-emotion'
import { setFlagsFromString } from 'v8';

interface FancyPullQuoteProps {
  caption: string
}

class FancyPullQuote extends React.Component<FancyPullQuoteProps> {
  render() {
    return (
      <>
        < PullQuote text={this.props.caption}
          style={css`
            position: relative;
            margin-bottom: 15px;
            margin-left: 15px;
            margin-right: -12vw;
            width: 430px;
            div { width: 100%; }
            font-family: Averia Gruesa Libre;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            h1 {width: 40px; font-size: 90px; font-family: Averia Gruesa Libre}
            line-height: normal;
            color: #000000;
            float: right;
            @media screen and (max-width: 767px){
              font-size: 20px;
              margin-right: 0vw;
              padding: 10px;
              width: 300px;
            }`}
        />
      </>
    )
  };

}

export default FancyPullQuote
