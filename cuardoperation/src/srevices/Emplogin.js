
import axios from "axios"
const baseUrl = "http://localhost:3000/emplogin"

class Emplogin {

    getemplogin() {
        return axios.get(baseUrl)
    }
    getemploginid(id) {
        return axios.get(baseUrl+"/"+id)
    }
    
    deleteEmplogin(id){
        return axios.delete(baseUrl+"/"+id)
    }
    updateEmplogin(obj){
        return axios.post(baseUrl,obj)
    }
    updateEmplogine(id,obj){
        return axios.put(baseUrl+"/"+id,obj)
    }


}
export default new Emplogin();
