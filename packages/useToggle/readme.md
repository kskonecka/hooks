# useToggle

Simple boolean state toggler

> Checkout the [Storybook](https://ct-hooks.netlify.com/?path=/story/usetoggle--readme) demo.

## Installation

```sh
yarn add @charlietango/use-toggle
```

## API

```js
const toggledInitially = false
const [isToggled, toggle] = useToggle(toggledInitially)
```

## Example

```js
import React from 'react'
import useToggle from '@charlietango/use-toggle'

const Component = () => {
  const [isToggled, toggle] = useToggle(true)
  return <button onClick={toggle}>{isToggled}</button>
}

export default Component
```
