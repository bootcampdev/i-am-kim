const portfolio = [
    {
      "id": 1,
      "name": "Moody",
      "image": `${process.env.PUBLIC_URL}/images/moody.jpg`,
      "description": "Capture your daily diary entries and record your mood with a star indicator. Diary entries includes, have you eaten today, are you with people and have you taken any medications? These factors along with your mood rating are displayed graphically for you to analyze your metrics and trends.",
      "githubsite": "https://github.com/bootcampdev/Mood-Tracker-App-Project-2",
      "deploymentsite": "https://calm-castle-04071.herokuapp.com/",
      "features": [
          "Sequelize MySql, ",
          "chart.js and Hanblebars.js, ",
          "Node and Express Server, ",
          "Deployment to Heroku Server"
            ]
    },
    {
      "id": 2,
      "name": "Beer Gourmet",
      "image":  `${process.env.PUBLIC_URL}/images/beer.jpg`,
      "description": "Thirsty and hungry? Look no further than this site to select any beer with a foodie side! Search for your favorite beers from a selection of malts, hops or flavors. Hungry, no problem. A food-side is provided including the resturant venue.",
      "githubsite": "https://github.com/jenryval/Beer-Gourmet",
      "deploymentsite": "https://jenryval.github.io/Beer-Gourmet/",
      "features": [
        "Foundation Framework, ",
        "Module popup window, ",
        "API calls to Punk API and Spoonacular, ",
        "GitHub team work, "
          ]
    },
    {
        "id": 3,
        "name": "Weather Dashboard",
        "image": `${process.env.PUBLIC_URL}/images/weather.jpg`,
        "description": "The Weather Dashboard demostrates the use of the OpenWeather API to fetch the current and forecasted weather for the city selected. The last city searched is saved in local storage. CSS is dynamically updated to show weather conditions with representative icons.",
        "githubsite": "https://github.com/bootcampdev/weather-dashboard",
        "deploymentsite": "https://bootcampdev.github.io/weather-dashboard/",
        "features": [        
          "Use of local storage, ",
          "API call to OpenWeather, ",
          "Dynamic update to CSS"
            ]
      },
      {
        "id": 4,
        "name": "Code Quiz Challenge",
        "image": `${process.env.PUBLIC_URL}/images/quiz.jpg`,
        "description": "Test your Javascript knowledge with this timed quiz and assessment! Every wrong answer cost you 10 seconds and is deducted from the timer. Hurry answer before you run out of time. Score is kept to check your improvements.",
        "githubsite": "https://github.com/bootcampdev/code-quiz-challenge",
        "deploymentsite": "https://bootcampdev.github.io/code-quiz-challenge/",
        "features": [        
          "Timer, ",
          "jQuery, ",
          "Use of input types"
            ]
      },
      {
        "id": 5,
        "name": "Employee Lookup",
        "image": `${process.env.PUBLIC_URL}/images/employee.jpg`,
        "description": "Demonstration the use of the inquirer module and building classes with inheritance. Web page is dynamically created from the user inputs and prompts.",
        "githubsite": "https://github.com/bootcampdev/code-quiz-challenge",
        "deploymentsite": "https://bootcampdev.github.io/code-quiz-challenge/",
        "features": [        
          "Classes and class extension, ",
          "Module inquirer-recursive, ",
          "Use of input types"
            ]
      }
  ]

  export default portfolio

