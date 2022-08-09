
import axios,{AxiosResponse} from "axios";

//input type
type InputTodo ={
    value:string;
    isCompleted:boolean;
 
    
};

export type Todo ={
    id:number;
    value:string;
    isCompleted:boolean;
    
}

export const getTodos = async() =>{
    let r:AxiosResponse<Todo[]>= await axios.get("http://localhost:8080/todos")
    return r.data;
}

export const postTodo = async(newTodo:InputTodo)=>{
    let r:AxiosResponse<Todo> = await axios.post(
        "http://localhost:8080/todos",newTodo
    );
    return r.data
}