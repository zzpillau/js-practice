import 'whatwg-fetch';

export default () => {
  // BEGIN (write your solution here)

 
  const container = document.documentElement;

  const handler = 

  container.addEventListener('input', (e) => {
    const path = e.target.dataset.autocomplete;

    const groupName = e.target.dataset.autocompleteName;

    const inputValue = e.target.value;

    const render = (collection, ul) => {

      const itemsContainer = document.createElement('ul');

      if (!collection.length) {
        const newLi = document.createElement('li');
        newLi.textContent = 'Nothing'
        itemsContainer.append(newLi)
      }
      collection.forEach((el) => {
        const newLi = document.createElement('li');
        newLi.textContent = el;
        itemsContainer.append(newLi);
      })

      ul.innerHTML = itemsContainer.innerHTML;
    };

    const localHost = window.location.origin;

    const url = new URL(path, localHost);
    url.searchParams.append('search', inputValue)

    const getData = (url, listEl) => {
    return fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          render(data, listEl);
        return data;
        })
        .catch((error) => console.log(error));
    };

    const list = document.querySelector(`ul[data-autocomplete-name="${groupName}"]`);

    getData(url, list);

  });

  // END
};
