import PropTypes from 'prop-types';

 export function Section({name, title, children}) {
    return (
        <section className={name}>
            {title} && <h2 className='title'>{title}</h2>
            {children}
        </section>
    );
 };

 Section.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string, 
    children: PropTypes.node,
 }