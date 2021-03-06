import axios from "axios";

// let baseURL = "http://localhost:5000";

let baseURL = "http://localhost:8080";

// let baseURL = "https://62866d7696bccbf32d75019d.mockapi.io/";


export const momentServices = {


    getAllMoments() {
        const moment = axios.get(baseURL + "/moments").then((res) => {
        return res.data;
    });

    return moment;
    },

    getMomentById(id) {
      console.log(id)
        const moments = axios
          .get(baseURL + "/moments/" + id)
          .then((res) => res.data);
        return moments;
      },

      updateMoment(id, newMoment) {
          const moments = axios
            .put(baseURL + "/moments/" + id, newMoment)
            .then((res) => res.data);
          return moments;
        },

       deleteMoment(id) {
          const deletedMoment = axios
          .delete(baseURL + "/moments/" + id)
          .then((res) => res.data);
              return deletedMoment;
      },

      createMoment(data) {

          const createNewMoment = axios
          .post(baseURL + "/moments/", data)

          // .post(baseURL + "/moments/", {...data,userId:1})
          .then((res) => res.data);
              return createNewMoment;
          },


        searchMoment(search) {
          const moments = axios.get(`${baseURL}/moments?search=${search}`).then((res) => {
            return res.data;
          });
          return moments;
        },
      

 };
   
