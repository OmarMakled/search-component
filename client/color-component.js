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
    <div class="mb-5 ">
      <h3>Color</h3>
      <select multiple @change="onChange()" v-model="color">
          <option v-for="item in items.list" :key="item.value" :value="item.value">{{item.text}}</option>  
      </select>
      <operator-component :operators="items.operators" @changed="onOperatorChange($event)" v-model="operator"></operator-component>
      <hr />  
    </div>
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