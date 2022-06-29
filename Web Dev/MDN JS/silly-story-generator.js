// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator

const newStoryButton = document.getElementById('newStoryButton');
newStoryButton.addEventListener('click', generateNewStory);

function generateNewStory() {
  const customName = document.getElementById('customNameField').value;
  const country = document.getElementById('usRadio').checked ? 'US' : 'UK';
  const storyDiv = document.getElementById('storyDiv');

  const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
  const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
  const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
  ];

  const xItem = getRandomItem(insertX);
  const yItem = getRandomItem(insertY);
  const zItem = getRandomItem(insertZ);
  let output = storyText
    .replaceAll(':insertx:', xItem)
    .replace(':inserty:', yItem)
    .replace(':insertz:', zItem);

  if (customName !== '') {
    output = output.replace('Bob', customName);
  }

  if (country === 'UK') {
    const weight = String(Math.round(300 / 14)) + ' stone';
    const temperature = String(Math.round(((94 - 32) * 5) / 9)) + ' centigrade';
    output = output
      .replace('300 pounds', weight)
      .replace('94 fahrenheit', temperature);
  }

  storyDiv.style.visibility = 'visible';
  storyDiv.textContent = output;
}

function getRandomItem(arr) {
  const randInt = Math.floor(Math.random() * arr.length);
  return arr[randInt];
}
