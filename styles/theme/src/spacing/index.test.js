import * as Spacing from '.';

const expectedNumber = expect.any(Number);

describe('Spacing', () => {
  it('is the correct shape', () => {
    expect(Spacing).toEqual(
      expect.objectContaining({
        gutter: expectedNumber,
        typography: expect.objectContaining({
          captions: expect.objectContaining({
            xl: expectedNumber,
            l: expectedNumber,
            m: expectedNumber,
          }),
          headings: expect.objectContaining({
            xl: expectedNumber,
            l: expectedNumber,
            m: expectedNumber,
            s: expectedNumber,
          }),
          text: expect.objectContaining({
            l: expectedNumber,
            m: expectedNumber,
            s: expectedNumber,
            xs: expectedNumber,
          }),
        }),
        units: expect.objectContaining({
          0: expectedNumber,
          1: expectedNumber,
          2: expectedNumber,
          3: expectedNumber,
          4: expectedNumber,
          5: expectedNumber,
          6: expectedNumber,
          7: expectedNumber,
          8: expectedNumber,
          9: expectedNumber,
        }),
      })
    );
  });
});
