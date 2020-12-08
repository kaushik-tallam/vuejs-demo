In production ready app, the root vue instance is declared in the following way -

```js static
const vm = new Vue({
  el: ('#app' || document.querySelector(/* ... */))
  name: 'VueExampl',
  template: '<h1>Prod App</h1>'
});
vm.$mount('#app');
```

![image](lifecycle.png)

For more info on lifecycle hooks, refer to [Vue Lifecycle API](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks)
