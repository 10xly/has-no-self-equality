# has-no-self-equality
Check if a value has no self equality.
```javascript

const assert = require('assert-fn')
const hasNoSelfEquality = require('has-no-self-equality')

assert(hasNoSelfEquality(NaN))
```
I am pretty sure the only value that doesn't have self equality is `NaN`.