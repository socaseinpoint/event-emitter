import EventEmitter from './EventEmitter.js';

let emitter = new EventEmitter();
let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let output = document.querySelector('#output');
let btnAddSub = document.querySelector('#btn-add-sub');
let btnRemoveSub = document.querySelector('#btn-remove-sub');
let unsubsctibe = null;

btn.addEventListener('click', () => {
  emitter.emit('event:name-changed', {name: input.value})
});

function subscribe() {
  unsubsctibe = emitter.subscribe('event:name-changed', data => {
    output.innerHTML = `There is ${data.name}`
  });  
}

subscribe();

btnRemoveSub.addEventListener('click', () => {
  if(unsubsctibe) {
    unsubsctibe();
  }
});

btnAddSub.addEventListener('click', () => {
  subscribe();
});
