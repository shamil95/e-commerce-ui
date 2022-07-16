import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { THEMES } from './utils/constants';

const App = () => {
    useEffect(() => {
        document.body.classList.add(THEMES.light);
    }, []);

    return (
        <>
            <Header />
            <main></main>
            <Footer />
        </>
    );
};

export default App;
