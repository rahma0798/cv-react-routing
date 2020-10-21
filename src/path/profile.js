import React from 'react';
import Avatar from '../img/Avatar.png';
import './style.css';

function Profile() {
  return (
    <div> 
        <header>
        <img src={Avatar} alt="Avatar" />;<h1>Rahmatian Jayanty Sholichah</h1>
        <section>
            <p className="desc">
            Hi, I'm Rahma. I’m a fresh graduate from Telkom university as a
            computer science graduate (Informatics) with a bachelors degree in
            2020.
            </p>
        </section>
        </header>
        <main>
            <section>
                <h3>Education</h3>
                <article>
                <div class='school'>
                    <span>Aug 2016- Sep 2020</span> <strong>Telkom University</strong>
                </div>
                <div class="descrition">
                    Bechelor Degree of Informatics
                </div>
                </article>
            </section>

            <section>
                <div>
                    <h3>LANGUAGES</h3>
                    <p>English</p>
                    <p>Indonesian</p>
                </div>
            </section>

            <section>
                <h3>Skills</h3>
                <div class='skills'>
                    <div class='column'>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul>
                            <li>Cypher</li>
                            <li>R</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    </div>
            </section>   
        </main>
    </div>
  );
}

export default Profile;
