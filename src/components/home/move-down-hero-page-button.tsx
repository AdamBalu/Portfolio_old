'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';

import {Button} from '@/components/ui/button';

const scrollToMainPageStart = () => {
    const mainPageStart = document.getElementById('homepage-main-content');
    if (mainPageStart) {
        mainPageStart.scrollIntoView({behavior: 'smooth'});
    }
};

export const MoveDownHeroPageButton = () => {
    useEffect(() => changeOpacity())
    return (
        <Button
            id="explore-events-button"
            className="flex flex-row gap-3 px-6 transition h-min max-w-56 mx-auto opacity-0"
            onClick={scrollToMainPageStart}
        >
            <div className="flex uppercase items-center h-12 gap-0">
                more
            </div>
            <Image
                src="/static/arrow-down.svg"
                alt="arrow down"
                width={32}
                height={32}
            />
        </Button>
    );
}

const changeOpacity = () => {
    const h = document.getElementById('explore-events-button');

    if (h) {
        setTimeout(() => {
            h.style.opacity = '1';
        }, 4000)

    }
}
