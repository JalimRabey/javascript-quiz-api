import Link from 'next/link';

interface IEndpointUrlContentProps {
  href: string;
  title?: string;
  url: string;
}

const EndpointUrlContent: React.FC<IEndpointUrlContentProps> = ({
  href,
  title,
  url,
}) => (
  <div className="mt-2 flex flex-col bg-backgroundColor-900 py-2 px-4 w-full">
    <Link href={href}>
      <a
        className=" font-bold hover:text-primary-400 transition-colors duration-300 overflow-x-auto md:overflow-x-hidden flex flex-wrap"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {url}
      </a>
    </Link>
  </div>
);

export default EndpointUrlContent;
