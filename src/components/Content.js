import { lazy, useContext, useEffect } from 'react'
import { ContextCats } from '../context/Context'

import '../styles/Content.css'

const Gallery = lazy(() => import('./Gallery'))
const Loader = lazy(() => import('./Loader'))


const Content = () => {
    const { catsImgRandom, load, runImagesRandom } = useContext(ContextCats)

    useEffect(() => {
        runImagesRandom()
    }, [])

    return (
        <section className="content-wrap">
            <button onClick={runImagesRandom}>Refresh</button>
            {load ? <Loader /> : <Gallery data={catsImgRandom} />}
        </section>
    )
}

export default Content