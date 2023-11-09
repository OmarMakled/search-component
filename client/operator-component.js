app.component('operator-component', {
    props: {
        operators: {
            type: Object,
            required: true
        }
    },
    data() {
      return {
        operator: null
      };
    },
    template: `
      <div class="mb-5">
        <h3>Operator</h3>
        <select @change="onChange()" v-model="operator">
            <option v-for="item in operators" :key="item.value" :value="item.value">{{item.text}}</option>  
        </select> 
    `,
    methods: {
        onChange(){
            this.$emit('changed', {operator: this.operator});
        }
    }  
  });