import { Navigate } from 'react-router-dom';
import routes from '../routes';

const MustLogin = () => {
    const isLogin = false;
    return (
        <>
            {!isLogin ? < Navigate to={ routes.web.component.login }/> : null}
        </>
    )
}

export default MustLogin