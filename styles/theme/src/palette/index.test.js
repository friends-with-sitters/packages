import * as palette from '.';

const names = ['clear', 'accent', 'negative', 'neutral', 'positive', 'primary'];

const hues = [200, 300, 400, 500, 600, 700, 800];

describe('Palette', () => {
  names.forEach(name => {
    describe(`Color "${name}"`, () => {
      it('exists', () => {
        expect(palette[name]).toEqual(expect.any(Object));
      });

      hues.forEach(hue => {
        describe(`Hue: "${hue}"`, () => {
          it('is a valid rgb color', () => {
            expect(palette[name][hue].displayable()).toBe(true);
          });

          it('stringifies correctly', () => {
            const rgb = palette[name][hue].toString();
            expect(rgb).toMatch(/^rgba?\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}(, [0-9]{1,3})?\)$/);
          });
        });
      });
    });
  });
});
