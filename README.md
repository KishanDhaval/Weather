# Weather Application 🌤️

"Compant": CODTECH IT SOLUTIONS

"NAME" : KISHAN PRAJAPATI

"INTERN ID" : CT12DRH

"DOMAIN": MERN STACK

"DURATION": 8 WEEKS

"MENTER": NEELA SANTOSH

for deploy on github page

 ```
    1  in vite.config.js
        base: '/whether' <-- whether is repo name 
    2  in package.json
          "homepage": "https://KishanDhaval.github.io/whether",
    3  npm i gh-pages
    4  in package.json , in script
        "preview": "vite preview",
        "predeploy": "npm run build",
        "deploy":"gh-pages -d dist"
    5 npm run deploy
```

This is a simple and interactive Weather Application built using React and the OpenWeather API. It allows users to search for any city and fetch real-time weather details such as temperature, humidity, and wind speed. The design is sleek and responsive, providing a great user experience.

---

## Features ✨

- **Search Weather by City:** Enter the name of a city to retrieve current weather details.
- **Weather Details:** Displays:
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (m/s)
  - Weather Icon (condition-specific)
- **Real-Time Updates:** Fetches live weather data from the OpenWeather API.
- **User-Friendly Interface:** A clean and responsive design optimized for both desktop and mobile devices.

---

## Technologies Used 💻

- **Frontend:**
  - React.js
  - Tailwind CSS for styling
- **API:**
  - OpenWeather API
- **Icons:**
  - `react-icons` for search icon
  - Weather condition icons from OpenWeather

---

## Installation and Setup 🛠️

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

    ```

![Image](https://github.com/user-attachments/assets/29c600a7-2849-4455-afdc-e317782ea429)
![Image](https://github.com/user-attachments/assets/30af4085-3b03-4953-a38c-3440cb5c80fb)
