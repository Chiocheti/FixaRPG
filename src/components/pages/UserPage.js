import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';

import Componente from "../pjs/CompPjs.js"

function UserPage() {

    const navigate = useNavigate();
    const [pjs, setPjs] = useState([])

    function load() {
        if (sessionStorage.getItem("jogador") == null || sessionStorage.getItem("jogador") == undefined) {
            navigate("/")
        } else {
            var jogador = JSON.parse(sessionStorage.getItem("jogador"))
            const options = {
                method: 'GET',
                url: `http://localhost:3001/api/pj/idJogador/${jogador.idJogador}/classePj`
            };
            Axios.request(options).then(function (response) {
                console.log("LISTAR")
                setPjs(() => response.data)
            }).catch(function (error) {
                return 0;
            });
        }
    }

    useEffect(() => {
        load();
    }, [])

    return (
        <div>
            <input type="image" />
            <Componente pjs={pjs} />
        </div>
    )
}

export default UserPage