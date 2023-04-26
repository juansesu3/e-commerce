import {use}


export default function ProductForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    const createProduct= async (ev)=>{
        ev.preventDefault();
        const data= {title, description, price}
        await axios.post('/api/products', data)
        setGoToProducts(true);
    }

    if(goToProducts){
        router.push('/products');
    }

    return (
      
            <form onSubmit={createProduct}>
                
           
            <h1 >New Product</h1>
            <label >Product name</label>
            <input
                type=""
                name=""
                value={title}
                onChange={ev => setTitle(ev.target.value)}
                placeholder="product name" />
            <label >Descripiton</label>
            <textarea
                placeholder="Descripiton"
                value={description}
                onChange={ev => setDescription(ev.target.value)} />

            <label >Price (in USD)</label>
            <input
                type="number"
                name=""
                value={price}
                onChange={ev => setPrice(ev.target.value)}
                placeholder="Price" />
            <button type='submit' className="btn-primary">Save</button>
            </form>

       
    );
}