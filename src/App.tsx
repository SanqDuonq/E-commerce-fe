import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/sign-up'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster';

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <div className='font-sans'>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route
                            path='/sign-up'
                            element={<SignUp />}
                        />
                    </Routes>
                </QueryClientProvider>
                <Toaster/>
            </div>
        </>
    )
}

export default App
