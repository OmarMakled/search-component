app.component('color-component', {
  props: {
      items: {
          type: Object,
          required: true
      }
  },
  data() {
    return {
      color: {},
      operator: null
    };
  },
  template: `
  <section class="border border-blue-500 flex mb-8 p-4 rounded-lg space-x-4">
  <select 
    class="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500 h-24" 
    multiple 
    @change="onChange()" 
    v-model="color">
      <option value="" disabled selected>Select an option</option>
      <option v-for="item in items.list" :key="item.value" :value="item.value">{{item.text}}</option>  
  </select>
  <operator-component :operators="items.operators" @changed="onOperatorChange($event)" v-model="operator"></operator-component>
</section>
  `,
  methods: {
      onChange(){
          this.$emit('changed', {value: this.color, operator: this.operator});
      },
      onOperatorChange(value){
        this.operator = value;
        this.$emit('changed', {value: this.color, operator: this.operator});
    }
  }  
});