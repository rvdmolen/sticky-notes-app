// require('./styles.scss');
//import * as styles from 'styles.scss';

'use strict';

// import Message from "./components/message";
//
// let container = document.querySelector('.main');
// container.textContent = new Message('mate').render();

// export default class Message {
//     constructor(message) {
//         this.message = message;
//     }
//
//     render() {
//         return `Hey ${this.message}. Start using ES6 today!`;
//     }
// }



class Car {

    manufacturer(car) {
        document.write(`I have a nice ${car}`)
    }

}

const bmw = new Car;

bmw.manufacturer('bmw');