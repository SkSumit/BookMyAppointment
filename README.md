<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://byapp.herokuapp.com/">
    <img src="frontend/src/Img/byapp2.jpg" alt="Logo">
  </a>

  <h3 align="center">Book Your Appointment</h3>

  <p align="center">
   A booking system for Doctors, Clinics and Laboratories.
    <br />
    <a href="http://byapp.herokuapp.com/"><strong>View Demo</strong></a>
    <br />
    <br />
    <a href=""></a>
    ·
    <a href="https://github.com/SkSumit/BookMyAppointment/issues">Report Bug</a>
    ·
    <a href="https://github.com/SkSumit/BookMyAppointment/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Running](#running)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project
[![Index][product-screenshot1]](http://byapp.herokuapp.com/)
[![Dashboard][product-screenshot]](http://byapp.herokuapp.com/dashboard)

This is a MERN stack booking system built for learning, understanding and enhancing my skills.

Key Features:
* Real Time Updates
* Unit Testing
* CI/CD integration
* Optimized for production built


### Built With
This project was made possible due to 
* React 
* MongoDB
* Express
* NodeJS
* Firebase Authentication 
* Pusher
* Formik
* Bulma




<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

Tools needed to run this project
* npm
* yarn
* nodejs


### Installation

1. You need to have API Keys for [MongoDB Atlas](https://www.mongodb.com/), [Firebase](https://firebase.google.com) and [Pusher](http://pusher.com/)
2. Clone the repo
```sh
git clone https://github.com/SkSumit/BookMyAppointment.git
```
3. Install packages
#### Backend

```bash
cd .\backend\
npm install
```

#### Frontend

```bash
cd .\frontend\
yarn install
```
4. Create two `.env` files, one in `Backend` and other in `Frontend` folder. 
Add your `mongodb atlas` and `pusher` key in the backend .env file , add `firebase` and  ***again*** add `pusher`  keys in the frontend .env file
```JS
const API_KEY = 'ENTER YOUR API';
```




<!-- USAGE EXAMPLES -->
## Running

Backend would be running on PORT 3000

```bash
npm run backend
```
 ***Open new terminal to run front-end***

Frontend would be running on PORT 3001

```bash
npm run frontend
```





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Sumit Kolpekwar  - kolsum24@gmail.com



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Andrew Mead  for  his React Course](https://mead.io/)
* [Beau Carnes for his article](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1)
* [Yup](https://github.com/jquense/yup)
* [Heroku](https://heroku.com/)
* [Paaatterns](https://products.ls.graphics/paaatterns/)
* [Feathericons](https://feathericons.com/)
* [Toastify](https://www.npmjs.com/package/react-toastify)
* [ReadMe Template](https://github.com/othneildrew/Best-README-Template)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/SkSumit/BookMyAppointment/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/SkSumit/BookMyAppointment/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/SkSumit/BookMyAppointment/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/SkSumit/BookMyAppointment/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/SkSumit/BookMyAppointment/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sumitkolpekwar/
[product-screenshot]: frontend/src/Img/byapp.jpg
[product-screenshot1]: frontend/src/Img/byapp1.jpg
