import Link from 'next/link';

import AttributesTable from 'components/AttributesTable';

import LanguageServices from 'services/language';

import dataAttributes from 'helpers/attributes.json';
import {
  DEFAULT_LANG,
  DEFAULT_RANDOM_QUESTIONS_QUANTITY,
} from 'helpers/constants.json';

const Endpoints = () => (
  <section id="endpoints" className="container mt-8 text-left">
    <h2 className="font-bold text-2xl text-primary-400">Quizzes Endpoints</h2>

    <AttributesTable
      title="Questions Attributes"
      data={dataAttributes.questions}
    />
    <AttributesTable title="Answers Attributes" data={dataAttributes.answers} />

    <ul>
      <li className="text-textColor mt-4">
        <h4 className="font-bold">- Get all questions in {DEFAULT_LANG}</h4>

        <p className="mt-2">
          <i>Get an array with all the questions in {DEFAULT_LANG}</i>
        </p>

        <div className="mt-2 flex flex-col bg-backgroundColor-900 py-2 px-4 w-full">
          <Link href="/api/v1/quizzes">
            <a
              className=" font-bold hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Quizzes"
            >
              https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes
            </a>
          </Link>
        </div>
      </li>

      <li className="text-textColor mt-4">
        <h4 className="font-bold">
          - Get all questions in a specific language
        </h4>

        <p className="mt-2">
          <i>Get an array with all the questions in a specific language</i>
        </p>
        <p>
          <i>
            Allowed Languages:
            {LanguageServices.availableLangs.map(
              (language) => ` "${language}"`
            )}
          </i>
        </p>

        <div className="mt-2 flex flex-col bg-backgroundColor-900 py-2 px-4 w-full">
          <Link href="/api/v1/quizzes?lang=pt-br">
            <a
              className=" font-bold hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Quizzes"
            >
              https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes?lang=$
              {'{LANGUAGE}'}
            </a>
          </Link>
        </div>
      </li>

      <li className="text-textColor mt-4">
        <h4 className="font-bold">
          - Get {DEFAULT_RANDOM_QUESTIONS_QUANTITY} random questions in{' '}
          {DEFAULT_LANG}
        </h4>

        <p className="mt-2">
          <i>
            Get an array with {DEFAULT_RANDOM_QUESTIONS_QUANTITY} random
            questions in {DEFAULT_LANG}
          </i>
        </p>

        <div className="mt-2 flex flex-col bg-backgroundColor-900 py-2 px-4 w-full">
          <Link href="/api/v1/quizzes/random">
            <a
              className=" font-bold hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Quizzes"
            >
              https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes/random
            </a>
          </Link>
        </div>
      </li>

      <li className="text-textColor mt-4">
        <h4 className="font-bold">
          - Get X random questions in {DEFAULT_LANG}
        </h4>

        <p className="mt-2">
          <i>Get an array with X random questions in {DEFAULT_LANG}</i>
        </p>
        <p>
          <i>
            If the quantity requested is bigger than the available questions
            quantity, the API will return all the questions in a random order
          </i>
        </p>

        <div className="mt-2 flex flex-col bg-backgroundColor-900 py-2 px-4 w-full">
          <Link href="/api/v1/quizzes/random?quantity=3">
            <a
              className=" font-bold hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Quizzes"
            >
              https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes/random?quantity=$
              {'{x}'}
            </a>
          </Link>
        </div>
      </li>

      <li className="text-textColor mt-4">
        <h4 className="font-bold">
          - Get X random questions in a specific language
        </h4>

        <p className="mt-2">
          <i>Get an array with X random questions in a specific language</i>
        </p>
        <p>
          <i>
            Allowed Languages:
            {LanguageServices.availableLangs.map(
              (language) => ` "${language}"`
            )}
          </i>
        </p>

        <div className="mt-2 flex flex-col bg-backgroundColor-900 py-2 px-4 w-full">
          <Link href="/api/v1/quizzes/random?quantity=3&lang=pt-br">
            <a
              className=" font-bold hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Quizzes"
            >
              https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes/random?quantity=$
              {'{x}'}&lang=${'{LANGUAGE}'}
            </a>
          </Link>
        </div>
      </li>
    </ul>
  </section>
);

export default Endpoints;
