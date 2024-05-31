import gt from '../src/gt.js';

test('gt', () => {
  expect(gt(0, 0)).toBe(false);
  expect(gt(1, 0)).toBe(true);
  expect(gt(-3, 1)).toBe(false);
});


const stringify = (value, depth, replacer = '    ') => {
    if (!_.isObject(value)) {
      return `${value}`;
    }
    const keyIndent = replacer.repeat(depth + 1);
    const bracketIndent = replacer.repeat(depth);
    const lines = Object.entries(value)
      .map(([key, val]) => `${keyIndent}${key}: ${stringify(val, depth + 1)}`);
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
};




) основная которая дерево обходит. ее и экспортируем как форматер. Дополнительная - которая значение форматирует

2) по факту, нужно завести функцию форматирования значения. Если значение примитив - то возвращаем его как есть строкой.

Если объект - собирает записи внутри этого объекта (пары ключ/значение), и для каждой записи делаем строку.


const formatValue = (values, depth, indent) => {
  if (_.isObject(values)) {
    const objectIndent = makeIndent(indent, depth + 1);
    const objectContent = Object.entries(values)
      .map(([key, value]) => `${objectIndent}${key}: ${formatValue(value, depth + 1)}`)
      .join('\n');
    return `{\n${objectContent}\n${makeIndent(depth)}}`;
  }
  return `${values}`;
};


const formatValue = (values, depth) => {
  if (_.isObject(values)) {
    const objectIndent = makeIndent(depth + 1);
    const objectContent = Object.entries(values)
      .map(([key, value]) => `${objectIndent}${key}: ${formatValue(value, depth + 1)}`)
      .join('\n');
    return `{\n${objectContent}\n${makeIndent(depth)}}`;
  }
  return `${values}`;
};

Теперь в основной функции обхода дерева - в строке, где нам нужно подставить значение, мы значение форматируем через вызов нашей функции. 
