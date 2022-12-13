const fetchProducts = async () => {
  try {
      const { data } = await axios.get('http://localhost:3032/customer')
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
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Membership</th>
          <th>Update</th>
          <th>Delete</th>
      </tr>
      `

  products.forEach((products) => {
      bodyHtml += `
      <tr>
          <th>${products._id}</th>
          <th>${products.name}</th>
          <th>${products.age}</th>
          <th>${products.sex}</th>
          <th>${products.membership}</th>
          <th><button type="button" id="update-button" class="btn btn-primary btn-lg">UPDATE</button></th>
          <th><button type="button" id="update-button" class="btn btn-primary btn-lg">DELETE</button></th>
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
      const { data } = await axios.post('http://localhost:3032/customer', { name, age, sex, membership })
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
      const { data } = await axios.delete(`http://localhost:3032/customer/${ id }`, { id })
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
      const { data } = await axios.patch(`http://localhost:3032/customer/${ id }`, { name , price })
      if(data.success){
          await fetchProducts()
      }

  } catch (error) {

      console.error(`[ERROR CREATING PRODUCT] : ${error.message}`)

  }
})


main()