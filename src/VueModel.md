```js
import Vue from 'vue';
import _debounce from 'lodash/debounce';

const options = {
  name: 'ntnx-office',
  template:
  `<div>
    <div :id="id" :class="computedClass" @click="onClick">
      {{ text }}
    </div>
    <input v-show="gone" v-model="message"></input>
  </div>`,

  mounted: function () {
    console.log(this);
  },

  data: function () {
    return {
      id: 'office',
      text: 'Go To Nutanix Office',
      message: '',
      gone: false
    };
  },
  computed: {
    computedClass: function () {
      return `${this.gone ? 'in ' : 'out of' } ${this.id}`;
    }
  },
  methods: {
    onClick: function() {
      this.gone = true;
    }
  },
  watch: {
    gone: function() {
      console.log('hi');
      this.text = 'Went To Nutanix Office';
    },
    message: _debounce(function() {
      if (this.message) {
        alert(`nutanix says ${this.message}`);
      }
    }, 500)
  }
};

new Vue(options);
```

For more details on vue reactivity, refer to [Vue API](https://composition-api.vuejs.org/api.html)