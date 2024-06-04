import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import { useState } from "react";
import { Link } from "react-router-dom";
function App() {

  const handleClick = (link) => {
    window.open(link, '_blank');
  };


  const images = [
    { src: 'src/assets/FBN-website-3Gasicqj.jpg', alt: 'Image 1', title: 'First Bank', description: 'Website, UI/UX', link: 'https://www.firstbanknigeria.com/' },
    { src: 'src/assets/Disha-Pages-Bo9dJRW3.jpg', alt: 'Image 2', title: 'Disha Pages', description: 'Branding, Website, UI/UX, Web App', link: 'https://getdisha.co/pages/' },
    { src: 'src/assets/Hash-Vest-_MPkz2YZ.png', alt: 'Image 3', title: 'Hash', description: 'Branding, Website', link: 'https://www.gethashapp.com/' },
    { src: 'src/assets/Coronation-banking-ML9RD72f.jpg', alt: 'Image 4', title: 'Coronation Bank', description: 'Website', link: 'https://www.coronationmb.com/' },
    { src: 'src/assets/Cregital-TEF-S_6Dkvbf.jpg', alt: 'Image 5', title: 'Tony Elumelu Foundation', description: 'Website', link: 'https://www.tonyelumelufoundation.org/en/' },
    { src: 'src/assets/heirs-holdings-DRmf2pBw.jpg', alt: 'Image 6', title: 'Heir Holdings', description: 'Website', link: 'https://www.heirsholdings.com/' },
    { src: 'src/assets/ARK-Acts-of-Random-Kindness-Bq8twqax.svg', alt: 'Image 7', title: 'ARK', description: 'Branding, Website, UI/UX, Web app', link: 'https://ark.com.ng/' },
    { src: 'src/assets/Zenith-HQ-BNNU0XwH.jpg', alt: 'Image 8', title: 'Zenith Bank', description: 'Website', link: 'https://www.zenithbank.com/' },
  ];
  return (
    <>
      <Navbar />
      <div className="container-fluid animate-from-bottom">
        <div className="container text-lg-center text-center text-md-center mt-5 mb-3">
          <h1 className="cretigal">
            Cregital designs &amp; <br />builds digital <br />experiences
          </h1>
          <p className="mt-3 mb-5">
            We design, build and launch websites and products that are simple, <br /> beautiful and helps businesses grow.
          </p>
        </div>
      </div>


      <div className="container animate-from-bottom">
        <div className="row">
          <div className="row align-items-center animate-from-bottom">

            {images.map((image, index) => (
              <div key={index} className="col-md-6 mb-3 ">
                <a style={{textDecoration: 'none', color: 'black'}} href={image.link} target="_blank" onClick={() => handleClick(image.link)}>
                  <img src={image.src} alt={image.alt} className="img-fluid mb-2" />
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <p style={{ fontWeight: '700' }} className="small-resize">Who are we</p>
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-4"></div>
          <div className="col-lg-7 col-sm-12 col-md-8">
            <p style={{ fontSize: '20px' }}>We are designers, developers, writers, thinkers,
              and problem solvers.  Small enough to be simple and fast, but big enough to
              deliver your project scope at the pace you need. You can learn more about us,
              check the latest on Instagram and Twitter or apply to join our team today.
            </p>
          </div>
        </div>
        <div className="mt-3 mb-2">
          <img src='src/assets/Masonry-DJm0i0D0.jpg' alt='The team' className="img-fluid mb-2" />
        </div>
      </div>
      <Footer />


    </>
  )
}

export default App
