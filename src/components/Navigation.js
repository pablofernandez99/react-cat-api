import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const CategoryLink = () => (
    <section className="navigation">
        <nav className="category-nav">
            <ul>
                <li>
                    <NavLink to="/cats/category/boxes?id=5">
                        Boxes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cats/category/hats?id=1">
                        Hats
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cats/category/sinks?id=14">
                        Sinks
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cats/category/space?id=2">
                        Space
                    </NavLink>
                </li>
            </ul>
        </nav>
    </section>
)

export default CategoryLink