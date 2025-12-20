"use client"
import { Snowfall } from 'react-snowfall';
import { useMemo } from 'react';

export const SnowFall = () => {
    const images = useMemo(() => {
        if (typeof window === 'undefined') return [];

        const snowflake1 = document.createElement('img');
        snowflake1.src = '/static/snowflake.svg';
        return [snowflake1];
    }, []);

    return (
        <Snowfall
            color='white'
            radius={[0.5, 20]}
            images={images}
            snowflakeCount={500}
            style={{ zIndex: 1000 }}
        />
    );
}