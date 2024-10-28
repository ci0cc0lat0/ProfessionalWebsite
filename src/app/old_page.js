import Image from "next/image";
import styles from "../styles/page.module.css";
import Link from "next/link";
function Project_link({linkto,children,link_display}){
  return(
    <div className={styles.pro_link_item}>
      <Link className={styles.pro_link} href={linkto}>
      {link_display}
      </Link>
      <p className={styles.pro_paragraph}> - {children}</p>
    </div>
  )
}

export default function Home() {
  /* section comp with title and takes children */
  return (
    <main>
      <div className={styles.wrapper}>
      <section className="section_about">
      <div className="header_container">
      <h1>I'm Anthony Ciocco, welcome to Antdocs</h1>

      </div>

        <div className="header_container">
          <h1>About</h1>
          <hr></hr>
           <div className="inner_section">
            <p>Cras ullamcorper mattis pharetra. Praesent a fermentum eros. Nam id felis purus. Phasellus dui lectus, pharetra eu pulvinar sed, sodales ac odio. Donec tincidunt odio id accumsan malesuada. Proin at velit leo. Etiam eget congue lorem, a vestibulum dolor. Praesent viverra in ante nec mattis. </p> 
            <div className={styles.ab_image_container}>
              <img src="newpfp.png"/>
            </div>
            <div className={styles.ab_link_container}>
              <div className={styles.ab_link_item}>
                <Link href="AnthonyCioccoNSMFullStack.pdf">Resume</Link>
              </div>
              <div className={styles.ab_link_item}>
                <Link href="https://github.com/ci0cc0lat0">Github</Link>
              </div>
              <div className={styles.ab_link_item}>
                <Link href="https://www.linkedin.com/in/anthonymciocco/">Linkedin</Link>
              </div>
              <div className={styles.ab_link_item}>
                <Link href="https://www.instagram.com/">Instagram</Link>
              </div>
            </div>
           </div>
        </div>
        <div className="about_body">

        </div>
      </section>


      <section>
        <div className="header_container">
          <h1>Projects</h1>
          <hr></hr>
          <Project_link link_display="Off Record Media" linkto="#">
            A blog where writers and photographers cover shows and media local to Houston and centeralized to Texas. 
          </Project_link>
          <Project_link link_display="Emdoc"  linkto="#">
            A website and repository for energy related matters in Texas and the surrounding markets.
          </Project_link>
          <Project_link link_display="Keyleephoto"  linkto="#">
            A portfolio I designed to show of pictures, projects, and past works.
          </Project_link>
          <Project_link link_display="Dotabase"  linkto="#">
            Python scraping and data analysis of Dota 2 stats that is used by a client for analytics and insights
          </Project_link>
          <Project_link link_display="Shroomp"  linkto="#">
            Play my game where you are Shroomp, a mushroom and you must fight back against the protaganost who is causing a stir in your kingdom 
          </Project_link>
          <Project_link link_display="Theantpond"  linkto="#">
            A person portfolio I made to showcase art, music, and brain-to-paper thoughts
          </Project_link>

          <Project_link link_display="HR Dashboard"  linkto="#">
            A Human Resources dashboard constructed nodeJS and postgreSQL that was my first dive into full-stack development
          </Project_link>
          <Project_link link_display="Earthquake Geo-location"  linkto="#">
            Visualization and analysis of earthquakes in the U.S. and E.U. over a 10 year period.
          </Project_link>
          <Project_link link_display="anthonyciocco.com"  linkto="#">
            My professional portfolio
          </Project_link>
          

          
        </div>
      </section>

      <section>
        <div className="header_container">
          <h1>Contact</h1>
          <hr></hr>
        </div>
      </section>
      </div>
    </main>
  );
}
