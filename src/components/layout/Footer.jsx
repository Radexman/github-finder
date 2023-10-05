const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer footer-center bg-gray-700 p-10 text-primary-content'>
      <p>Github Finder Copyright &copy; {currentYear} All rights reserved</p>
    </footer>
  );
};

export default Footer;
