import React, {Component} from 'react'; 
import Header from '../ui/Header'; 

import { projectData } from '../data'; 
import ProjectRow from './ProjectRow';

const navItems = ["React", "Javascript", "HTML/CSS"];

class Projects extends Component {
  state = {
    active: 0
  }

  handleNavClick = (index) => {
    this.setState({active: index})
  }

  renderNavItems = () => {
    return navItems.map((item, index) => (
      <span 
        className={index === this.state.active ? 'Navbar__item--active' : 'Navbar__item'} 
        key={item}
        onClick={() => this.handleNavClick(index)}
      >
        {item}
      </span>
    ))
  }

  renderProjects = () => {
    if (this.state.active === 0) {
      return projectData.react.map((project, idx) => {
        if (idx % 2 > 0) {
          return <ProjectRow 
                    key={project.name} 
                    name={project.name} 
                    images={project.images} 
                    description={project.description}
                    keywords={project.keywords}
                    reversed={false}
                    liveURL={project.liveURL}
                    gitURL={project.gitURL}
                    viewProject={this.props.viewProject}
                  />
        } else if (idx % 2 === 0) {
          return <ProjectRow 
                    key={project.name} 
                    name={project.name} 
                    images={project.images} 
                    description={project.description}
                    keywords={project.keywords}
                    reversed={true}
                    liveURL={project.liveURL}
                    gitURL={project.gitURL}
                    viewProject={this.props.viewProject}
                  />
        }
        return null
      })
    } else if (this.state.active === 1) {
      return projectData.javascript.map((project, idx) => {
        if (idx % 2 > 0) {
          return <ProjectRow 
                    key={project.name} 
                    name={project.name} 
                    images={project.images} 
                    keywords={project.keywords}
                    reversed={false}
                    viewProject={this.props.viewProject}
                  />
        } else if (idx % 2 === 0) {
          return <ProjectRow 
                    key={project.name} 
                    name={project.name} 
                    images={project.images} 
                    keywords={project.keywords}
                    reversed={true}
                    viewProject={this.props.viewProject}
                  />
        }
        return null
      })
    } else if (this.state.active === 2) {
      return projectData['html/css'].map((project, idx) => {
        if (idx % 2 > 0) {
          return <ProjectRow 
                    key={project.name} 
                    name={project.name} 
                    images={project.images} 
                    keywords={project.keywords}
                    reversed={false}
                    viewProject={this.props.viewProject}
                  />
        } else if (idx % 2 === 0) {
          return <ProjectRow 
                    key={project.name} 
                    name={project.name} 
                    images={project.images} 
                    keywords={project.keywords}
                    reversed={true}
                    viewProject={this.props.viewProject}
                  />
        }
        return null
      })
    }
  } 

  render() {
    return (
      <section className="SectionNarrow Projects" id="#projects">
        {/* <div className="Projects__header"> */}
          <Header title="Projects"/>
          {/* <nav className="Navbar">
            {this.renderNavItems()}
          </nav>          */}
        {/* </div> */}

        <div className="Projects__content">
            {this.renderProjects()}
        </div>
      </section>
    )
  }
  
}

export default Projects; 