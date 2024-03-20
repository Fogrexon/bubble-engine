import * as constants from 'constants';
import {UndirectedTable} from '../../util';
import {HitTest} from './HitTest';
import {boxBoxHitTest} from './boxBoxHitTest';

const availableShapes = ['box'];
export const testerTable = new UndirectedTable<string[], HitTest | null>(
  availableShapes, null
);

testerTable.set('box', 'box', boxBoxHitTest as HitTest);
