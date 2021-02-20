import { NowRequest, NowResponse } from '@vercel/node';

import db from 'db.json';

const DEFAULT_LANG = 'pt-br';

const availableLangs = Object.keys(db);

export default function handler(request: NowRequest, response: NowResponse) {
  const { lang } = request.query;

  if (!lang) {
    return response.status(200).json(db[DEFAULT_LANG]);
  }

  const isLangAvailable = availableLangs.includes(lang as string);

  if (!isLangAvailable) {
    return response
      .status(404)
      .json({ error: true, message: `${lang} is not a available language!` });
  }

  return response.status(200).json(db[lang as string]);
}
