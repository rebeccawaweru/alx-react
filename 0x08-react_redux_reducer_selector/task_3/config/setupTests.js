import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';
import { is } from 'immutable';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });
// expect.extend({
//     toEqualImmutable(received, expected) {
//       const pass = is(received, expected);
//       if (pass) {
//         return {
//           message: () => `expected ${received} not to equal ${expected}`,
//           pass: true,
//         };
//       } else {
//         return {
//           message: () => `expected ${received} to equal ${expected}`,
//           pass: false,
//         };
//       }
//     },
//   });
