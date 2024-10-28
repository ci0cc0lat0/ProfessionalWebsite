import React from 'react'
import s from '@/styles/page.module.scss'
import Link from 'next/link'

function Project_link({ linkto, children, link_display }) {
  return (
    <div className={s.proj_item}>
      <Link className={s.proj_link} href={linkto} target="_blank">
        {link_display}
      </Link>
      <p className={s.proj_text}> - {children}</p>
    </div>
  )
}

function Contact_item({children, contact_title }) {
  return (
    <div className={s.contact_item}>
      <p className={s.contact_title}>
        {contact_title}:
      </p>
      <p className={s.contact_text}>{children}</p>
    </div>
  )
}

function Doc_item({ linkto, children, title }) {
  return (
    <div className={s.docs_item}>
      <h2 classname={s.doc_item_title}>{title}</h2>
      <p className={s.doc_item_desc}>{children}</p>
    </div>
  )
}

export default function page() {
  return (
    <div className={s.a_wrapper}>
      <div className={s.b_header}>
        <p>Hi, I'm Anthony Ciocco. I'm a full-stack developer.</p>
      </div>
      <div className={s.b_content}>

        <div className={s.c_1}>
          <div className={s.c_1wrapper}>
            <div className={s.c_1_item}>Home</div>
            <div className={s.c_1_item}>Projects</div>
            {/* <div className={s.c_1_item}>Docs</div> */}
            <div className={s.c_1_item}>Contact</div>

          </div>
        </div>

        <div className={s.c_2}>
          <div className={s.c_2wrapper}>

            <div className={s.c_2section}>
              <h1>Home</h1>
              <div className={s.c2_home_wrapper}>
                <div className={s.c2_home_item} id={s.home_picture}>
                  <div className={s.c2_home_item_wrapper} id={s.c2_pfp_wrapper}>
                    <img className={s.c2_pfp} src="newpfp.png" />
                  </div>
                </div>

                <div className={s.c2_home_item} id={s.home_text}>
                  <div className={s.c2_home_item_wrapper}>
                    <p>
                      I am a Fullstack developer who is seasoned in JavaScript, NextJS, NodeJS, and Strapi. I like building websites, connecting the pieces together, and bringing projects to life.<br/><br/>I enjoy tinkering with servers and virtual machines, learning new web tools and diving into data analytics.<br/><br/> When I am teaching myself something new, I keep myself busy with reading, drawing, playing insturments and gaming. </p>
                  </div>
                </div>

                <div className={s.c2_home_item} id={s.home_links}>
                  <div className={s.c2_home_item_wrapper} id={s.c2_links}>
                    <a href='AnthonyCioccoFullStackNSM.pdf' target="_blank" className={s.c2_link_item}>
                      <div >
                        <p>Resume</p>
                      </div>
                    </a>
                    <a href='https://github.com/ci0cc0lat0' target='_blank' className={s.c2_link_item}>
                      <div >
                        <p>Github</p>
                      </div>
                    </a>
                    <a href='https://www.linkedin.com/in/anthonymciocco/'target='_blank' className={s.c2_link_item}>
                      <div >
                        <p>Linkedin</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project section, ideally just links with a description */}
            <div className={s.c_2section} id={s.projects}>
              <h1>Projects</h1>
              <Project_link link_display="Off Record Media" linkto="https://offrecord.blog/">
                A media publication where writers and photographers cover shows and media local to Houston and centeralized to Texas.
              </Project_link>
              <Project_link link_display="Sunsideup" linkto="https://sunsideup.vercel.app/">
                A website and repository for energy related matters in Texas and the surrounding markets.
              </Project_link>
              {/*<Project_link link_display="Keyleephoto" linkto="#">
                A portfolio I designed to show of pictures, projects, and past works.
              </Project_link>*/}
              <Project_link link_display="Dotabase" linkto="https://github.com/ci0cc0lat0/Dotabase">
                Python scraping and data analysis of Dota 2 stats that is used by a client for analytics and insights
              </Project_link>
              <Project_link link_display="Shroomp" linkto="https://ci0cc0lat0.itch.io/shroomp">
                Play my game where you are Shroomp, a mushroom and you must fight back against the protaganost who is causing a stir in your kingdom
              </Project_link>
              <Project_link link_display="Theantpond" linkto="https://www.theantpond.com/">
                A personal portfolio I made to showcase art, music, and brain-to-paper thoughts
              </Project_link>

              <Project_link link_display="HR Dashboard" linkto="https://github.com/ci0cc0lat0/NodeDatabaseDemo">
                A Human Resources dashboard constructed with NodeJS, ExpressJS and PostgreSQL.
              </Project_link>
              <Project_link link_display="Earthquake Geo-location" linkto="https://github.com/ci0cc0lat0/Data-Science-Group-Work">
                Visualization and analysis of earthquakes in the U.S. and E.U. over a 10 year period.
              </Project_link>
              <Project_link link_display="Antgrep" linkto="https://github.com/ci0cc0lat0/antGrepper">
                A CLI tool written in C++ for grepping all the specific filetypes in a given directory
              </Project_link>
              <Project_link link_display="anthonyciocco.com" linkto="https://www.theantpond.com/">
                My professional portfolio
              </Project_link>
            </div>


            {/* <div className={s.c_2section} id={s.Docs}>
              <h1>Docs</h1>
              <p className={s.docs_text}>Here are links describing the processes of some of the projects I have done. Be it for reference or for anyone else, these docs dive into the processes and steps to some development</p>

              <Doc_item linkto={`#`} title="Sunsideup development">This document talks about how I went about creating a semi-static website with Strapi and NextJS.</Doc_item>
              <Doc_item linkto={`#`} title="CMake">C++ can be tricky, and CMake can make it just a bit tricker.</Doc_item>
              <Doc_item linkto={`#`} title="Dotabase and webscraping">Python API scraping and sqlite</Doc_item>
              <Doc_item linkto={`#`} title="NextJS and patterns">This document touches on Sunsideup development and the patterns used in that project</Doc_item>
            </div> */}


                
            <div className={s.c_2section} id={s.contact}>
              <h1>Contact</h1>
              <div className={s.contact_container}>
                <Contact_item contact_title={"Name"}>
                  Anthony Ciocco
                </Contact_item>
                <Contact_item contact_title={"Email"}>
                  anthonymciocco@gmail.com
                </Contact_item>
                <Contact_item contact_title={"Phone"}>
                  (832)-531-4100
                </Contact_item>
                <Contact_item contact_title={"Address"}>
                  Houston, TX
                </Contact_item>
                <Contact_item contact_title={"Linkedin"}>
                  <a href="https://www.linkedin.com/in/anthonymciocco/" target="_blank">https://www.linkedin.com/in/anthonymciocco/</a>
                </Contact_item>
                <Contact_item contact_title={"Github"}>
                <a  href="https://github.com/ci0cc0lat0" target="_blank">https://github.com/ci0cc0lat0</a>
                </Contact_item>




              </div>
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}
