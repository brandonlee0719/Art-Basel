const Footer = () => {
  return (
    <footer className="bg-white py-10 bg-black uppercase text-xs lg:text-sm relative z-10">
      <div className="container-fluid px-6 xl:px-12">
        <div className="footer-bottom lg:flex items-center justify-between">
          <div className="footer-left flex items-center lg:justify-start justify-center mb-10 lg-mb-0">
            <img src="./assets/images/footer-logo.svg" alt="Footer Logo" />
            <p className="hidden sm:block ml-6 lg:ml-16">
              © 2022 VICE MEDIA GROUP
            </p>
          </div>

          <div className="footer-right">
            <ul className="flex items-center flex-col sm:flex-row sm:space-x-10 lg:justify-start justify-center">
              <li className="mb-4 sm:mb-0"><a href="https://vice-web-statics-cdn.vice.com/privacy-policy/en_us/page/privacy-policy.html" target="_blank">Privacy Policy</a></li>
              <li><a href="https://www.vicemediagroup.com/" target="_blank"></a>About vice</li>
            </ul>

            <p className="sm:hidden text-center mt-12">
              © 2022 VICE MEDIA GROUP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
