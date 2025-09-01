import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";
import { About } from "../pages/about/about";
import { Course } from "../pages/course/course";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element= {<Home />}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/course" element={<Course/>}/>
      </Route>
    </Routes>
  );
};
