import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
  const BLOG_DATA = [
    {
      id: 1,
      title: 'Tech Interview Tips Given By A FAANG Recruiter',
      date: 'October 22, 2022',
      thumbanil: './images/Image-3.jpeg',
      blogContext:
        'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual...',
      pageData: [
        {
          paraTitle: 'Do you have a tech interview coming up aaa',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual Do you have a tech interview comig',
        },
        {
          paraTitle: 'Do you have a tech interview coming up',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual',
        },
        {
          paraTitle: 'Do you have a tech interview coming up aaa',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual Do you have a tech interview comig',
        },
        {
          paraTitle: 'Do you have a tech interview coming up',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual',
        },
      ],
    },
    {
      id: 2,
      title: 'Can you help translate this site into a foreign language',
      date: 'Septempber 25, 2022',
      thumbanil: './images/Image-2.jpeg',
      blogContext:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      pageData: [
        {
          paraTitle: 'Do you have a tech interview coming up bbb',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
        {
          paraTitle: 'Do you have a tech interview coming up',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual',
        },
      ],
    },

    {
      id: 3,
      title: 'Vero eos et accusamus et iusto odio dignissimos',
      date: 'May 10, 2022',
      thumbanil: './images/Image-1.jpeg',
      blogContext:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...',
      pageData: [
        {
          paraTitle: 'Do you have a tech interview coming up ccc',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual',
        },
        {
          paraTitle: 'Do you have a tech interview coming up',
          paraData:
            'Do you have a tech interview coming up? Are you preparing for a Leetcode style interview? Then you should keep reading to learn more as well as find free resources that can help you ace your next coding interview! Time constrained practice A usual',
        },
      ],
    },
  ];

  const BlogCard = ({ id, title, date, summary, thumbanil, pageData }) => {
    return (
      <div className="blog__container">
        <img
          className="post-card__thumbnail"
          src={require(`${thumbanil}`)}
          alt="some"
        />
        <div className="post_title_container">
          <h2 className="post-card__title">{title}</h2>
          <div className="post-meta">{date}</div>
          <p className="para">{summary}</p>
          <Link
            to="/page"
            state={{
              title: title,
              date: date,
              data: pageData,
              image: thumbanil,
            }}
          >
            <button className="button button--yellow button--small">
              Read more
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="blog__title">
        <h1>MY BLOG</h1>
      </div>
      {BLOG_DATA.map((item, index) => {
        return (
          <BlogCard
            key={index}
            id={item.id}
            title={item.title}
            date={item.date}
            summary={item.blogContext}
            thumbanil={item.thumbanil}
            pageData={item.pageData}
          />
        );
      })}
    </div>
  );
}
