import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/FireBase";
import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      async queryFn(productData) {
        try {
          const timestamp = new Date().toISOString();
          const docRef = await addDoc(collection(db, "products"), {
            ...productData,
            createdAt: timestamp,
          });

          return {
            data: { id: docRef.id, ...productData, createdAt: timestamp },
          };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useAddProductMutation } = productsApi;
