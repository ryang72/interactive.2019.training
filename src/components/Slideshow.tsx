import React from 'react'
import { css } from 'react-emotion'
import './Slideshow.css';
import ArrowRight from '../images/arrow-right.svg'

interface ISlideShowState {
    currentSlide: number;
}

let header_texts = {
    1: "Miss Mary’s health had been declining for a couple of months, but now it was worse.",
    2: "Her legs were badly swollen and she couldn’t stand up on her own.",
    3: "Seven minutes later, paramedics arrived.",
    4: "They asked her if she wanted to be taken to the hospital.",
    5: "Miss Mary declined politely.",
    6: "They asked how she was going to walk.",
    7: "“I’m fine,” she said."
};

export default class Slideshow extends React.Component<{}, ISlideShowState> {
	constructor(props) {
        super(props);
        this.state = { currentSlide: 1 };
    }



	render() {
		return (
			<>
				{this.state.currentSlide !== -1 && <div
					className={css`
						background-color: black;
						position: absolute;
						height: 100%;
                        width: 100%;
                        display: flex;
                    `}
                    onClick={ () => {
                        if (this.state.currentSlide === 7) {
                            this.setState({currentSlide: -1});
                        } else {
                            this.setState({ currentSlide: this.state.currentSlide + 1 });
                            let element = document.getElementById("labelHeader");
                            element.classList.remove("run-animation");
                            void element.offsetWidth;
                            element.classList.add("run-animation");
                        }
                    }}
				>
                    <div
                        className="textDiv"
                    >
                        <h1 id="labelHeader" className="run-animation">{header_texts[this.state.currentSlide]}</h1>
                        <p className={["clickP", css`
                            display: ${this.state.currentSlide === 1 ? 'block' : 'none'};
                        `].join(" ")}
                        >
                        Click to continue...
                        </p>
                    </div>
                </div>}
                <a
                        onClick={ () => {
                            this.setState({ currentSlide: -1 });
                        }}
                        className={["run-animation", css`
                            border: 1px solid white;
                            border-radius: 20px;
                            position: absolute;
                            top: calc(100% - 60px);
                            left: calc(100% - 100px);
                            display: ${this.state.currentSlide !== -1 ? 'flex' : 'none'};
                            justify-content: center;
                            cursor: pointer;
                            width: 90px;
                            color: white;
                            font-family: Pontano Sans;
                            text-align: center;
                            line-height: 40px;
                            &:hover {
                                background-color: #222;
                            }
                        `].join(" ")}
                    >
                    <span>Skip</span>
                    <img
                        className={css`
                            margin: auto 0;
                            height: 20px;
                            width: 20px;
                        `}
                        src={ArrowRight}
                    />
                </a>
			</>
		);
	}
}
