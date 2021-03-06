import { assert } from 'chai';
import { getMinimumVertices } from '../minimum_vertices_to_traverse_directed_graph';

describe('Minimum Vertices to Traverse Directed Graph', () => {
  const testCases = [
    [
      //      0  1  2  3
      //    0[1, 0, 0, 0]
      //    1[0, 0, 1, 0]
      //    2[1, 0, 0, 1]
      //    3[0, 1, 0, 0]
      [[0, 0], [1, 2], [2, 0], [2, 3], [3, 1]],
      4,
      [1],
    ],
    [
      //      0  1  2  3
      //    0[0, 1, 0, 0]
      //    1[1, 0, 0, 0]
      //    2[0, 1, 0, 1]
      //    3[0, 0, 1, 0]
      [[0, 1], [1, 0], [2, 1], [2, 3], [3, 2]],
      4,
      [2],
    ],
    [
      //      0  1  2  3
      //    0[0, 1, 0, 0]
      //    1[1, 0, 0, 0]
      //    2[0, 1, 0, 0]
      //    3[0, 1, 1, 0]
      [[0, 1], [1, 0], [2, 1], [3, 1], [3, 2]],
      4,
      [3],
    ],
    [
      //      0  1  2  3  4  5  6  7  8  9
      //    0[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      //    1[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      //    2[0, 0, 0 ,0, 0, 0, 0, 0, 0, 1]
      //    3[0, 0, 0, 1, 0, 1, 0, 1, 0, 0]
      //    4[0, 0, 0, 0, 0, 0 ,0, 0, 1, 0]
      //    5[0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
      //    6[0, 0, 0, 0, 0, 0, 1, 0, 0 ,0]
      //    7[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
      //    8[0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
      //    9[0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
      [[2, 9], [3, 3], [3, 5], [3, 7], [4, 8], [5, 8], [6, 6], [7, 4], [8, 7], [9, 3], [9, 6]],
      10,
      [0, 1, 2],
    ],
  ];

  testCases.forEach(([edges, n, expected], index) => {
    it(`should get the minimum vertices for test case ${index}`, () => {
      const actual = getMinimumVertices(edges, n);
      assert.deepEqual(actual, expected);
    });
  });
});
