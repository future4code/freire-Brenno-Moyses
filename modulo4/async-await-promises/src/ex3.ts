import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}

// const getSubscribers = async (): Promise<any[]> => {
//   const res = await axios.get(`${baseURL}/subscribers`);
//   return Promise<user[]>;
// }  

// a) Sim, da erro de tipagem

// b) Sim, para conseguirmos filtrar a informação que queremos.

const getSubscribers = async (): Promise<any[]> => {
  const res = await axios.get(`${baseURL}/subscribers`);
  return res.data.map((res : any) => {
    return {
        id: res.id,
        name: res.name,
        email: res.email,
  }
})
} 

// const news = {
//   title: "Freire curte loucamente o backend",
//   content: "Alucinados, turma Freire se torma primeira turma com todos backenders",
//   date: Date.now()
// }

// const createNews = (news: any) => {
//   return axios.put(`${baseURL}/news`, news)
// }

// const getAllSubscribers = () => {
//   return axios.get(`${baseURL}/subscribers`)
//         .then(res=> res.data)
//   }

// const getSubscribersIds = (subscribers: any) => {
//   return subscribers.map((subscriber:any)=>{
//       return subscriber.id
//   })

// }

// const notifyAllSubscribers = (ids :string[]) => {
//   for (let id of ids ){
//       axios.post(`${baseURL}/notifications`,{
//         subscriberId:id,
//         message: "Mensagem do react group"})
//         .then(()=>{console.log(`Notificação enviada com sucesso para ${id}`)})
//         .catch(()=>{console.log(`Erro ao enviar para${id}`)})
//   }
// }

// createNews(news)                 // criar noticia
//   .then(getAllSubscribers)       // buscar assinantes
//  .then(getSubscribersIds)        // extrair id's (etapa síncrona)
//  .then(notifyAllSubscribers)     // enviar notificacoes