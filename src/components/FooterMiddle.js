import React from 'react'

const FooterMiddle = () => {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <button className="back-to-top-button" onClick={handleBackToTop}>
                Back to Top
            </button>
            <div className="amazon-footer">

            </div>
            <footer className="amazon-footer">

                <div className="amazon-footer__container">
                    <div className="amazon-footer__section">
                        <h4>Get to Know Us</h4>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                        </ul>
                    </div>
                    <div className="amazon-footer__section">
                        <h4>Make Money with Us</h4>
                        <ul>
                            <li>Sell on Amazon</li>
                            <li>Sell Under Amazon Accelerator</li>
                            <li>Become an Affiliate</li>
                            <li>Advertise Your Products</li>
                            <li>Self-Publish with Us</li>
                            <li>Host an Amazon Hub</li>
                        </ul>
                    </div>
                    <div className="amazon-footer__section">
                        <h4>Amazon Payment Products</h4>
                        <ul>
                            <li>Amazon Business Card</li>
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div className="amazon-footer__section">
                        <h4>Let Us Help You</h4>
                        <ul>
                            <li>Amazon and COVID-19</li>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Shipping Rates & Policies</li>
                            <li>Returns & Replacements</li>
                            <li>Manage Your Content and Devices</li>
                            <li>Amazon Assistant</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>

                <div className="amazon-footer__divider"></div>
                <div className='w-full flex gap-6 items-center justify-center py-6'>
                    <div>
                        <img width={100} height={100} src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png" />
                    </div>
                    <div className='flex gap-2'>
                        <p className='flex gap-1 items-center justify-center border border-gray-500
                        hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                            English
                        </p>
                    </div>
                    <div className='flex gap-1 items-center justify-center border border-gray-500
                     hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                        <img className='w-6' src='https://www.bing.com/th?id=OIP.4ve4zACsz1LZOlMcCUHGBAHaE8&w=142&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt="flag"/>
                        <p>
                            Egypt
                        </p>
                    </div>
                </div>
            </footer>

            {/* <div>


        <div className="footer-section">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Goodreads</li>
            <li>Book reviews & recommendations</li>
            <li>Audible</li>
            <li>Download Audio Books</li>
            <li>IMDb</li>
            <li>Movies, TV & Celebrities</li>
            <li>Alexa</li>
            <li>Actionable Analytics for the Web</li>
            <li>Shopbop</li>
            <li>Designer Fashion Brands</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Conditions of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Inter7st-Based Ads</li>
          </ul>
          <p>&copy;1996–{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
        </div>

        <div className="amazon-footer__bottom">
          <div className="amazon-footer__bottom-section">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Interest-Based Ads</a>
          </div>
          <div className="amazon-footer__bottom-section">
            &copy; {new Date().getFullYear()} Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div> */}
        </>
    );
}


export default FooterMiddle
