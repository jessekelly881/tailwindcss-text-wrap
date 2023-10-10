tailwindcss plugin for css text-wrap

```bash
npm install -D tailwindcss-text-wrap
```

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-text-wrap'),
  ],
}
```

Usage text-{balance | stable | ...}

```html
<h1 class="text-balance">Title</h1>
```