import { BASE_URL } from '@/helpers/constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  favorites: Product[];
  categories: string[];
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  favorites: [],
  products: [],
  categories: [],
  filteredProducts: [],
  selectedCategory: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(`${BASE_URL}/products`);

    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get(`${BASE_URL}/products/categories`);

    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
      state.filteredProducts =
        action.payload === 'all'
          ? state.products
          : state.products.filter(
              (product) => product.category === action.payload
            );
    },
    addFavorite(state, action) {
      const product = action.payload;
      if (!state.favorites.find((fav) => fav.id === product.id)) {
        state.favorites.push(product);
      }
    },
    removeFavorite(state, action) {
      const productId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== productId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })

      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export const { setSelectedCategory, addFavorite, removeFavorite } =
  productSlice.actions;
export default productSlice.reducer;
