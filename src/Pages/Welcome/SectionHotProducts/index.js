import Product from "./Product"
const data = [{
    name: 'Verne Rattan Chair ',
    discountPercent: '20%',
    backgroundImage: ''
},
{
    name: 'Cabo Small Woven ',
    discountPercent: '15%',
    backgroundImage: ''
},
{
    name: 'Presti 18" Pillow with ',
    discountPercent: '59%',
    backgroundImage: ''
},
{
    name: 'Cabo Small Woven ',
    discountPercent: '43%',
    backgroundImage: ''
}]

const Section = () => {
    return (
        <section>
            <div className="container">
                <main>
                    <div className="row">
                        {data.map((item) => {
                            return (
                                <div key={item} className="col-md-6">
                                    <Product name={item.name} discountPercent={item.discountPercent} backgroundImage={item.backgroundImage} />
                                </div>
                            )
                        })}
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Section