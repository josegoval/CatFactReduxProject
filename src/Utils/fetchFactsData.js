/**
 * Get all facts from api rest formated with visible: true.
 *
 * @return array of facts
 */
const getFacts = async () => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts');
  const toJSON = await response.json();
  return toJSON.all.map((fact) => ({...fact, visible: true}));
};

export {getFacts};
