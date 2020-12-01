import { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    const [categories, setGategories] = useState(['One Punch', 'Samurai X', ' Dragon Ball'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'HunterXHunter'] )    // other way
    //     // setGategories(() => categories.concat('HunterXHunter')) // other way
    //     setCategories( cats => [...cats, 'HunterXHunter'] ) 
    // }

    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                { 
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    }) 
                }
            </ol>
        </Fragment>
    )
}