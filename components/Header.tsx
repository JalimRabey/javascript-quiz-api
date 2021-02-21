import Link from 'next/link';

import Wrapper from 'components/Wrapper';

import { HEADER_LINKS } from 'helpers/constants.json';

const Header = () => (
  <header className="container bg-backgroundColor-900 flex min-w-full py-3">
    <Wrapper className="flex justify-between">
      <Link href="/">
        <a
          className="flex text-textColor items-center hover:text-primary-400 transition-colors duration-300"
          title="Home"
        >
          <img className="w-8" src="/logo.svg" alt="Yellow Javacript logo" />
          <h1 className="font-bold ml-3">Quiz API</h1>
        </a>
      </Link>

      <nav>
        <ul>
          {HEADER_LINKS.map((link) => (
            <a
              key={link.label}
              className="font-bold block self-center text-textColor hover:text-primary-400 transition-colors duration-300"
              href={link.url}
              target={link.targetBlank ? '_blank' : ''}
              rel="noopener noreferrer"
              title={link.title}
            >
              {link.label}
            </a>
          ))}
        </ul>
      </nav>
    </Wrapper>
  </header>
);

export default Header;
