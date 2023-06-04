

const useActionTypes = () => {

    const fulfilled = (state, action) => {
        state.email = action.payload;
        state.error = false;
        state.errorMsg = ''
        state.loading = false
    }
    const pending = (state) => {
        state.error = false;
        state.errorMsg = ''
        state.loading = true
    }
    const rejected = (state, action) => {
        state.error = true;
        state.errorMsg = action.error.message
        state.loading = false
    }

    return { fulfilled, pending, rejected }

}

export default useActionTypes;
