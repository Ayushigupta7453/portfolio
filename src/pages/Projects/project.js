import React from 'react'
import './project.css'
import Spin from "react-reveal/Spin";

const project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        In addition to my academic pursuits and professional experiences, I have actively engaged in various projects that 
        showcase my technical expertise and problem-solving capabilities. These projects reflect my ability to apply theoretical
         knowledge to practical scenarios, utilizing a range of technologies and methodologies. Each project has been an opportunity to 
         tackle real-world challenges, innovate, and deliver effective solutions. Below is a brief overview of some of the key projects 
         I have developed, highlighting my proficiency in web development, machine learning, and software engineering.
       <br/>
       You can view my projects on my <a href="https://github.com/Ayushigupta7453" target="_blank" rel="noopener noreferrer">GitHub</a>.
       
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.9-IGs39VZfvsSOxAFLD0igHaDt&pid=Api&P=0&h=180"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      AIBrainChild
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Ayushigupta7453/AIBrainChild"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Machine Learning</span>
                  <img
                    src="/diseaseproject.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">SVC model</span>
                  <span className="card-detail-badge">Flask(python)</span>
                  <span className="card-detail-badge">HTML,CSS,JS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Disease prediction website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://disease-recommendation-3.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://tse2.explicit.bing.net/th?id=OIP.Lo5jWfgIA_wI3RIW-ZbJrgHaEK&pid=Api&P=0&h=180"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">JAVASCRIPT</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">VOTING.COM</h5>
                  </div>
                  <a className="ad-btn" href="https://vote-comweb-blb6pin86-ayushis-projects-fcefca58.vercel.app/">
                    View the website 
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  )

}

export default project
