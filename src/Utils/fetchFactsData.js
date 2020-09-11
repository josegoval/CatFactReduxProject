/**
 * Get all facts from api rest formated with visible: true.
 *
 * I get only 30 from database for better yield on flatlist.
 *
 * @return array of facts
 */
const getFacts = async () => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts');
  const toJSON = await response.json();
  return toJSON.all.slice(0, 30).map((fact) => ({...fact, visible: true}));
};

export {getFacts};
