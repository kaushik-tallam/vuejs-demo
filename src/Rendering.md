
```jsx

new Vue({
  name: 'JSXExample',
  render: function() {
    return <h1>This is just like react!</h1>
  }
});

```

```jsx

new Vue({
  name: 'JSXExample',
  render: function (createElement) {
    return createElement('h1', 'This is just like React.createElement!');
  }
});

```

```jsx

new Vue({
  name: 'VueExampl',
  template: '<h1>This is just normal vue!</h1>'
});

```

A template compiler is required to convert templates to render functions. [See this](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler#readme).



```jsx

<template>
  <h1>This is SFC vue!</h1>
</template>
<script>
export default {
  name: 'VueSFCExample'
}
</script>

```

These kind of components are kept in .vue files. When using with webpack, [vue-loader](https://vue-loader.vuejs.org/) is used to convert these files to normal components.
