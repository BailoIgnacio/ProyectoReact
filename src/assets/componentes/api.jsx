export const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  