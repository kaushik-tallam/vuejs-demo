
Extending using extends

```jsx
import Vue from 'vue';

const baseclicker = {
  template: '<button @click="onClick">{{ text }}</button>',
  props: ['text'],
  computed: {
    computedText: function() {
      return `comp ${this.text}`;
    }
  },
  methods: {
    onClick: function() {
      alert('based on reality');
    }
  }
}

const extendedclicker = {
  extends: baseclicker,
  methods: {
    onClick: function() {
      alert('sword is an extension of hand');
    }
  }
}


new Vue({
  components: {
    baseclicker,
    extendedclicker
  },
  template:
  `
  <div>
    <baseclicker :text="'basic'"></baseclicker>
    <extendedclicker :text="'ext'"></extendedclicker>
  </div>
  `
})

```

Mixins Usage

```jsx
import Vue from 'vue';

const alertMixer = {
  methods: {
    alert: function(msg) {
      alert('hello from the mixin. msg is: ' + msg)
    }
  }
}

new Vue({
  mixins: [alertMixer],
  template:
  `
  <div>
    <button @click="alert('im (im)pressed!')">press me!!</button>
  </div>
  `
})

```

Slots usage

```jsx
import Vue from 'vue';

const slottedTemp = {
  template:
  `
  <div style="padding:20px">
    <slot></slot>
    <slot name="second">
      Second slot is not given
    </slot>
    <slot name="third" v-bind:id="'slot3'"></slot>
  </div>
  `
}

new Vue({
  components: {
    slottedTemp
  },
  template:
  `
    <slottedTemp>
      <template> <div> default limit tends to infi </div> </template>
      <template v-slot:second> <div > second to none! </div> </template>
      <template #third="{ id }"> <div :id="id"> third times the charm </div> </template>
    </slottedTemp>
  `
})

```