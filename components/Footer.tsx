import Wrapper from 'components/Wrapper';

const Footer = () => (
  <footer className="w-full py-4 text-textColor text-center">
    <Wrapper>
      <p>
        Made By{' '}
        <a
          className="font-bold hover:text-primary-400 transition-colors duration-300"
          href="https://github.com/JalimRabey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jalim Rabey
        </a>
      </p>
    </Wrapper>
  </footer>
);

export default Footer;
