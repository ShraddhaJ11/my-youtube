import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state,action.payload)
    },
  },
});

/**
 * Time complexity to search in array = O(n)
 * array.indexOf() - O(n)
 * array.include() - O(n)
 *  [i,ip,iph,iphone]
 *
 *
 * Time complexity to search in hashmap/map/object = O(1)
 *
 * {
 *   i:
 *   ip:
 *   iph:
 *   iphone:
 *  }
 *
 * we can also use map or set for better result
 */

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;
