const initialState = {
    regions:[],
    country:[]
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_REGIONS':
            return{
                ...state,
                regions: action.regions,
                country: action.country
            }
    }
}

export default rootReducer
