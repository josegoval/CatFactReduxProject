/**
 * Search a fact id in the facts array given.
 * @param {String} idOfFactToFind
 * @param {Array} facts
 * @returns true if contains it, false if not.
 */
const findFact = (idOfFactToFind, facts) => {
  return facts.some((fact) => (fact ? fact._id === idOfFactToFind : false));
};

export {findFact as default};
