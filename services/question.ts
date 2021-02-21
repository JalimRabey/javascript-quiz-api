import db from 'db.json';

import GeneralServices from './general';

const getMaxQuestionsOnSelectedLang = (lang: string) => db[lang].length;

const getValidQuestionQuantity = (quantity: number | string, lang: string) => {
  const quantityNumber = Number(quantity);

  const maxQuestionsAvailable = getMaxQuestionsOnSelectedLang(lang);

  const validQuestionQuantity =
    quantityNumber <= maxQuestionsAvailable
      ? quantityNumber
      : maxQuestionsAvailable;

  return validQuestionQuantity;
};

const getRandomQuestions = (quantity: string, lang: string) => {
  const validQuantity = getValidQuestionQuantity(Number(quantity), lang);

  const availableQuestions = db[lang];
  const maxQuestionIndex = availableQuestions.length;

  const questions = [];
  const selectedIndexList = [];

  while (questions.length < validQuantity) {
    const randomIndex = GeneralServices.getRandomIntegerNumber(
      maxQuestionIndex
    );
    const isIndexAlreadyInArray = selectedIndexList.indexOf(randomIndex) !== -1;

    if (!isIndexAlreadyInArray) {
      selectedIndexList.push(randomIndex);
      questions.push(availableQuestions[randomIndex]);
    }
  }

  return questions;
};

export default {
  getRandomQuestions,
};
