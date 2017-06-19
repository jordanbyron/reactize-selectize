# reactize-selectize

React wrapper for [Selectize.js](https://github.com/selectize/selectize.js)

## Dependencies

- jQuery
- React
- ReactDOM
- Selectize

## Usage

Here is an example:

```js
const workers = [
  <option value={1} key={1}>Hunter Stevens</option>,
  <option value={2} key={2}>Jordan Byron</option>
];

<Select
  value=""
  onChange={(e) => console.log(e.target.value, e.target.innerText)}
  className="form-control"
  name="workers"
  style={{ width: 300 }}
  data-include-blank
  options={{
    placeholder: 'All Workers'
  }}
>
```

## CSS Styles

Selectize includes a basic stylesheet, and three different themes. Configuring what theme to use is up to the end-user of this component. For example, if using Webpack in your app, you may want to install the package `css-loader`, then call `import 'selectize/dist/css/selectize.css'` where you are using this project's `Select` component.

## Testing

Simply run `npm test`. It'll run Jest for all files under the `__tests__` folder.

## License

See [LICENSE](LICENSE)