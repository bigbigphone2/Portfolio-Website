import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, CardInnerContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          <CardInnerContainer>
            {projects
              .map((project) => (
                <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          </CardInnerContainer>
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects