import {useEffect, useRef, useState} from "react";

export default function useObserver( options) {
    const ref = useRef()
    const [visible, setVisible] = useState(false)
    useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                setVisible(entry.isIntersecting)

            }, options);
            if (ref.current) {
                observer.observe(ref.current)
            }
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            }
        }, [ref, options]
    )
    return [ref, visible]
}
