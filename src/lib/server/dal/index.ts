
import * as users from './users';
import * as roles from './roles';
import * as projects from './projects';

/**
 * Om het aantal import statements te beperken en de code overzichtelijk te houden, groeperen we alle dal functies in
 * dit bestand.
 * We exporteren alle named exports opnieuw zodat we iets als `import {signInOrRegister} from '@dal'`
 * kunnen gebruiken.
 * Let op, hiervoor moet de '@dal' alias wel correct geconfigureerd zijn in tsconfig.json.
 */
export * from './users';
export * from './roles';
export * from './projects';

/**
 * We voorzien hier een default export met alle actions in de volledige applicatie.
 * Aangezien we op verschillende plaatsen in de applicatie gebruik maken van functies met dezelfde naam, is het handig
 * als we die functies niet altijd moeten importen met naam, maar wel als een object dat alle functies in één laag
 * groepeert.
 */
export default {
  ...users,
  ...roles,
  ...projects,
};
