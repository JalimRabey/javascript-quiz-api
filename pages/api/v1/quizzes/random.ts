import { NowRequest, NowResponse } from '@vercel/node';

import db from 'db.json';

import { DEFAULT_LANG } from 'helpers/constants.json';

import LanguageServices from 'services/language';
import QuestionServices from 'services/question';

export default function handler(request: NowRequest, response: NowResponse) {
  const { lang, quantity } = request.query;

  const selectedLang = lang ? String(lang) : DEFAULT_LANG;
  const isLangAvailable = LanguageServices.isLangAvailable(selectedLang);

  if (!isLangAvailable) {
    return response
      .status(404)
      .json({ error: true, message: `${lang} is not a available language!` });
  }

  const randomQuestions = QuestionServices.getRandomQuestions(
    quantity as string,
    selectedLang
  );

  return response.status(200).json(randomQuestions);
}
