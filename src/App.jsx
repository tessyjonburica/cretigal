import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
function App() {


  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container text-lg-center text-center text-md-center">
          <h1 className="cretigal">
            Cregital designs &amp; <br />builds digital <br />experiences
          </h1>
          <p className="mt-3 ">
            We design, build and launch websites and products that are simple, <br /> beautiful and helps businesses grow.
          </p>
        </div>
      </div>
      <Footer />


    </>
  )
}

export default App
