app.component('image-component', {
    props: {
        items: {
            type: Object,
            required: true
        }
    },
    data() {
      return {
        image: {},
        operator: null
      };
    },
    template: `
      <div class="mb-4">
        <h3>Image</h3>
        <select multiple @change="onChange()" v-model="image">
            <option v-for="item in items.list" :key="item.value" :value="item.value">{{item.text}}</option>  
        </select>

        <operator-component :operators="items.operators" @changed="onOperatorChange($event)" v-model="operator"></operator-component>

        <hr /> 
      </div>
    `,
    methods: {
        onChange(){
            this.$emit('changed', {value: this.image, operator: this.operator});
        },
        onOperatorChange(value){
            this.operator = value;
            this.$emit('changed', {value: this.image, operator: this.operator});
        }
    }  
});