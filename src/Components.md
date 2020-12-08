```jsx

<template>
  <div>
    <div> uniformity
      <ntnx-button :text="'deflated'" :class="'btn'" :spanid="'span_id'"></ntnx-button>

      <global-ntnx-button :text="'molybdenum'" :innerspanAttr="{ 'data-test': 'small', class: 'ntnx' }"></global-ntnx-button>
    </div>
    <div :style="{ 'margin-top': '20px' }">
      <ntnx-button v-for="button in buttons" :text="button" :key="button"></ntnx-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

const button = {
  template: '<button><span id="spanid" v-bind="innerspanAttr">{{ text }}</span></button>',
  props: ['text', 'spanid', 'innerspanAttr']
}


// Global Registration
Vue.component('global-ntnx-button', button);

export default {
  components: {
    // Local Registration
    'ntnx-button': button
  },
  data:  function() {
    return {
      desc: 'reloaded',
      buttons: ['syria', 'america', 'hawai', 'antarctica']
    }
  }
}
</script>

```


```jsx
<template>
  <ntnx-buttoner v-on:thisisclicked="onEvent" :onPress="onCallback"></ntnx-buttoner>
</template>
<script>
import Vue from 'vue';

const buttoner = {
  template: '<button @click="onClick">Press it!!!</button>',
  props: {
    onPress: Function
  },
  methods: {
    onClick: function() {
      this.onPress();
      this.$emit('thisisclicked');
    }
  }
}

Vue.component('ntnx-buttoner', buttoner);

export default {
  data: function() {
    return {
      callback: 0,
      event: 0
    }
  },
  methods: {
    onCallback: function() {
      this.callback++;
    },
    onEvent: function() {
      this.event++;
    }
  }
}
</script>
```

[Vue instance properties](https://vuejs.org/v2/api/#Instance-Properties)