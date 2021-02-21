import NextHead from 'next/head';

interface IHeadProps {
  title?: string;
  favIconUrl?: string;
}

const Head: React.FC<IHeadProps> = ({
  title = 'Javascript API Quiz',
  favIconUrl = '/favicon.ico',
  children,
}) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href={favIconUrl} />
    {children}
  </NextHead>
);

export default Head;
