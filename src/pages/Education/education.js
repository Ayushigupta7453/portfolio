import React from 'react'
import './education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";

const education = () => {
  return (
    <>
     <div className='container education' id="education">
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Education
    </h2>
    <hr />
   
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022-26"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoSchool />}
  >
    <h5 className="vertical-timeline-element-title">Bachelors of Technology</h5>
    <h6 className="vertical-timeline-element-subtitle">KIET group of Institutions,Ghaziabad</h6>
    <p className="vertical-timeline-element-subtitle2">with an aggregate of 9.5</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoSchool />}
  >
    <h5 className="vertical-timeline-element-title">Senior Secondary education</h5>
    <h6 className="vertical-timeline-element-subtitle">MPGS,Meerut</h6>
    <p className="vertical-timeline-element-subtitle2">with PCM percentage as 98</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoSchool />}
  >
    <h5 className="vertical-timeline-element-title">Higher Secondary education</h5>
    <h6 className="vertical-timeline-element-subtitle">MPGS,Meerut</h6>
    <p className="vertical-timeline-element-subtitle2">with percentage as 96.8</p>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div> 
    </>
  )
}

export default education
