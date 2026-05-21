import footerLogo from '../../assets/logo-xl.png'
import Instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import '../../App.css'

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <footer className="pt-20 w-11/12 mx-auto">
        <div className="grid place-items-center text-center">
          <img src={footerLogo} alt="" />
          <p className="text-white pt-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="pt-4 pb-10">
            <h2 className="text-white font-medium">Social Links</h2>
            <div className="flex gap-3 pt-4">
              <img src={Instagram} className="cursor-pointer ease-in-out hover:scale-110 " />
              <img src={facebook} className="cursor-pointer  ease-in-out hover:scale-110 " />
              <img src={twitter} className="cursor-pointer  ease-in-out hover:scale-110 " />
            </div>
          </div>
          <div className="w-full gray pb-7.5">
            <hr className="pt-8" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <div>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <h4>Privacy Policy</h4>
                    <h4>Terms of Service</h4>
                    <h4>Cookies</h4>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;