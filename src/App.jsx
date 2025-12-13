import { useState } from 'react'
import './App.css'


import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import timg from './assets/tailimg.png';
import org1 from './assets/org1.png';
import org2 from './assets/org2.png';
import org3 from './assets/org3.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navb">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> 6th Mobile Congress Studies </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>


   <div className="main-content-wrapper">
      <div className="hero">
        <h1 className="heading1"> Aug 21-22, 2026 </h1>
        <h2 className="heading2"> Go Mobile, Stay Connected </h2>
        <h1 className="heading1"> Venue: IIT Hyderabad </h1>
      </div>

      <p className='scontainer'>The 6th Mobile Studies Congress invites researchers, creative practitioners, designers and industry professionals to submit papers and proposals for presentations, workshops, screening, showcases and panel discussions on the theme ”Go Mobile, Stay Connected.” This annual event seeks to examine the transformative impact of mobile media, cellphilming and smart technologies on our lives, society and creative industries. This congress will explore new ways to connect to culture, country and communities. The 6th Mobile Studies Congress will include a Mobile Innovation Networks and Association, MINA, smartphone film festival screening. Selected conference papers and projects will be published in a special issue. </p>
      
      <div className="curosil">

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

          {}
          <div className="carousel-indicators"> 
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          </div>

          <div className="carousel-inner">

            {}
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="Slide 1" /> 
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="Slide 4" />
            </div>
            <div className="carousel-item">
              <img src={img5} className="d-block w-100" alt="Slide 5" />
            </div>
            <div className="carousel-item">
              <img src={img6} className="d-block w-100" alt="Slide 6" />
            </div>
            <div className="carousel-item">
              <img src={img7} className="d-block w-100" alt="Slide 7" />
            </div>
            <div className="carousel-item">
              <img src={img8} className="d-block w-100" alt="Slide 8" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>

      <div className="AreasofInterest container"> 
       <h2 className="heading2"> Areas of Interest </h2>
       <p>  We encourage contributions that address a wide range of topics related to mobile studies, including but not limited to: </p>
        
        <p className="subheading"> Mobile Studies </p>
        <ul className="listofint">
          <li> Creator Economy </li>
          <li> The impact of mobile technologies on communication and social connections </li>
          <li> Mobile apps in education, health, and governance </li>
          <li> Mobile media and its societal implications </li>
          <li> Mobile data privacy and security concerns </li>
          <li> The future of mobile infrastructures and networks</li>
          <li> Cultural and ethical considerations in mobile technology adoption</li>
          <li> Mobile literacy and multimodal connectivity</li>
        </ul>

        <p className="subheading"> Cellphilm / Smartphone Filmmaking / Mobile Stories </p>
        <ul className="listofint">

          <li>  Cellphilms as City Films </li>
          <li>  Mobile Aesthetics  </li>
          <li>  Connecting to community through mobile storytelling   </li>
          <li>  Connecting to country through mobile storytelling   </li>
          <li>  Mobile creations </li>
          <li>  Selfies, families, friends and peer-groups</li>
          <li>  Young people for social change</li>
          <li>  Activists groups and NGOs using mobile stories to capture those who have no voice</li>
          <li> Mobile XR</li>


        </ul>
       
      </div>
      <hr></hr>  

      <div className="container">
        <h2 className="heading2"> Format </h2>
        <ul className="listofint">

          <li> Academic presentation (15min) </li>
            <ul className="listofintsub">
              <li>  Creative arts research paper  </li>
              <li>  Design research paper  </li>
              <li>   Qualitative/Quantitate research paper  </li>
            </ul>
          <li> Advocacy paper (XX min) </li>
          <li> Lightening talks (5min) </li>
          <li> Roundtable discussion on mobile studies and mobile creative practice </li>
          <li> Workshop proposal </li>
          <li> Video essays</li>
          <li> Work-in-progress presentations and showcases</li>
          <li> Project and artefact exhibition</li>
          <li> Mobile story /Cellphilm / Smartphone film</li>

            <ul className="listofintsub">
              <li>  A new MINA category spotlighting innovative and smart stories created with smartphones or other pocket cameras and mobile devices. Open to filmmakers, designers, artists, activists and storytellers, this category celebrates short mobile and digital stories (up to 8 minutes) that utilise mobile technology and smartphone filmmaking to craft compelling narratives around connecting to culture, country and communities. We seek entries that blend creativity with visual communication and storytelling ingenuity, showcasing mobile storytelling that inspires, informs, and engages audiences in new ways. Through this category, we aim to explore the intersection of creativity and innovation, promoting stories that engage audiences for social change and/or shape new experiences.  </li>
            </ul>

          </ul>

        
      </div>  
      <hr></hr>  


      <div className="container">
        <h2 className="heading2"> Submission Guidelines </h2>
        <ol className="listofint">
        <li > Abstracts should be kept within 300 words. </li>
        <li> Submissions must be original and not previously presented or published. </li>
        <li> Please follow the APA style, the 7th edition. </li>
        <li> All submissions will undergo a double-blind peer review process. </li>
        </ol> 

      <div class="button-container">
<button class="button">
  Submit Abstract
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>

<button class="button">
  Submit Mobile story /Cellphilm /Smartphone film
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
      </div>
        
       </div>  
       <hr></hr>  


      <div className="container">
        <h2 className="heading2"> Important Dates </h2>  
        <hr></hr> 
        <p>Abstract Submission Deadline:  1st March, 2026</p>
        <hr></hr> 
        <p>Notification of Acceptance:   1st April, 2026</p>
        <hr></hr>
        <p>Join us for this dynamic gathering at the Indian Institute of Technology Hyderabad, where thought leaders from around the globe will share insights, research, and innovations in mobile studies, mobile creative practice and cellphilms. Let us come together to shape the future of mobile connectivity, creativity and collaboration.</p>

      </div>  
      <hr></hr>  

      <div className="container">
        <h2 className="heading2"> Orgnaizers </h2> 
      
      <div className="orgbox">

        <div className="orgimgcontainer">
          <img src={org1} className="orgimg" alt="organizer 1" />
          <img src={org2} className="orgimg" alt="organizer 2" />
          <img src={org3} className="orgimg" alt="organizer 3" />
        </div>


        <div className="qbox">

          <div class="qboxcontent">
          <h4>For more information, please contact us at</h4>
          <p>xiaogexu@zwu.edu.cn, MSchleser@swin.edu.au </p>
          <button class="button">
          contact
          </button>
          </div>

          <div className="timg">
          <img src={timg} className="qboximg" alt="tail image" />
          </div>
          
         
        </div>
      </div>

        <p>We look forward to your submissions and an engaging congress!</p> 
        <p>The 6th MSC Team</p> 

        <ul className="listofnone">
        <li>Anna Chiara Sabatino, University of Salerno, Italy</li>
          <li>Cati Alice, Università Cattolica del Sacro Cuore, Italy</li>
          <li>Claudia A Mitchell, McGill University, Canada</li>
          <li>Dafydd Sills-jones, Auckland University of Technology, New Zealand/Aotearoa</li>
          <li>Deepak John Mathew, Indian Institute of Technology Hyderabad, India</li>
          <li>Habib Moghimi, University of Sydney, Australia</li>
          <li>Leann Brown, McGill University, Canada</li>
          <li>Max Schleser, Swinburne University of Technology, Australia</li>
          <li>Prof. Krishna Sankar Kusuma, AJKMCRC, India</li>
          <li>Shuai Li, Zhejiang Wanli University, China</li>
          <li>Sonali Srivastav, Indian Institute of Technology Hyderabad, India</li>
          <li>Twisha Singh, McGill University, Canada</li>
          <li>Xiaoge Xu, Zhejiang Wanli University, China</li>
          </ul>

        
      </div>  
      <hr></hr>  
    </div>

    <footer>
       © 2025 Mobile Studies Congress. All rights reserved. 
    </footer>
    </>
  )
}

export default App