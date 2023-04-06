# Counter
um contador que tem duas *[`actions`](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions)* que controlam o seu *state*:

`increment` e `decrement`
```js
export const countSlice = createSlice ({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state)=> {
            state.value += 1
        },
        decrement: (state)=> {
            state.value -= 1
        },
    }
});

```

Sendo o `increment` para adicionar mais 1 na contagem e o `decrement`, para diminuir 1 na contagem.


[`Código base`](https://redux.js.org/introduction/getting-started)
