import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { ToastContainer } from "react-toastify";

import PublicRoute from "./router/public-route";
import PrivateRoute from "./router/private-route";
import { Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import SearchBar from "./components/layout/search-bar";
import Footer from "./components/layout/footer";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <div className="font-sans px4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <QueryClientProvider client={queryClient}>
          <ToastContainer />

          <Navbar />
          <SearchBar />
          <Routes>
            {/* <PublicRoute />
            <PrivateRoute /> */}
            {PrivateRoute()}
            {PublicRoute()}
          </Routes>
          <Footer />
        </QueryClientProvider>
        <Toaster />
      </div>
    </>
  );
}

export default App;
