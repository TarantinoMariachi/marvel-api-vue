import axios from 'axios'
export const Store = {
  datas: {
    characters: [],
  },

  loadDatas() {



    axios.get('http://localhost:3000/').then((response) => {
      this.datas.characters = response.data;
      this.$Progress.finish()
        console.log(response.data)
    })
  },

}