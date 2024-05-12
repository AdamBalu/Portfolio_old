'use client';

import {useEffect} from "react";

export const MainHeading = () => {
    useEffect(() => dynamicHeadingsOpacity())
    return (
        <div className="flex flex-col gap-4" id="main-heading">
            <h1 className="text-6xl font-bold animate-slidein ml-[-65px] opacity-0" id="h-webdev">
                <span>web</span> developer</h1>
            <h1 className="text-6xl font-bold animate-slidein mr-[-25px] opacity-0"
                id="h-designer"><span>designer</span></h1>
            <h1 className="text-6xl font-bold animate-slidein ml-[-25px] opacity-0" id="h-mobile">mobile <span>app dev</span></h1>
        </div>
    );
}

const dynamicHeadingsOpacity = () => {
    const h1 = document.getElementById('h-webdev');
    const h2 = document.getElementById('h-designer');
    const h3 = document.getElementById('h-mobile');
    // const mainHeading = document.getElementById('main-heading');
    //
    // if (mainHeading) {
    //     const spans = mainHeading.querySelectorAll('span');
    //
    //     setTimeout(() => {
    //         spans.forEach(span => {
    //             span.style.color = 'red';
    //         })
    //     }, 500)
    //
    // }




    changeOpacity(h1, 1000);
    changeOpacity(h2, 2000);
    changeOpacity(h3, 3000);
}

const changeOpacity = (h: HTMLElement | null, timeout: number) => {
    if (h === null) {
        return;
    }
    h.classList.remove('opacity-0');

    setTimeout(() => {
        const span = h.querySelector('span');
        if (span) {
            span.style.color = 'red';
        }
        // h.style.opacity = '1';
    }, timeout)
}
