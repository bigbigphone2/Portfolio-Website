import React from 'react'
import { Container, HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton, Icon } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HeroImg from '../../images/homepage.png';
import handleScroll from '../../utils/handleScroll';



const HeroSection = () => {

    return (
        <div id="about">
            <Container>
                <HeroContainer>
                    <HeroInnerContainer>
                        <HeroLeftContainer id="Left">
                            {/* <Title>Hi, I am <br /> {Bio.name}</Title> */}
                            <Title>{Bio.name}</Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            {/* <SubTitle>{Bio.description}</SubTitle> */}
                            <ResumeButton href={Bio.resume} target='display'>My Resume</ResumeButton>
                        </HeroLeftContainer>

                        <HeroRightContainer id="Right">
                            <Img src={HeroImg} alt="hero-image" />
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </HeroContainer>
                <Icon onClick={()=>handleScroll('skills')}><ArrowDropDownIcon style={{fontSize: '50px'}}/></Icon>                    
            </Container>
        </div>
    )
}

export default HeroSection