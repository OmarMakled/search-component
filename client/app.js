const app = Vue.createApp({});
app.component('search-component', {
    data() {
      return {
        filter: [],
        query: {}
      };
    },
    template: `
      <div class="">
        <div>   
            <image-component :items="filter.image" @changed="onChange('image', 0, $event)"></image-component>
            <hr/>
            <operator-component :operators="filter?.color?.operators" @changed="onChange('operator', 0, $event)"></operator-component>
            <hr/>
            <color-component :items="filter.color" @changed="onChange('color', 0, $event)"></color-component>
            </hr>
            <operator-component :operators="filter?.color?.operators" @changed="onChange('color', 1, $event)"></operator-component>
            <hr/>
            <color-component :items="filter.color" @changed="onChange('color', 2, $event)"></color-component>
        </div>
        <div>
            <h3>Here are the query</h3>
            <button @click="reset()">reset</button> 
            <div>
                <pre>
                    {{ query }}
                </pre>
            </div>
        </div>
      </div>
    `,
    mounted() {
        this.reset();
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
              const response = await fetch('http://localhost:5000/');
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              this.filter = await response.json();
            } catch (error) {
              console.error('An error occurred:', error);
            }
        },
        onChange(query, i, value){
          this.query[query][i] = value; 
        },
        reset(){
            this.query =  {
                image: [{}],
                operator: [{}],
                color: [{}, {}, {}]
            }
        }
    }     
});
app.mount('#app');