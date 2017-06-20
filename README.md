# reactize-selectize

React wrapper for [Selectize.js](https://github.com/selectize/selectize.js)

## Dependencies

- jQuery
- React
- ReactDOM
- Selectize

## Usage

You can pass `<option>` elements, and even `<optgroup>` ones, to the `Select` component a few different ways.

First, you can create an array of `<option>` elements, and pass it as a child to the component.

```js
const animals = [
  <option value="cat" key={1}>Cat</option>
  <option value="dog" key={2}>Dog</option>
  <option value="goat" key={3}>Goat</option>
  <option value="turtle" key={4}>Turtle</option>
  <option value="lizard" key={5}>Lizard</option>
  <option value="snake" key={6}>Snake</option>
];

<Select>
  {animals}
</Select>
```

Of course, you don't need to use arrays. You can nest `<option>` or `<optgroup>` elements inside the component.

```js
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

```js
<Select
  options={{
    options: [
      { class: 'mammal', value: 'dog', key: 1, name: 'Dog' },
      { class: 'mammal', value: 'cat', key: 2, name: 'Cat' },
      { class: 'bird', value: 'duck', key: 3, name: 'Duck' },
      { class: 'bird', value: 'chicken', key: 4, name: 'Chicken' },
      { class: 'reptile', value: 'snake', key: 5, name: 'Snake' },
      { class: 'reptile', value: 'lizard', key: 6, name: 'Lizard' },
    ],
    optgroups: [
      { value: 'mammal', key: 1 label: 'Mammal' },
      { value: 'bird', key: 2, label: 'Bird' },
      { value: 'reptile', key: 3, label: 'Reptile' }
    ],
    optgroupField: 'class',
    labelField: 'name'
  }}
/>
```

You can also pass other options inside the `options` prop. For example, to set a placeholder:

```js
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