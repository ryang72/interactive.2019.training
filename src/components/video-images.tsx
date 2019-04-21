import * as React from 'react'
import { css } from 'react-emotion'
import { Player, ControlBar, PlayToggle, VolumeMenuButton } from 'video-react'
import "node_modules/video-react/dist/video-react.css"

interface VideoImageState 
{
    imageURL: string
    videoURL: string
    imageDisplay: boolean
}

interface VideoImageProps
{
    alt: string
    img: string
    vid: string
    credit: string
    caption: string
}

export class VideoImage extends React.Component<{},VideoImageState> 
{
    constructor(props)
    {
        super(props)
        this.state = {
            imageDisplay: true,
            imageURL: "https://digital-photography-school.com/wp-content/uploads/2007/02/black-and-white-tips.jpg",
            videoURL: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        }
    }

    display = () => {
        this.setState({imageDisplay: !this.state.imageDisplay})
    }

    render() 
    {
        return(
            <>
                <link rel="stylesheet" href="/css/video-react.css" />
                <img className={css`display: ${this.state.imageDisplay ? 'block': 'none'}; margin-left: auto; margin-right:auto; width:75%;`} onClick={this.display} src={this.state.imageURL}></img>
                <Player fluid={false} autoPlay className={css
                    `display: ${!this.state.imageDisplay ? 'block': 'none'}; margin-left: auto; margin-right:auto; width:75%;`} onClick={this.display}  src={this.state.videoURL}>
                    <ControlBar autoHide={true} disableDefaultControls={true}></ControlBar>
                    <VolumeMenuButton vertical />
                    <PlayToggle /></Player>
            </>
        );
    }
}

