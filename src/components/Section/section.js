import PropTypes from 'prop-types';
import css from './section.module.css';

export function Section({name, title, children}) {
    return (
        <section className={name}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            {children}
        </section>
    );
};

Section.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string, 
    children: PropTypes.node,
};