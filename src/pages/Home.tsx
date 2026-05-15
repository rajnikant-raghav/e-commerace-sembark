import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts, getCategories, getProductsByCategory } from "../actions";
import type { Product } from "../types";
import Grid from "../components/Grid";
import Filters from "../components/Filters";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        setLoading(true);

        let data = [];

        // CATEGORY API
        if (category) {
          data = await getProductsByCategory(Number(category));
        } else {
          data = await getProducts();
        }

        // SORTING
        if (sort === "asc") {
          data.sort((a: Product, b: Product) => a.price - b.price);
        }

        if (sort === "desc") {
          data.sort((a: Product, b: Product) => b.price - a.price);
        }

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [category, sort]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCategories();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <Filters categories={categories} />

      {loading ? <Loader /> : <Grid products={products} />}
    </div>
  );
};

export default Home;
