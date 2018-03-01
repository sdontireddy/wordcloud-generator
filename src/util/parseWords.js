import gramophone from 'gramophone';

const parseWords = (text, stopWords = []) => {
  return gramophone.extract(text.toLowerCase(), {
    limit: 1000,
    min: 1,
    ngrams: [1],
    score: true,
    stem: true,
    stopWords,
  });
};

export default parseWords;
