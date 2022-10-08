import styled from "styled-components"

export const Parentdiv=styled.div`
background-color:black;

text-alignment:center;
align-contents:center;

&>.parent{display: grid;
border-radius:20px;
grid-template-columns: 65% 25%;
grid-gap:5%;}
&>.btns{margin-right:200px;padding-bottom:10px;}
`
export const LeftP=styled.div`
display: grid;
border-radius:10px;
  grid-template-columns: repeat(3,165px );
  grid-gap:20px;
  grid-template-rows: repeat(4,160px );
  padding:10px;
  
background:#20232A;

`


export const RightP=styled.div`
background:#20232A;
padding:5px;
&>.form{padding:10px; border:2px solid}

.form>input{
    margin:2px;
    border-radius:6px;
    padding:2px 6px;
}

.form>textarea{
    padding:2px 6px;
}

`
