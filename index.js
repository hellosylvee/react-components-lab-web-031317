const listItem1 = React.createElement('li', {}, 'Agnes');
const listItem2 = React.createElement('li', {}, 'Muriel');
const pText = React.createElement('p', {}, 'Two grannies having the time of their life!');
const pPassengers = React.createElement('p', {}, 'Passengers:');
const list =  React.createElement('ul', {}, [ listItem1, listItem2 ]);

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', { className: 'oldercoaster'}, [ pText, pPassengers, list])
  }
});

// You can also do this:
// const OLderCoaster = React.createClass({
//   render() {
//     return React.createElement('div', { className: 'oldercoaster'}, [
//       React.createElement('p', {}, 'Two grannies having the time of their life!'),
//       React.createElement('p', {}, 'Passengers'),
//       React.createElement('ul', {}, [
//         React.createElement('li', {}, 'Agnes'),
//         React.createElement('li', {}, 'Muriel')
//       ])
//     ])
//   }
// });

class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, 'You shouldn\'t look too far.'),
      React.createElement('p', {}, [
        'Sometimes, the solution is ',
        React.createElement('strong', {}, 'right in front of you.')
      ])
    ]);
  }
}


// var new_array = arr.map(callback[, thisArg])
// arr = [1, 2, 3, 4]
// var arr = arr.map(function(num){
//   return num**2
// })
// [1, 4, 9, 16]

// https://facebook.github.io/react/docs/lists-and-keys.html
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop' }, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {},
        BUTCHER_PRODUCTS.map(meat => React.createElement('li', {}, meat))
      )
    ]);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
