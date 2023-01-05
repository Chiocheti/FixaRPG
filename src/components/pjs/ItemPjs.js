

function ItemPjs({ pj }) {
    console.log(pj)
    return (
        <div>
            <input type="text" value={pj.nomePJ} readOnly />
        </div>
    )
}
export default ItemPjs