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
        <select class="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500 h-10" 
          @change="onChange()" 
          v-model="operator">
            <option value="" disabled selected>Select an operator</option>
            <option v-for="item in operators" :key="item.value" :value="item.value">{{item.text}}</option>  
        </select> 
    `,
    methods: {
        onChange(){
            this.$emit('changed', {value: this.operator});
        }
    }  
  });