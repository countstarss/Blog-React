import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id:1,
      title:`title1title1title1title
      title1title1title1title
      1title1title1`,
      desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
      c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
      =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
      desc=2desc=2desc=2`,
      img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
    },
    {
      id:2,
      title:`title2title2title2tit
      le2title2title2title2`,
      desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
      c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
      =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
      desc=2desc=2desc=2`,
      img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
    },
    {
      id:3,
      title:`title3title3title
      3title3title3title3titl`,
      desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
      c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
      =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
      desc=2desc=2desc=2`,
      img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
    },
    {
      id:4,
      title:`title4title4titl
      e4title4title4ti
      tle4title4title4`,
      desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
      c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
      =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
      desc=2desc=2desc=2`,
      img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
    },
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
              <div className="shadow"></div>
            </div>
            <div className="content">
              <Link  className='link' to={`/post/#{post.id}`}>
                <h1 className='text'>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home