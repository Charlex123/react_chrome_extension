import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate();
    // const { setToken, getUser } = useContext(DataContext) as AllContext;
    const searchParams = new URLSearchParams(document.location.search);
    const token = searchParams.get('token')!;


    console.log('token',token)
    const getAndSetToken = async () => {
      if (token) {
        localStorage.setItem('signature', token);
        console.log(localStorage.getItem('signature'))
        // await getUser();
        navigate('/dashboard',{replace: true});
      } else {
        navigate('/');
      }
    };

  
    useEffect(() => {
      getAndSetToken();
    }, );
  
    return null;
}

export default Social