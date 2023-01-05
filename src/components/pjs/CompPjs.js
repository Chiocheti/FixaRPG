import Item from "./ItemPjs.js"

function CompPjs({ pjs }) {
    return (
        <div>
            {
                pjs.map((pj) => (
                    <Item pj={pj} key={pj.idPJ} />
                ))
            }
        </div>
    )
}

export default CompPjs