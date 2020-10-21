import React from 'react';

const Experience = () => {
  return (
    <div>
      <div className="head">
        <section>
        <h1>- EXPERIENCES -</h1>
        </section>
      </div>
      <section>
        <div class='column'>
          <h3>Organizational Experiences</h3>      
            <article class='experience'>
              <div class='title'>
              <h4>Kopma Unitel</h4>
              </div>
              <div class="descrition">
              <h5>ICT Staff (2018 - 2019)</h5>
              </div>
            </article>
            <article class='experience'>
              <div class='title'>
              <h4>IEEE SB Telkom University</h4>
              </div>
              <div class="descrition">
              <h5>HR Staff (2018 - 2019)</h5>
              </div>
            </article>
            <article class='experience'>
              <div class='title'>
              <h4>IEEE SB Telkom University</h4>
              </div>
              <div class="descrition">
              <h5>Head of Creative and Publication Department (2019 - 2020)</h5>
              </div>
           </article>
        </div>
      </section>

      <section>
        <div class='column'>
          <h3>Work and Research Experience</h3>      
            <article class='experience'>
              <div class='title'>
                <h4>Research</h4>
                </div>
                <div class="descrition">
                <h5>Performance Analysis of Neo4j and MySQL using Public Policies Decision Making Data</h5> 
                <p>Published on the 7th ICITACEE 2020</p>
                </div>
            </article>
            
            <article class='experience'>
              <div class='title'>
                <h4>Nokia Siemens Network</h4>
                  </div>
                  <div class="descrition">
                  <h5>Database Administrator (Internship)</h5>
                  <p>June 2019 - July 2019</p>
                  <ul>
                    <li>Topology Identification for 2G 3G 4G radio network from Database</li>
                    <li>Topology Comprehension for 2G 3G 4G network from database</li>
                    <li>Parameter study and Object logic radio in 2G 3G 4G</li>
                    <li>Database structure comprehension for radio network</li>
                    <li>Base report installation</li>
                    <li>Documentation, Problem analysis, and Solution</li>
                  </ul>
              </div>
            </article>
        </div>
      </section>
    </div>
  );
};

export default Experience;
