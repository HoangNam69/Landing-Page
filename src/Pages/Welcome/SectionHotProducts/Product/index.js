import './style.css'

const Product = ({ name, discountPercent, backgroundImage }) => {
    return (
        <div className="hot-product" style={{ 'background-image': { backgroundImage } }}>
            <div>
                Mega Save {discountPercent}
            </div>
            <h5>{name}</h5>
            <button>Shop now</button>

        </div>
    )
}

export default Product