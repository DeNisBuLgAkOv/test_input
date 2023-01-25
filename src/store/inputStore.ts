import {action, makeAutoObservable, makeObservable, observable} from "mobx";
import {injectable} from "inversify";
import {CountryInfo} from "../api/apiService";
import "reflect-metadata"


export interface Input{
  id:string,
  value:string,
  options?:CountryInfo[]
}

 export  interface Button{
  inputId:string,
  title:string,
  callback:<T,W>(arg?:T) => void | W,
  position:'left'| 'right'

}

@injectable()
export  class InputStore{

  @observable inputList:Input[] =[]
  @observable buttonList: Button[] =[]
  public constructor() {
    makeObservable(this)
  }

  @action createInput(data:Input){
    this.inputList = [...this.inputList,data]
  }
  @action createButton(data:Button){
    this.buttonList= [...this.buttonList,data]
  }

  @action cleanInput(inputId:string){
    this.inputList = this.inputList.map(el =>{
      if(el.id === inputId){
        el.value =''
      }
      return el
    })
  }

  @action greeting(inputId:string) {
    this.inputList = this.inputList.map(el => {
      if (el.id === inputId) {
        el.value = 'Hello World!'
      }
      return el
    })
  }

  @action changeInputValue(inputId:string,value:string){
      this.inputList = this.inputList.map(el =>{
        if(el.id === inputId){
          el.value = value
        }
        return el
      })
  }



}

