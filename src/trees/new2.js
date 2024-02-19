import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const tree = mkdir('etc', [
    mkfile('bashrc'),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]);
  
console.log(JSON.stringify(tree, null, " "));;