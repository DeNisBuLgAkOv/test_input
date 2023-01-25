import React from 'react';
import {Input, InputStore} from "../../store/inputStore";
import {observer} from "mobx-react-lite";
import {useInjection} from "inversify-react";

const InputBlock= observer((props:Input) => {
  const inputStore = useInjection(InputStore)
  const leftButtons = inputStore.buttonList.filter(el => el.position === "left" && el.inputId === props.id)
  const rightButtons = inputStore.buttonList.filter(el => el.position === "right" && el.inputId === props.id)
  return (
    <div>
      {leftButtons.map(el => <button  onClick={el.callback}>{el.title}</button>)}
        <input id={props.id} onChange={(event)=>inputStore.changeInputValue(props.id,event.target.value)}   />
      {rightButtons.map(el => <button  onClick={el.callback}>{el.title}</button>)}
    </div>
  );
});

export default  InputBlock;