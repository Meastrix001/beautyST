"use client"
import { Snowfall } from 'react-snowfall';
const snowflake1 = document.createElement('img')
snowflake1.src = '/static/snowflake.svg'

const images = [snowflake1]




export const SnowFall = () => {
    return <Snowfall color='white' radius={[0.5, 20]} images={images} snowflakeCount={500} style={{ zIndex: 1000 }} />
}