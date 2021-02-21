import Link from 'next/link';

import AttributesTable from 'components/AttributesTable';
import EndpointUrlContent from 'components/Endpoints/components/EndpointUrlContent';

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

        <EndpointUrlContent
          href="/api/v1/quizzes"
          url="https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes"
        />
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

        <EndpointUrlContent
          href="/api/v1/quizzes?lang=pt-br"
          url="https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes?lang=${LANGUAGE}"
        />
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

        <EndpointUrlContent
          href="/api/v1/quizzes/random"
          url="https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes/random"
        />
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

        <EndpointUrlContent
          href="/api/v1/quizzes/random?quantity=3"
          url="https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes/random?quantity=$
          {x}"
        />
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

        <EndpointUrlContent
          href="/api/v1/quizzes/random?quantity=3&lang=pt-br"
          url="https://javascript-quiz-api-jalimrabey.vercel.app/api/v1/quizzes/random?quantity=$
              {x}&lang=${LANGUAGE}"
        />
      </li>
    </ul>
  </section>
);

export default Endpoints;
