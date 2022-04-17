import { Link, useMatch, useResolvedPath } from "react-router-dom";



function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div style={{ marginTop: '8px', marginLeft: '15px' }}>
            <Link
                style={{ color: match ? 'pink' : 'white', textDecoration: 'none' }}

                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}

export default CustomLink