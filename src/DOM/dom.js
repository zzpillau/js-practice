

const str = 'I do not fear computers. Computer Science is no more about computers than astronomy is about telescopes. The computer was born to solve problems that did not exist before.'

console.log(str
  .trim()
  .split('.')
  .filter((s) => s.length > 0)
  .map((s) => `<p>${s.trim()}.</p>`)
  .join('\n')
);
