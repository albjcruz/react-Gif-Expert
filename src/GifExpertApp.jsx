import { useState } from "react";
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setcategories((c) => [newCategory,...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => {
                    return (
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                })
            }
        </>

    )
}
