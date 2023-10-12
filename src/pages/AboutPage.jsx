import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <div className="">
        <Link to={`/`}>Home Page</Link>
        <Link to={`/about`}>About Page</Link>
      </div>
      <div className="">
        <a href={`/`}>Home Page</a>
        <a href={`/about`}>About Page</a>
      </div>
      <div className="">This is our new about page</div>
    </div>
  );
}
