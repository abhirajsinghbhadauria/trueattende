import {styled} from "styled-components"
const Wrapper=styled.main`

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.button.inner {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  input{
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: darkblue;
    }
  }
 
}

.studentYear.inner,
.studentSection.inner {
  margin-bottom: 20px;
}

select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  font-weight: bold;
  margin-right: 10px;
}

`
export default Wrapper;