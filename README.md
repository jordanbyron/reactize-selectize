# reactize-selectize

React wrapper for [Selectize.js](https://github.com/selectize/selectize.js).

__Why call this `reactize-selectize` and not `react-selectize`?__

Good question! We would have used `react-selectize` but that's [already taken](https://www.npmjs.com/package/react-selectize). So we settled on `reactize-selectize`, mostly because it is a silly yet memorable name :yum:

__What's the difference between this and `react-selectize`?__

`react-selectize` is a react component "inspired" by `selectize.js`.
`reactize-selectize` is a react wrapper around `selectize.js`. That means that if 
you want to use `selectize.js` throughout your app, including react and non-react
selects, then you can thanks to this library. Yay! :muscle:

## Dependencies

- jQuery
- React
- ReactDOM
- Selectize

## Usage

Assuming you are using ES6 goodness, you can import this library by adding the
following line to the top of your component file:

```js
import Select from "reactize-selectize";
```

You can pass `<option>` elements, and even `<optgroup>` ones, to the `Select` component a few different ways.

First, you can create an array of `<option>` elements, and pass it as a child to the component.

```jsx
const animals = [
  <option value="cat" key={1}>Cat</option>,
  <option value="dog" key={2}>Dog</option>,
  <option value="goat" key={3}>Goat</option>,
  <option value="turtle" key={4}>Turtle</option>,
  <option value="lizard" key={5}>Lizard</option>,
  <option value="snake" key={6}>Snake</option>
];

<Select>
  {animals}
</Select>
```

Of course, you don't need to use arrays. You can nest `<option>` or `<optgroup>` elements inside the component.

```jsx
<Select>
  <optgroup label="Mammals">
    <option value="cat" key={1}>Cat</option>
    <option value="dog" key={2}>Dog</option>
    <option value="goat" key={3}>Goat</option>
  </optgroup>
  <optgroup label="Reptiles">
    <option value="turtle" key={4}>Turtle</option>
    <option value="lizard" key={5}>Lizard</option>
    <option value="snake" key={6}>Snake</option>
  </optgroup>
</Select>
```

You can also use the Selectize API. Add the prop `options` to `Select`, and pass it an object. The following example is adapted from [a Selectize.js example](https://github.com/selectize/selectize.js/blob/master/examples/optgroups.html#L115-L152)

```jsx
<Select
  options={{
    options: [
      { class: 'mammal', value: 'dog', text: 'Dog' },
      { class: 'mammal', value: 'cat', text: 'Cat' },
      { class: 'bird', value: 'duck', text: 'Duck' },
      { class: 'bird', value: 'chicken', text: 'Chicken' },
      { class: 'reptile', value: 'snake', text: 'Snake' },
      { class: 'reptile', value: 'lizard', text: 'Lizard' },
    ],
    optgroups: [
      { value: 'mammal', label: 'Mammal' },
      { value: 'bird', label: 'Bird' },
      { value: 'reptile', label: 'Reptile' }
    ],
    optgroupField: 'class'
  }}
/>
```

You can also pass other options inside the `options` prop. For example, to set a placeholder:

```jsx
<Select
  options={{
    placeholder: "All animals"
  }}
/>
```

Remember, anything inside the `options` prop must be valid options based on the Selectize.js API.

## CSS Styles

Selectize includes a basic stylesheet, and three different themes. Configuring what theme to use is up to the end-user of this component. For example, if using Webpack in your app, you may want to install the package `css-loader`, then call `import 'selectize/dist/css/selectize.css'` where you are using this project's `Select` component.

## Testing

Simply run `npm test`. It'll run Jest for all files under the `src/__tests__/` folder.

## License

See [LICENSE](LICENSE)
