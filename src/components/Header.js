import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({ title, onAdd, showForm }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' &&
                <Button
                    color={showForm ? 'red' : 'green'}
                    text={showForm ? 'Hide' : 'Add'}
                    onClick={onAdd}
                />}

        </header>
    )
}

Header.defaultProps = {
    title: 'Tasks Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
