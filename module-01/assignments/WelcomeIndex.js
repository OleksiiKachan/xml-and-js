'use strict';

const $ = (selector) => document.querySelector(selector);

//Display the msg
const displayMsgs1 = (msgs) => {
  let display = ' ';
  msgs.forEach((s) =>{
  display += `<li>${s}</li>`;
  });
  document.getElementById('vlidationMsgs').innerHTML = display;
};


const processEntries = () => {
    const msgs = [];
  
      msgs[msgs.length] = 'My name is Garima Wadhwa';
      displayMsgs1(msgs);

  };

document.addEventListener('DOMContentLoaded', () => {
    $('#display_task').addEventListener('click', processEntries);

  });