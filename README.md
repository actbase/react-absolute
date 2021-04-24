# react-absolute

- [react-absolute](#react-absolute)
- [What is react-absolute](#what-is-react-absolute)
- [install](#install)
- [Getting Started / Useage](#getting-started--useage)
  - [preconfig for using.](#preconfig-for-using)
  - [useage](#useage)
- [Interfaces & methods](#interfaces--methods)

# What is react-absolute

As already known React is very powerful framework for development. 
In JSX Struct we don't need to learn new feature.
Developers sometimes should make some dependent component without main render block.
We know some how appearencing custom Component on any time and any point. If you want using react js more powerfull should consider using our "react-absolute" solution. 

# install

- using npm
``` 
npm install @actbase/react-absolute;
```

- u sing yarn
```
yarn add @actbase/react-absolute;
```

# Getting Started / Useage

## preconfig for using.
- On very first entry point. index.js or app.js 
- Make sure wrapping with Absolute

```
import Absolute from '@actbase/react-absolute';

const App = ()=>{
  return (
    <Absolute>
      {/* rendered components before. */}
    </Absolute>
  )
}
export App;
```

## useage 

- using with render block
```
import Absolute from '@actbase/react-absolute';

const SomeComponent = ()=>{
  return (
    <Absolute.Children style={{}}>

    </Absolute.Children>
  )
}
```

- using with event function.

```
<SomeEventProvider someEventHandler={()=>{
  // adding absolute on your purpose.
  const handler = Absolute.add(
    <ToBeGlobalComponentYouHave 
    />
  );

  // remove.
  handler.remove();
}} />
```

# Interfaces & methods

- Methods.

- add

blahblah
