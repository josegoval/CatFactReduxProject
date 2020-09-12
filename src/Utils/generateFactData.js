import {v4} from 'uuid';

/**
 * Generate an uuidv4 identifier.
 *
 * It's in an independent function for possible changes in it.
 * It just requires changing this function.
 */
export const generateFactId = () => {
  return v4();
};
