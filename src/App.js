import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import router from './routes';
import DefaultScreen from './screens/DefaultScreen';

function App() {
    console.log('re-render');
    const [successfulLogin, setSuccessfulLogin] = useState(false);
    return (
        <HashRouter>
            <Routes>
                {router.map((route) => {
                    const ScreenComponent = route.element;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <DefaultScreen>
                                    <ScreenComponent
                                        successfulLogin={successfulLogin}
                                        setSuccessfulLogin={setSuccessfulLogin}
                                    />
                                </DefaultScreen>
                            }
                        />
                    );
                })}
            </Routes>
        </HashRouter>
    );
}

export default App;
