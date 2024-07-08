function getAudioDiv(i, fileNames) {
  console.log("name=" + i);
  const audioDiv = `<div>
      <table>
        <h3>Excerpt ${i}</h3>
        <tr>
          <td>Original:</td>
          <td>
            <audio controls>
              >
              <source src="${fileNames[0]}" />
            </audio>
          </td>
        </tr>
        <tr>
          <td>Model 1:</td>
          <td>
            <audio controls>
              >
              <source src="${fileNames[1]}" />
            </audio>
          </td>
        </tr>
        <tr>
          <td>Model 2:</td>
          <td>
            <audio controls>
              >
              <source src="${fileNames[2]}" />
            </audio>
          </td>
        </tr>
        <tr>
          <td>Model 3:</td>
          <td>
            <audio controls>
              >
              <source src="${fileNames[3]}" />
            </audio>
          </td>
        </tr>
      </table>
    </div>

    <br />
  `;
  return audioDiv;
}

function getRandomNumbers(low, high, count) {
  const numbers = [...Array(10).keys()].slice(low, high);
  let selectedNumbers = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const selectedNumber = numbers.splice(randomIndex, 1)[0];
    selectedNumbers.push(selectedNumber);
  }

  return selectedNumbers;
}

let QUESTION_COUNT = 2;
let fileNames;

fetch("file_names.json")
  .then((res) => res.json())
  .then((data) => {
    fileNames = data;
    // console.log(fileNames);
    numbersSelected = getRandomNumbers(0, 9, QUESTION_COUNT);
    console.log(numbersSelected);
    for (let i = 0; i < QUESTION_COUNT; i++) {
      const div = getAudioDiv(
        numbersSelected[i] + 1,
        fileNames[numbersSelected[i]]
      );
      document.getElementById("audio-container").innerHTML += div;
    }
  });
