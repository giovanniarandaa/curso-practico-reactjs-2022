import axios from "axios"
import { useEffect, useState } from "react"

const useGetProducts = (api) => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const response = await axios(api)
    setProducts(response.data)
  }, [])

  return products
}

export default useGetProducts