import Link from 'next/link';

const BaseUrl = () => (
  <section id="base-url" className="container mt-8 text-left">
    <h2 className="font-bold text-2xl text-primary-400">Base Url</h2>

    <div className="mt-2 flex bg-backgroundColor-900 py-2 px-4 w-full">
      <Link href="/api/v1">
        <a
          className="text-textColor font-bold hover:text-primary-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          title="Base url"
        >
          https://javascript-quiz-api-jalimrabey.vercel.app/api/v1
        </a>
      </Link>
    </div>
  </section>
);

export default BaseUrl;
