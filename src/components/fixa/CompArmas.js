import ItemArma from "./ItemArma"

function CompArmas() {

    var armas = [1,2,3,4,5,6,7,8,9,]

    return (
        <div>
            {
                armas.map((arma) => (
                    <ItemArma />
                ))
            }
        </div>
    )
}

export default CompArmas