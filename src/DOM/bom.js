const solution = (href) => {
  window.location.href = href;
  const { userAgent } = window.navigator;
  const [agentName] = userAgent.split(' ');
  return `${agentName} ${window.location.href}`;
};

console.log(solution('https://hexlet.io'));

