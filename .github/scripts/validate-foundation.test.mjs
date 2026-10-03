import assert from 'node:assert/strict';
import test from 'node:test';

import {
  parseGitlink,
  parseReadmeIdentity,
  validateFoundation,
} from './validate-foundation.mjs';

const REVISION = '83557732af79bc5360b24102c0e6d264ddc31ab7';
const OTHER_REVISION = 'b3784681d129c8d3d237625d42870802d29e00a2';
const README = `
The current pin is the reviewed Qwen Code \`v0.21.7\` integration at
\`${REVISION}\`. The original baseline is historical.

The expected CLI version is \`0.21.7\`. This verifies the pinned framework.
`;
const TREE_ENTRY = `160000 commit ${REVISION}\tqwen-code\n`;

test('accepts one aligned README, gitlink, and CLI version', () => {
  assert.deepEqual(
    validateFoundation({
      readme: README,
      treeEntry: TREE_ENTRY,
      cliVersion: '0.21.7\n',
    }),
    { revision: REVISION, version: '0.21.7' },
  );
});

test('rejects a stale README revision', () => {
  assert.throws(
    () =>
      validateFoundation({
        readme: README.replace(REVISION, OTHER_REVISION),
        treeEntry: TREE_ENTRY,
        cliVersion: '0.21.7',
      }),
    /does not match qwen-code gitlink/,
  );
});

test('rejects an unexpected CLI version', () => {
  assert.throws(
    () =>
      validateFoundation({
        readme: README,
        treeEntry: TREE_ENTRY,
        cliVersion: '0.22.0',
      }),
    /does not match qwen-code CLI/,
  );
});

test('rejects conflicting or ambiguous README declarations', () => {
  assert.throws(
    () =>
      parseReadmeIdentity(
        README.replace(
          'expected CLI version is \`0.21.7\`',
          'expected CLI version is \`0.20.0\`',
        ),
      ),
    /version declarations disagree/,
  );
  assert.throws(
    () => parseReadmeIdentity(`${README}\n${README}`),
    /exactly one current framework pin declaration/,
  );
});

test('rejects a non-gitlink tree entry', () => {
  assert.throws(
    () => parseGitlink('100644 blob deadbeef\tqwen-code'),
    /must be one commit gitlink/,
  );
});
