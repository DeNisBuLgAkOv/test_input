import {makeAutoObservable} from "mobx";
import {useMemo} from "react";
import {InputStore} from "./inputStore";
import {Container} from "inversify";


export class RootStore{
public inputStore:InputStore
  public container:Container
  public constructor() {
    this.inputStore = new InputStore()
    this.container = new Container()
    this.container.bind(InputStore).toConstantValue(this.inputStore)
    this.container.bind(Container).toConstantValue(this.container)
  }
}

function initialStore(initialData:unknown){
  let store = null
  const _store = store ?? new RootStore()
  if(typeof window === 'undefined'){
    return _store
  }
  if(!store){
    store =_store

  }
  return _store
}
export function useStore(initialState?:unknown){
    let store = useMemo(()=> initialStore(initialState),[initialState])
  return store
}
