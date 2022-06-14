import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { School } from '@material-ui/icons';
import { Work } from '@material-ui/icons';
import "../styles/Experience.css"
const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {/*Full Stack developer Henry */}
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School />}
          >
            <h3 className='vertical-timeline-element-title'>SoyHenry Bootcamp</h3>
            <h4 className='vetical-timeline-element-subtitle'>Buenos Aires, Argentina</h4>
            <p>Full Stack Developer</p>
          </VerticalTimelineElement>
        {/* Ingenieria en Sistemas */}
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School />}
          >
            <h3 className='vertical-timeline-element-title'>San Isidro Labrador International University</h3>
            <h4 className='vetical-timeline-element-subtitle'>Alajuela, Costa Rica</h4>
            <p>Software Engineer</p>
          </VerticalTimelineElement>
          {/* Udemy */}
          <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School />}
          >
            <h3 className='vertical-timeline-element-title'>Udemy</h3>
            <h4 className='vetical-timeline-element-subtitle'>Alajuela, Costa Rica</h4>
            <p>Frontend Developer</p>
          </VerticalTimelineElement>
          {/*GBR */}
          <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<Work />}
          >
            <h3 className='vertical-timeline-element-title'>GBR Connections</h3>
            <h4 className='vetical-timeline-element-subtitle'>Alajuela, Costa Rica</h4>
            <p>Network Technician</p>
          </VerticalTimelineElement>
          {/* Avicola Trinos */}
          <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<Work />}
          >
            <h3 className='vertical-timeline-element-title'>Avicola Trinos S.A</h3>
            <h4 className='vetical-timeline-element-subtitle'>Alajuela, Costa Rica</h4>
            <p>Integrated Producer</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience