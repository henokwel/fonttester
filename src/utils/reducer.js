import React, { useReducer } from "react";


export default function appReducer(state, action) {
    if (state === action.payload) return state
    switch (action.type) {
        case "h1": {
            return state = { h1: action.payload.h1, p: action.payload.p }
        }
            break;
        case "p": {
            return state = { p: action.payload.p, h1: action.payload.h1 }
        }
            break;
        case "random": {
            return state = { p: action.payload.p, h1: action.payload.h1 }
        }
            break;
        default: {
            return state;
        }
            break;
    }
}