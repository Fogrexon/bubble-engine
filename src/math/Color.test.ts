import { Color } from './Color';

const expectColor = (result: Color, r: number, g: number, b: number, a?: number) => {
  expect(result.r).toBe(r);
  expect(result.g).toBe(g);
  expect(result.b).toBe(b);
  if (a) expect(result.a).toBe(a);
};

const expectCloseColor = (result: Color, r: number, g: number, b: number, a?: number) => {
  expect(result.r).toBeCloseTo(r);
  expect(result.g).toBeCloseTo(g);
  expect(result.b).toBeCloseTo(b);
  if (a) expect(result.a).toBeCloseTo(a);
};

test('正常にColorインスタンスが作られるか', () => {
  const blankColorInstance = new Color();
  const colorInstance = new Color(1, 0.5, 0.3, 0.1);
  const opacityColorInstance = new Color(1, 0.5, 0.3);

  expectColor(blankColorInstance, 0, 0, 0, 1);

  expectColor(colorInstance, 1, 0.5, 0.3, 0.1);

  expectColor(opacityColorInstance, 1, 0.5, 0.3, 1);
});

test('正常に値がセットされるか', () => {
  const instance = new Color();
  instance.set(0.4, 0.6, 0.2);

  expectColor(instance, 0.4, 0.6, 0.2);

  instance.setFromHex(0x4d9933);
  expectCloseColor(instance, 0.30196078431372547, 0.6, 0.2);
});

test('算術系', () => {
  const color1base = new Color(0.3, 0.4, 0.5, 0.6);
  const color2base = new Color(0.2, 0.3, 0.4, 0.5);

  let color1 = color1base.clone();
  const color2 = color2base.clone();

  color1.add(color2);
  expectColor(color1, 0.5, 0.7, 0.9, 1.1);

  color1 = color1base.clone();
  color1.sub(color2);
  expectColor(color1, 0.1, 0.1, 0.1, 0.1);

  color1 = color1base.clone();
  color1.multiply(color2);
  expectColor(color1, 0.06, 0.12, 0.2, 0.3);

  color1 = color1base.clone();
  color1.addScalar(0.1);
  expectColor(color1, 0.4, 0.5, 0.6, 0.7);

  color1 = color1base.clone();
  color1.subScalar(0.1);
  expectColor(color1, 0.2, 0.3, 0.4, 0.5);

  color1 = color1base.clone();
  color1.multiplyScalar(0.1);
  expectColor(color1, 0.03, 0.04, 0.05, 0.06);

  color1 = color1base.clone();
  color1.lerp(color2, 0.5);
  expectColor(color1, 0.25, 0.35, 0.45, 0.55);
});

test('正常にHSLに変換されるか', () => {
  const color = new Color(0.3, 0.6, 0.2);
  const hsv = color.toHSL();

  expect(hsv.h).toBeCloseTo(0.3333333333333333);
  expect(hsv.s).toBeCloseTo(0.6666666666666666);
  expect(hsv.l).toBeCloseTo(0.6);

  const color2 = new Color();
  color2.setFromHSL(hsv.h, hsv.s, hsv.l);
  expectColor(color2, 0.3, 0.6, 0.2);

  const color3 = new Color();
  const color4 = new Color();

  color3.setFromHSL(0.3333333333333333, 0.6666666666666666, 0.6);
  color4.setFromHSL(0.5, 0.5, 0.5);

  color3.lerpHSL(color4, 0.5);
  const hsv2 = color3.toHSL();
  expect(hsv2.h).toBeCloseTo(0.41666666666666663);
  expect(hsv2.s).toBeCloseTo(0.5833333333333333);
  expect(hsv2.l).toBeCloseTo(0.55);
});

test('正常にクローンされるか', () => {
  const instance = new Color(0.3, 0.6, 0.2);

  const cloned = instance.clone();

  expectColor(cloned, 0.3, 0.6, 0.2);
});

test('正常にコピーされるか', () => {
  const color = new Color(0.3, 0.6, 0.2);
  const color2 = new Color().copy(color);

  expectColor(color2, 0.3, 0.6, 0.2);
});

test('正常に比較されるか', () => {
  const color = new Color(0.3, 0.6, 0.2);
  const color2 = new Color(0.3, 0.6, 0.2);
  const color3 = new Color(0.3, 0.6, 0.1);

  expect(color.equals(color2)).toBe(true);
  expect(color.equals(color3)).toBe(false);
});

test('正常に文字列化されるか', () => {
  const color = new Color(0.3, 0.6, 0.2);
  const color2 = new Color(0.3, 0.6, 0.2, 0.5);

  expect(color.toString()).toBe('rgba(77, 153, 51, 1)');
  expect(color2.toString()).toBe('rgba(77, 153, 51, 0.5)');
});