import db from 'db.json';

const availableLangs = Object.keys(db);

const isLangAvailable = (lang: string) => availableLangs.includes(lang);

export default {
  isLangAvailable,
};
