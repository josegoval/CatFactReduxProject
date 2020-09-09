/**
 * Get all facts from api rest.
 *
 * return: array
 */
const getFacts = async () => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts');
  const toJSON = await response.json();
  return toJSON.all;
};

export {getFacts};
