# Fetch with Timeout

This is s simple wrapper for the regular fetch function that allows it to use timeout in miliseconds.

You may use any parameter that you will normally use with the regular fetch

# Installation

```

npm install fetch-timer

```

# Usage
```

const Fetch = require('fetch-timer');

Fetch('https://jsonplaceholder.typicode.com/posts', { timeout: 100 })
    .then(res => res.json())
	.then(res => console.log(res))	
    .catch((e)=> console.log(e))

```