// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { Outlet } from "react-router-dom";
// import ProgressBar from "../Components/ProgressBar";

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
//       <ProgressBar />
//       <Header />
//       <main className="mx-auto w-screen">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import { Outlet, ScrollRestoration } from 'react-router-dom';
import ProgressBar from "../Components/ProgressBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <ProgressBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Add this component here! */}
      <ScrollRestoration />
    </>
  );
};

export default Layout;
