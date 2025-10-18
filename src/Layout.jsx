import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from './components/Navbar.jsx';
import BCrumbs from "./components/BCrumbs.jsx";
import Footer from './components/Footer.jsx';

export default function Layout() {
  const location = useLocation()
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="absolute z-20 top-[120px] w-full">
        <BCrumbs />
      </div>
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div >
  )
}