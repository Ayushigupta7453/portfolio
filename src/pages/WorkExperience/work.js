import React from 'react'
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './work.css'
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaPython} from "react-icons/fa";

const work = () => {
  return (
    <>
     <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaPython />}
            >
              <h3 className="vertical-timeline-element-title">
                Developer intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Star App solutions
              </h4>
              <p>
                Python, MERN developer
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024-present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<GiArtificialIntelligence />}
            >
              <h3 className="vertical-timeline-element-title">
                AI & ML intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Infosys Springboard
              </h4>
              <p>
                Developing a project on Meeting summarizer using NLP
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jan 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Front-End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SkyScanner
              </h4>
              <p>
              Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default work
