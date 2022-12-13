const fetchProducts = async () => {
    try {
        const { data } = await axios.get('https://node-openchat-crud.herokuapp.com/product')
        addProductToTable( data.data )
    } catch {

        console.error(`[ERROR FETCHING PRODUCT] : ${error.message}`)

    } 
}

const main = async () => {
    await fetchProducts()
}

const addProductToTable = (products) => {
    const productTable = document.getElementById('products-table')

    let bodyHtml = `
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
        </tr>
        `

    products.forEach((products) => {
        bodyHtml += `
        <tr>
            <th>${products._id}</th>
            <th>${products.name}</th>
            <th>${products.price}</th>
        </tr>
        ` 
    })

    productTable.innerHTML = bodyHtml
}

const createButton = document.getElementById('create-button')

createButton.addEventListener('click', async () => {
    const nameElement = document.getElementById('create-title-form')
    const priceElement = document.getElementById('create-price-form')

    const name = nameElement.value
    const price = priceElement.value
    
    if(!name || !price){
        return
    }

    try {
        const { data } = await axios.post('https://node-openchat-crud.herokuapp.com/product', { name , price })
        if(data.success){
            await fetchProducts()
        }

    } catch (error) {

        console.error(`[ERROR CREATING PRODUCT] : ${error.message}`)

    }
})

const deleteButton = document.getElementById('delete-button')

deleteButton.addEventListener('click', async () => {
  const IDElement = document.getElementById('delete-id-form')
  //const priceElement = document.getElementById('create-price-form')

  const id = IDElement.value
  //const price = priceElement.value
  
  if(!id){
      return 0
  }

  try {
      const { data } = await axios.delete(`https://node-openchat-crud.herokuapp.com/product${ id }`, { id })
      if(data.success){
          await fetchProducts()
      }

  } catch (error) {

      console.error(`[ERROR CREATING PRODUCT] : ${error.message}`)

  }
})

const updateButton = document.getElementById('update-button')

updateButton.addEventListener('click', async () => {
  const idElement = document.getElementById('update-id-form')
  const nameElement = document.getElementById('update-title-form')
  const priceElement = document.getElementById('update-price-form')

  const id = idElement.value
  const name = nameElement.value
  const price = priceElement.value
  
  if(!id || !name || !price){
      return 0
  }

  try {
      const { data } = await axios.patch(`https://node-openchat-crud.herokuapp.com/product${ id }`, { name , price })
      if(data.success){
          await fetchProducts()
      }

  } catch (error) {

      console.error(`[ERROR CREATING PRODUCT] : ${error.message}`)

  }
})


main()