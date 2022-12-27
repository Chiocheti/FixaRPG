import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function UserPage(){
    const navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem("jogador") == null || sessionStorage.getItem("jogador") == undefined){
            navigate("/")
        }
    })

    return(
        <div>
            <h1>Ola amigos!!!</h1>
        </div>
    )
}

export default UserPage