“Mustache” syntax. This is just used to display text and nothing else.

```jsx
<template>
  <div> austerity {{ desc }} </div>
</template>

<script>
export default {
  data:  function() {
    return {
      desc: 'reloaded'
    }
  }
}
</script>

```

```jsx
<template>
  <div>
    <div> austerity {{ desc }} </div>
    <div> {{ ran + 1 }}</div>
    <div> {{ 'perpetual motion'.split(' ').join('-') }}</div>
  </div>
</template>

<script>
export default {
  data:  function() {
    return {
      ran: 99,
      desc: '<span>reloaded</span>'
    }
  }
}
</script>

```

**Note:** data can be given in two forms

```js static
data: {
  desc: 'reloaded'
}
```

```js static
data: function () {
  return {
    desc: 'reloaded'
  }
}
```

The second scenario is a **must** when using reusable components.. so that each component can have its own data object.

## Directives
Additional attributes given on tags in templates. They expect a single JS expression.

```jsx

<template>
  <div>
    <div v-if="mgnShow"> if: magnanimity {{ mgn }} </div>
    <div v-show="mgnShow"> show: magnanimity {{ mgn }} </div>
    <div v-bind:class="mgnClass"> bold: magnanimity {{ mgn }} </div>
    <div v-on:click="mgnClick" class="pointer"> click: magnanimity {{ mgn }} ( {{ mgnClicked ? '' : 'not ' }} clicked)</div>
    <div v-bind:[mgnDynAttr]="'data-mgn'"> id: magnanimity {{ mgn }} </div>
    <input v-model="mgnInput" style="width:200px"></input>
  </div>
</template>

<script>
export default {
  data:  function() {
    return {
      mgn: 'unloaded',
      mgnShow: true,
      mgnClass: 'bold',
      mgnClicked: false,
      mgnDynAttr: 'data-id',
      mgnInput: 'write something magnanimous'
    }
  },
  methods: {
    mgnClick: function() {
      this.mgnClicked = true;
    }
  }
}
</script>

<style>
.bold {
  font-weight: bold
}
.pointer {
  cursor: pointer;
}
</style>

```

1. [IF ELSE](https://vuejs.org/v2/guide/conditional.html)

2. [CLASS STYLES](https://vuejs.org/v2/guide/class-and-style.html)

3. [FOR](https://vuejs.org/v2/guide/list.html)

4. [EVENTS](https://vuejs.org/v2/guide/events.html)
