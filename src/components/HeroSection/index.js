import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroH1, HeroContent, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
        
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Pépite Time</HeroH1>
            <HeroP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae eros ut magna sodales bibendum vitae non nunc. Phasellus et nisi rutrum, sodales odio nec, viverra
            </HeroP>
            <HeroBtnWrapper>
                <Button to="philosophie" onMouseEnter={onHover} onMouseLeave={onHover} primary = 'true'
                dark = 'true' smooth={true} duration={1400} spy={true} exact='true' offset={-5} activeClass="active">
                    Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        
    </HeroContainer>
  )
}

export default HeroSection
