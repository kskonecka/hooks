# useElementSize

Measure the size of a DOM element using ResizeObserver

> Checkout the [Storybook](https://ct-hooks.netlify.com/?path=/story/useelementsize--readme) demo.

## Installation

```sh
yarn add @charlietango/use-element-size
```

```json
{
  "transformIgnorePatterns": ["<rootDir>/node_modules/(?!@juggle/)"]
}
```

Alternatively, you could setup it as library that should be mocked.

## API

```js
const [ref, size] = useElementSize()
```

The hook returns an Array with a `ref` function, and the measured `size`.
Assign the `ref` to the element you want to measure.

## Example

```js
import React from 'react'
import useElementSize from '@charlietango/use-element-size'

const Component = () => {
  const [ref, size] = useElementSize()
  return (
    <div ref={ref}>
      <pre>
        <code>{JSON.stringify(size, null, 2)}</code>
      </pre>
    </div>
  )
}

export default Component
```
