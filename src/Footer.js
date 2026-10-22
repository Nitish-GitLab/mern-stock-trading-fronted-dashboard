import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img src='/media/logo.svg' alt='Zerodha logo' style={{ width: '50%' }} />
            <p>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className='col'>
            <p>Company</p>
            <a href='/about'>About</a><br />
            <a href='/products'>Products</a><br />
            <a href='/pricing'>Pricing</a><br />
            <a href='/support'>Referral Programme</a><br />
            <a href='/support'>Careers</a><br />
            <a href='/support'>Zerodha.tech</a><br />
            <a href='/support'>Press & Media</a><br />
            <a href='/support'>Zerodha Cares</a><br />
          </div>
          <div className='col'>
            <p>Support</p>
            <a href='/support'>Contact</a><br />
            <a href='/support'>Support Portal</a><br />
            <a href='/support'>Z-Connect Blog</a><br />
            <a href='/support'>List of Charges</a><br />
            <a href='/support'>Download & Resources</a><br />
          </div>
          <div className='col'>
            <p>Account</p>
            <a href='/signup'>Open an Account</a><br />
            <a href='/pricing'>Fund Transfer</a><br />
            <a href='/pricing'>60 Days Challenge</a><br />
          </div>
        </div>
        <div className='mt-5 text-muted' style={{ fontSize: '14px' }}>
          <p>Member of NSE & BSE – SEBI Registration no. INZ000031633. CDSL: Depository Services through Zerodha Securities Pvt. Ltd. – SEBI registration no. IN<br />
             Member of NSE & BSE – SEBI Registration no. INZ000031633. CDSL: Depository Services through Zerodha Securities Pvt. Ltd. – SEBI registration no. IN<br />
             Member of NSE & BSE – SEBI Registration no. INZ000031633. CDSL: Depository Services through Zerodha Securities Pvt. Ltd. – SEBI registration no. IN</p>
          <p>Member of NSE & BSE – SEBI Registration no. INZ000031633. CDSL: Depository Services through Zerodha Securities Pvt. Ltd. – SEBI registration no. IN<br />
             Member of NSE & BSE – SEBI Registration no. INZ000031633. CDSL: Depository Services through Zerodha Securities Pvt. Ltd. – SEBI registration no. IN</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
