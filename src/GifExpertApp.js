import { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                { 
                    categories.map(category =>
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ) 
                }
            </ol>
        </Fragment>
    )
}