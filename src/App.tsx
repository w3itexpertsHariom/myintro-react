import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import '../src/assets/icons/switcher/switcher.css'
import 'swiper/css';
import '../src/assets/css/blog.css'
import '../src/assets/css/plugins.css'
import '../src/assets/css/comman.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import '../src/assets/css/style.css'
import '../src/assets/css/templete.css'

import Header from "./components/Header";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Header4 from "./components/Header4";
import Header5 from "./components/Header5";
import Header6 from "./components/Header6";
import Header7 from "./components/Header7";
import Header8 from "./components/Header8";
import Header9 from "./components/Header9";
import Header10 from "./components/Header10";
import Header11 from "./components/Header11";
import Header12 from "./components/Header12";
import Header13 from "./components/Header13";
import Header14 from "./components/Header14";
import Header15 from "./components/Header15";
import Header16 from "./components/Header16";
import Home from "./pages/Home";
import Home_2 from "./pages/Home_2";
import Home_3 from "./pages/Home_3";
import Home_4 from "./pages/Home_4";
import Home_5 from "./pages/Home_5";
import Home_6 from "./pages/Home_6";
import Home_7 from "./pages/Home_7";
import Home_8 from "./pages/Home_8";
import Home_9 from "./pages/Home_9";
import Home_10 from "./pages/Home_10";
import Home_11 from "./pages/Home_11";
import Home_12 from "./pages/Home_12";
import Home_13 from "./pages/Home_13";
import Home_14 from "./pages/Home_14";
import Home_15 from "./pages/Home_15";
import Home_16 from "./pages/Home_16";
import About from "./pages/About";
import About_2 from "./pages/About_2";
import About_3 from "./pages/About_3";
import About_4 from "./pages/About_4";
import About_5 from "./pages/About_5";
import About_6 from "./pages/About_6";
import About_7 from "./pages/About_7";
import About_8 from "./pages/About_8";
import About_9 from "./pages/About_9";
import About_10 from "./pages/About_10";
import About_11 from "./pages/About_11";
import About_12 from "./pages/About_12";
import About_13 from "./pages/About_13";
import Resume from "./pages/Resume";
import Resume_2 from "./pages/Resume_2";
import Resume_3 from "./pages/Resume_3";
import Resume_4 from "./pages/Resume_4";
import Resume_5 from "./pages/Resume_5";
import Resume_6 from "./pages/Resume_6";
import Resume_7 from "./pages/Resume_7";
import Resume_8 from "./pages/Resume_8";
import Resume_9 from "./pages/Resume_9";
import Resume_10 from "./pages/Resume_10";
import Resume_11 from "./pages/Resume_11";
import Resume_12 from "./pages/Resume_12";
import Resume_13 from "./pages/Resume_13";
import Portfolio from "./pages/Portfolio";
import Portfolio_2 from "./pages/Portfolio_2";
import Portfolio_3 from "./pages/Portfolio_3";
import Portfolio_4 from "./pages/Portfolio_4";
import Portfolio_5 from "./pages/Portfolio_5";
import Portfolio_6 from "./pages/Portfolio_6";
import Portfolio_7 from "./pages/Portfolio_7";
import Portfolio_8 from "./pages/Portfolio_8";
import Portfolio_9 from "./pages/Portfolio_9";
import Portfolio_10 from "./pages/Portfolio_10";
import Portfolio_11 from "./pages/Portfolio_11";
import Portfolio_12 from "./pages/Portfolio_12";
import Portfolio_13 from "./pages/Portfolio_13";
import ContectPage from "./pages/ContectPage";
import ComingSoon from "./pages/ComingSoon";
import UnderMaintenance from "./pages/UnderMaintenance";
import Error404 from "./pages/Error404";
import GalleryBlog from "./pages/GalleryBlog";
import GalleryBlog2 from "./pages/GalleryBlog2";

import Switcher from "./components/Switcher";
import ColorSwicher from "./components/ColorSwicher";
import AnimateCursor from "./constent/AnimateCursor";
import ScrollTop from "./elements/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <AnimateCursor />
        <Routes>
          <Route element={<Layout1 />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us-photographer" element={<About />} />
            <Route path="/resume-photographer" element={<Resume />} />
            <Route path="/portfolio-photographer" element={<Portfolio />} />
            <Route path="/contact-us-photographer" element={<ContectPage />} />
          </Route>
          <Route element={<Layout2 />}>
            <Route path="/business-man" element={<Home_2 />} />
            <Route path="/about-us-business-man" element={<About_2 />} />
            <Route path="/resume-business-man" element={<Resume_2 />} />
            <Route path="/portfolio-business-man" element={<Portfolio_2 />} />
            <Route path="/contact-us-business-man" element={<ContectPage />} />
          </Route>
          <Route element={<Layout3 />}>
            <Route path="/modal" element={<Home_3 />} />
            <Route path="/about-us-modal" element={<About_3 />} />
            <Route path="/resume-modal" element={<Resume_3 />} />
            <Route path="/portfolio-modal" element={<Portfolio_3 />} />
            <Route path="/contact-us-modal" element={<ContectPage />} />
          </Route>
          <Route element={<Layout4 />}>
            <Route path="/doctor" element={<Home_4 />} />
            <Route path="/about-us-doctor" element={<About_4 />} />
            <Route path="/resume-doctor" element={<Resume_4 />} />
            <Route path="/portfolio-doctor" element={<Portfolio_4 />} />
            <Route path="/contact-us-doctor" element={<ContectPage />} />
          </Route>
          <Route element={<Layout5 />}>
            <Route path="/security" element={<Home_5 />} />
            <Route path="/about-us-security" element={<About_5 />} />
            <Route path="/resume-security" element={<Resume_5 />} />
            <Route path="/portfolio-security" element={<Portfolio_5 />} />
            <Route path="/contact-us-security" element={<ContectPage />} />
          </Route>
          <Route element={<Layout6 />}>
            <Route path="/health-coach" element={<Home_6 />} />
            <Route path="/about-us-health-coach" element={<About_6 />} />
            <Route path="/resume-health-coach" element={<Resume_6 />} />
            <Route path="/portfolio-health-coach" element={<Portfolio_6 />} />
            <Route path="/contact-us-health-coach" element={<ContectPage />} />
          </Route>
          <Route element={<Layout7 />}>
            <Route path="/electrician" element={<Home_7 />} />
            <Route path="/about-us-electrician" element={<About_7 />} />
            <Route path="/resume-electrician" element={<Resume_7 />} />
            <Route path="/portfolio-electrician" element={<Portfolio_7 />} />
            <Route path="/contact-us-electrician" element={<ContectPage />} />
          </Route>
          <Route element={<Layout8 />}>
            <Route path="/blogger" element={<Home_8 />} />
            <Route path="/about-us-blogger" element={<About_8 />} />
            <Route path="/resume-blogger" element={<Resume_8 />} />
            <Route path="/portfolio-blogger" element={<Portfolio_8 />} />
            <Route path="/contact-us-blogger" element={<ContectPage />} />
          </Route>
          <Route element={<Layout9 />}>
            <Route path="/web-developer" element={<Home_9 />} />
            <Route path="/about-us-web-developer" element={<About_9 />} />
            <Route path="/resume-web-developer" element={<Resume_9 />} />
            <Route path="/portfolio-web-developer" element={<Portfolio_9 />} />
            <Route path="/contact-us-web-developer" element={<ContectPage />} />
          </Route>
          <Route element={<Layout10 />}>
            <Route path="/swimmer" element={<Home_10 />} />
            <Route path="/about-us-swimmer" element={<About_10 />} />
            <Route path="/resume-swimmer" element={<Resume_10 />} />
            <Route path="/portfolio-swimmer" element={<Portfolio_10 />} />
            <Route path="/contact-us-swimmer" element={<ContectPage />} />
          </Route>
          <Route element={<Layout11 />}>
            <Route path="/dance-trainer" element={<Home_11 />} />
            <Route path="/about-us-dance-trainer" element={<About_11 />} />
            <Route path="/resume-dance-trainer" element={<Resume_11 />} />
            <Route path="/portfolio-dance-trainer" element={<Portfolio_11 />} />
            <Route path="/contact-us-dance-trainer" element={<ContectPage />} />
          </Route>
          <Route element={<Layout12 />}>
            <Route path="/news-anchor" element={<Home_12 />} />
            <Route path="/about-us-news-anchor" element={<About_12 />} />
            <Route path="/resume-news-anchor" element={<Resume_12 />} />
            <Route path="/portfolio-news-anchor" element={<Portfolio_12 />} />
            <Route path="/contact-us-news-anchor" element={<ContectPage />} />
          </Route>
          <Route element={<Layout13 />}>
            <Route path="/youtube" element={<Home_13 />} />
            <Route path="/about-us-youtube" element={<About_13 />} />
            <Route path="/resume-youtube" element={<Resume_13 />} />
            <Route path="/portfolio-youtube" element={<Portfolio_13 />} />
            <Route path="/contact-us-youtube" element={<ContectPage />} />
          </Route>
          <Route element={<Layout14 />}>
            <Route path="/blog-single-sidebar" element={<Home_14 title={'BLOG DETAILS'} />} />
          </Route>
          <Route element={<Layout15 />}>
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/under-maintenance" element={<UnderMaintenance />} />
            <Route path="/error-404" element={<Error404 />} />
          </Route>
          <Route element={<Layout16 />}>
            <Route path="/blog" element={<GalleryBlog />} />
          </Route>
          <Route element={<Layout17 />}>
            <Route path="/blog-list" element={<GalleryBlog2 />} />
          </Route>
          <Route element={<Layout18 />}>
            <Route path="/blog-list-sidebar" element={<Home_16  />} />
          </Route>
          <Route element={<Layout19 />}>
            <Route path="/blog-single" element={<Home_15 />} />
          </Route>
        </Routes>
        <Switcher />
        <ColorSwicher />
        <ScrollTop />
      </Router>

    </>
  )
}

const Layout1 = () => {
  return (
    <>

      <Header />
      <Outlet />
    </>
  )
}
const Layout2 = () => {
  return (
    <>
      <Header2 />
      <Outlet />
    </>
  )
}
const Layout3 = () => {
  return (
    <>
      <Header3 />
      <Outlet />
    </>
  )
}
const Layout4 = () => {
  return (
    <>
      <Header4 />
      <Outlet />
    </>
  )
}
const Layout5 = () => {
  return (
    <>
      <Header5 />
      <Outlet />
    </>
  )
}
const Layout6 = () => {
  return (
    <>
      <Header6 />
      <Outlet />
    </>
  )
}
const Layout7 = () => {
  return (
    <>
      <Header7 />
      <Outlet />
    </>
  )
}
const Layout8 = () => {
  return (
    <>
      <Header8 />
      <Outlet />
    </>
  )
}
const Layout9 = () => {
  return (
    <>
      <Header9 />
      <Outlet />
    </>
  )
}
const Layout10 = () => {
  return (
    <>
      <Header10 />
      <Outlet />
    </>
  )
}
const Layout11 = () => {
  return (
    <>
      <Header11 />
      <Outlet />
    </>
  )
}
const Layout12 = () => {
  return (
    <>
      <Header12 />
      <Outlet />
    </>
  )
}
const Layout13 = () => {
  return (
    <>
      <Header13 />
      <Outlet />
    </>
  )
}
const Layout14 = () => {
  return (
    <>
      <Header14 />
      <Outlet />
    </>
  )
}
const Layout15 = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
const Layout16 = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
const Layout17 = () => {
  return (
    <>
      <Header15 />
      <Outlet />
    </>
  )
}
const Layout18 = () => {
  return (
    <>
      <Header14 />
      <Outlet />
    </>
  )
}
const Layout19 = () => {
  return (
    <>
      <Header16 />
      <Outlet />
    </>
  )
}

export default App
