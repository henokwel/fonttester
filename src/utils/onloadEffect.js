
import { useEffect, useRef } from 'react'

export default function useEffectonLoad(cb) {
    const didInt = useRef(false)
    useEffect(() => {
        if (!didInt.current) {
            cb()
        }
        didInt.current = true
    })
}