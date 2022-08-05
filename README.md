Using to lib:

```js
const impor = require("request-confrim");
const confrim = impor({
url: "https://vk.com",
options: ["localhost", "post"],
post: [3050]
});
console.log(confrim) // https://vk.com/?localhost=3050&post=3050
```
