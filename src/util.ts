// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const encode = input =>
  [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap(x => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x === '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, x => `${+x ? '.' : '-'}${x.length}`);

export const decode = input => {
  return input
    .replace(/([.-])(\d+)/g, (match, p1, p2) => (p1 === '.' ? '1'.repeat(+p2) : '0'.repeat(+p2)))
    .match(/(0+|1+)/g)
    .map(el => (el.length === 1 ? '.' : (el.length - 2) / 2))
    .join()
    .split('.')
    .map(el => el.replace(/,/g, ''))
    .reduce((acc, val, i) => {
      if (i % 2 === 0) {
        acc.push(val);
      } else {
        acc = [...acc, [acc[i - 1], val]];
      }
      return acc;
    }, [])
    .slice(1)
    .filter((_, i) => i % 2 !== 1)
    .sort((a, b) => a[1] - b[1])
    .map(el => String.fromCharCode(el[0]));
};
