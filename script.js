// // openai integration 
// require('dotenv').config();



// //api request
// async function fetchCompletion(userMessage) {
//     const apiKey = process.env.OPENAI_API_KEY;
//     const url = 'https://api.openai.com/v1/chat/completions';
//     const headers = {
//         'Authorization': `Bearer ${apiKey}`,'Content-Type': 'application/json'
//     };
//     const data = {
//         model: 'gpt-3.5-turbo',
//         messages: [
//           { role: 'system', content: 'You are a helpful assistant.' },
//           { role: 'user', content: userMessage }
//         ]
//       };

//       //check 
//       try {
//         const response = await axios.post(url, data, { headers });
//         console.log(response.data)
//         const result = response.data.choices[0].message.content;
//         resultElement.textContent = result;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         resultElement.textContent = "Error fetching data. Check console for details.";
//       }
// }

// const userInputElement = document.getElementById('user-input');
// const fetchDataButton = document.getElementById('fetch-data');
// const resultElement = document.getElementById('result');

// // Event listener
// fetchDataButton.addEventListener('click', () => {
//     console.log("click");
//     const userInput = userInputElement.value;
//     fetchCompletion(userInput);
// });