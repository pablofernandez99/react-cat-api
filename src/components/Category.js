import { useState, useEffect, useContext } from 'react'

import { ContextCats } from '../context/Context'

import '../styles/Category.css'

import Loader from './Loader'


const CategoryImages = ({ location, match }) => {
    const [params, setParams] = useState('')
    const [categoryCat, setCategoryCat] = useState('')

    const { catsImgCategory, load, runCategoryImages } = useContext(ContextCats)

    const queryParams = () => {
        try {
            const getParams = new URLSearchParams(location.search)
            const param = getParams.get('id')

            runCategoryImages(param)
            setParams(param)
        } catch (err) {
            console.log(err)
        }
    }

    const categoryName = () => {
        try {
            const name = match.params.category.toUpperCase()
            setCategoryCat(name)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        queryParams()
        categoryName()
    }, [location])

    return (
        <section className="category-wrap">
            <h2>{categoryCat}</h2>
            <button onClick={() => runCategoryImages(params)}>Refresh</button>
            <section>
                {load ? <Loader /> : (
                    <ul className="category-gallery">
                        {catsImgCategory.map(({ id, url }) => (
                            <li key={id}>
                                <div className="card-category">
                                    <img src={url} alt="cats" />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </section>
    )
}

export default CategoryImages