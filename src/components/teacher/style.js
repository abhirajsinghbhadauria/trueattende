import { styled } from "styled-components";


const Wrapper = styled.section`

.inner{
    
    margin:auto;
    padding:10px;
}
.year{
    width:100%;
    margin: 0 auto;
}
.year input{
    width:90px;
    height:90px;
    padding:10px;
    margin: 20px 0;
    
}

.search input[type=text]{
    width:200px;
    height:50px;
}
.search input[type = button]{
    width:120px;
    height:50px;
    border:none;
    background-color:#007BFF;
}
.classes input{
    width:124px;
    height:120px;
}

`

export default Wrapper;