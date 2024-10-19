// @ts-check

// BEGIN (write your solution here) (write your solution here)
const render = (state, items, filters) => {

  console.log('STARTSTARTSTARTSTARTSTARTSTARTSTARTSTARTSTARTSTARTSTARTSTA')
      console.log(filters);

   const filt =  items
    .filter((item) => {
      // console.log(item)
    // const {processor, memory, frequency} = item;
    // const {processorValue, memoryValue, frequencyMin, frequencyMax} = state;
    const filterParams = Object.entries(filters);
    console.log('filterParams', filterParams)

    console.log('item.frequency', item.frequency)
    console.log('state.frequencyMin', state.frequencyMin)
    console.log('state.frequencyMax', state.frequencyMax)
    console.log('min', item.frequency >= state.frequencyMin)
    console.log('max', item.frequency <= state.frequencyMax)

    // const frMin = item.frequency >= Number(state.frequencyMin) && Number(state.frequencyMin) !== 0;
    // const frMax = item.frequency <= Number(state.frequencyMax) && Number(state.frequencyMax) !== 0;
    const fBalance = (freq, min, max) => {
      let result;
      if (min === 0 && max > 0) {
        result = freq <= max;
      }
      if (min > 0 && max === 0) {
        result = freq >= min;
      }
      if (min > 0 && max > 0) {
        result = (freq > min) && (freq < max);
      }

      return result;
    }

    const compares = {
    processor: item.processor === state.processorValue,
    memory: item.memory === Number(state.memoryValue),
    frequency: fBalance(item.frequency, Number(state.frequencyMin), Number(state.frequencyMax)),
    };

    console.log()
    console.log()

    return filterParams.every(([param,]) => compares[param])



    


    
      // console.log('forEach')

      // console.log(param, value)
      // console.log(compares[param])



    // return !!item;


    })
    .map(({model}) => model)


    console.log('filt', filt)

}


export default (items) => {

  const state = {
    processorValue: '',
    memoryValue: '',
    frequencyMin: 0,
    frequencyMax: 0,
  };

  const filters = {}


  const selectors = [
    { element: document.querySelector('select[name="processor_eq"]'),
      event: 'change',
      stateKey: 'processorValue',
    },
    { element: document.querySelector('select[name="memory_eq"]'),
      event: 'change',
      stateKey: 'memoryValue',
    },
    { element: document.querySelector('input[name="frequency_gte"]'),
      event: 'input',
      stateKey: 'frequencyMin',
    },
    { element: document.querySelector('input[name="frequency_lte"]'),
      event: 'input',
      stateKey: 'frequencyMax',
    },
  ];

  const getCategoryName = (element, separator) => {
    const attribute = element.getAttribute('name');
    const substrEndIndex = attribute.indexOf(separator);
    return attribute.slice(0, substrEndIndex);
  }
  

  const addEvent = (selector) => {
    const {element, event, stateKey} = selector
    return element.addEventListener(event, (e) => {
      const target = e.target.value;
      state[stateKey] = target;
      const categoryName = getCategoryName(element, '_');
      filters[categoryName] = true;
      console.log(state);
      console.log(filters);

      render.call(null, state, items, filters);
    })
  };

  selectors.forEach((selector) => addEvent(selector));
};
// END
