import React from "react"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Blog.css";
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <ScreenHeading title={"My Blog"} subHeading={"Will click through to read my article"} />

          <div className='content grid'>
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
      </section>
    </>
  )
}

export default Blog
