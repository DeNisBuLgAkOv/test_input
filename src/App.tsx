import React, {useEffect} from "react";
import "./App.css";
import {Provider, useInjection} from "inversify-react";
import {observer} from "mobx-react-lite";
import {InputStore} from "./store/inputStore";
import Input from "./components/Input";
import {RootStore} from "./store/rootStore";

function App() {
  const inputStore = useInjection(InputStore)

  const store = new RootStore()
  const container = store.container
  useEffect(()=>{
    inputStore.createInput({id:'qwert', value:''})
    inputStore.createButton({inputId:'qwert', title:'1',callback:()=>inputStore.cleanInput('qwert'),position:'right'})
    inputStore.createButton({inputId:'qwert', title:'2',callback:()=>inputStore.greeting('qwert'),position:'right'})
    inputStore.createInput({id:'qwertццу', value:''})
  },[])

  return(

    <Provider container={container} key={container.id}>
    {inputStore.inputList.map(el => {
      return <Input id={el.id} value={el.value}/>
    })}
       </Provider>

);
}

export default App;
