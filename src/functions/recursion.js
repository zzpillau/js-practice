// лучшее объяснение рекурсивного обхода дерева. Обязательно запустить код

const nestedMatryoshka = {
  name: 'matryoshka1',
  canOpen: true,
  children: {
    name: 'matryoshka2',
    canOpen: true,
    children: {
      name: 'matryoshka3',
      canOpen: true,
      children: {
        name: 'matryoshka4',
        canOpen: false,
      },
    },
  },
};

const getAllMatryoshkaNames = (matryoshka) => {
  if (!matryoshka.canOpen) {
    console.log(`матрешка: ${matryoshka.name} - базовый случай`);
    return [matryoshka.name];
  }
  console.log(`матрешка: ${matryoshka.name} - вниз`);
  const result = [matryoshka.name, ...getAllMatryoshkaNames(matryoshka.children)];
  console.log(`матрешка: ${matryoshka.name} - вверх`);
  console.log('result ===', result);
  return result;
}

console.log(getAllMatryoshkaNames(nestedMatryoshka));

