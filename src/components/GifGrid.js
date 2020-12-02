import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    // TODO externalize property
    const gitUrl = "http://api.giphy.com/v1/gifs"

    // TODO externalize property
    const apiKey = 'someApiKey'

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs()
    }, [])

    const getGifs = async() => {
        // TODO refactor hardcoded url query params
        const url = `${gitUrl}/search?q=Rick+and+Morty&limit=10&api_key=${apiKey}`
        const resp = await fetch( url )
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs)
    }

    return (
        <div>
            <h3> { category } </h3>
            {
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ))
            }
        </div>
    )
}
