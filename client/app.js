const app = Vue.createApp({});
app.component('search-component', {
    data() {
      return {
        filter: [],
        query: {}
      };
    },
    template: `
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">   
            <image-component :items="filter.image" @changed="onChange('image', 0, $event)"></image-component>
            <section class="border border-blue-500 flex mb-8 p-4 rounded-lg space-x-4">
              <operator-component :operators="filter?.color?.operators" @changed="onOpreatorChange($event)"></operator-component>
            </section>

            <section class="border border-blue-500 flex mb-8 p-4 rounded-lg space-x-4"> 
              <color-component :items="filter.color" @changed="onChange('color', 0, $event)"></color-component>
              <section class="border border-blue-500 flex mb-8 p-4 rounded-lg space-x-4">
                <operator-component :operators="filter?.color?.operators" @changed="onChange('color', 1, {operator: {...$event}})"></operator-component>
              </section>
              <color-component :items="filter.color" @changed="onChange('color', 2, $event)"></color-component>
            </section>
        </div>
        <div class="col-span-1">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" @click="reset()">reset</button>
            <ol>
              <li>main_subject_image = kitchen OR main_subject_image = kitchen_niche</li>
              <li>colour = black OR (colour = white AND colour = grey)</li>
              <li>(main_subject_image = kitchen OR main_subject_image = kitchen_niche)
              AND
              (colour = black OR (colour = white AND colour = grey))</li>
            </ol>
            <pre class="bg-gray-800 text-white p-4 rounded">{{ query }}</pre>
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
        onOpreatorChange(value){
          this.query.operator = value;
        },
        reset(){
            this.query =  {
                image: [{}],
                operator: {},
                color: [{}, {}, {}]
            }
        }
    }     
});
app.mount('#app');