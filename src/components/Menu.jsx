import React from 'react'

const Menu = () => {
    const posts = [
        {
          id:1,
          title:`title1title1title1title
          1title1title1`,
          desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
          c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
          =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
          desc=2desc=2desc=2`,
          img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
        },
        {
          id:2,
          title:`title2title2title2tit`,
          desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
          c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
          =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
          desc=2desc=2desc=2`,
          img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
        },
        {
          id:3,
          title:`title3title3title
          3tit`,
          desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
          c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
          =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
          desc=2desc=2desc=2`,
          img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
        },
        {
          id:4,
          title:`title4title4titl
          e4title4title4ti`,
          desc:`desc=2desc=2desc=2desc=2desc=2desc=2desc=2des
          c=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc
          =2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2desc=2
          desc=2desc=2desc=2`,
          img:"https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
        },
      ]
  return (
    <div className="menu">
        <h1>other posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src="https://b0.bdstatic.com/1fb198fb3dc4ca7723c81a809080ad3a.jpg@h_1280" alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu