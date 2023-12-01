const comments = [
    {
    id: 1,
    authorName: 'Глеб Фильтеровский',
    authorRating: 5404,
    text: 'Присоединяюсь, из трех функций понял только filter!'
  },
  {
    id: 2,
    authorName: 'Иван Редьюсов',
    authorRating: 348,
    text: 'Используйте console.log для отладки и сами все поймете!'
  },
  {
    id: 3,
    authorName: 'Анна Мэп',
    authorRating: 1892,
    text: 'Посмотрите гайды на YouTube, там все объясняется.'
  },
  {
    id: 4,
    authorName: 'Анна Мэп',
    authorRating: 1892,
    text: 'Кстати, использовать console.log — отличная идея!'
  },
  {
    id: 5,
    authorName: 'Иван Редьюсов',
    authorRating: 348,
    text: 'Если вы приложите ревью, нам будет проще вам помочь.'
  },
];


const cb = (acc, comment) => {
    if (Object.hasOwn(acc, comment.authorName)) {
        acc[comment.authorName].push(comment.text);
        return acc;
    }
    return {...acc, [comment.authorName]: [comment.text]};
};

const result = comments.reduce(cb, {});

console.log(result);


