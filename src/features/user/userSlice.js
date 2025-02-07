import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/* Since this is a async function, we cannot call this function inside redux-toolkit. Hence, we need to use Thunk. */
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // This will be used as payload of the fullfilled value
    return { position, address };
  },
);

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.error = "";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = "Cannot get your location";
      });
  },
});

export const getUsername = (state) => state.user.username;

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
