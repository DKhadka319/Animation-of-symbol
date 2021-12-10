import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { YinYang } from './AllSvags'

//The style Start 
const rotate=keyframes`

from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`



const Center=styled.button`
position:absolute;
top:${props=>props.click ? '85%' :'50%'};
left:${props=>props.click ? '92%' :'50%'};
transform:translate(-50%,-50%);
border:none;
outline:none;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#FCF6F4;
transition:all 1s ease;

&>:first-child{
animation: ${rotate} infinite 2s linear;
}
&>:last-child{
    padding-top:0;
}

`
//The style End 

const Main = () => {
     const [click, setClick] = useState(false);
   
     const handleClick =()=>setClick(!click);
  return (
<Center click={click}>

        <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} heght={click ? 120 :200}  fill='currentColor'/>
        </Center>
)
}






export default Main;