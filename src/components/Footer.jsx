import '../App.css'
function Footer() {
    return (
        <>
            <div class="mt-5 p-4 bg-dark text-white ">
                <div className="container">
                    <p style={{  color: 'white', fontWeight: '600' }} className="resize">Get in touch</p>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 col-md-3"></div>
                        <div className="col-lg-9 col-sm-12 col-md-9">
                            <p className='text-resize'>Contact us to find out how we can help you.
                                If it’s easier you can email us at hello@cretigal.com Download the Cregital brochure.pdf (5mb)
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <div>
                            <p className='text-resize'>© 2024 Cregital Design Agency</p>
                        </div>
                        <div className="d-lg-flex d-sm-flex d-md-flex">
                            <ul>Instagram</ul>
                            <ul>Twitter</ul>
                            <ul>Linkedin</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;