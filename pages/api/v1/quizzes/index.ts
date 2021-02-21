import { NowRequest, NowResponse } from '@vercel/node';

import db from 'db.json';

import { DEFAULT_LANG } from 'helpers/constants.json';

import LanguageServices from 'services/language';

const quizzesHandler = async (request: NowRequest, response: NowResponse) => {
  const { lang } = request.query;

  if (!lang) {
    return response.status(200).json(db[DEFAULT_LANG]);
  }

  const isLangAvailable = LanguageServices.isLangAvailable(lang as string);

  if (!isLangAvailable) {
    return response
      .status(404)
      .json({ error: true, message: `${lang} is not a available language!` });
  }

  return response.status(200).json(db[lang as string]);
};

export default quizzesHandler;
