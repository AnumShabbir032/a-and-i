import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../screens/Home";
import Project from "../screens/Project";
import Location from "../screens/Location";
import Blog from "../screens/Blog";
import Contact from "../screens/Contact";
import PageNotFound from "../screens/PageNotFound";

export default function RouterApp(){
    return(
        <Router>

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/location" element={<Location />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            </Routes>

        </Router>
    )
}

