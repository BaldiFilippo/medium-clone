import TrendingCard from './TrendingCard'

export default function TrendingBox() {
  const articles = [
    {
      id: 1,
      author: 'Katie M. Davis',
      title: 'The 10 Best Books of 2020 for Every Kind of Reader',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'Dec 20',
    },
    {
      id: 2,
      author: 'Katie M',
      title: 'the change of the world is coming soon',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'Dec 90',
    },
    {
      id: 3,
      author: 'Filippo Paderno',
      title: 'I love books but I hate reading them. Why?',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'Dec 20',
    },
    {
      id: 4,
      author: 'Russell wright',

      title: 'Playstation 5 design is amazing. what do you think?',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'Dec 20',
    },
    {
      id: 5,
      author: 'Aron Gordon',
      title:
        'Down the wrong path: the disaster of the latest Duolingo UI update',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'Dec 20',
    },
    {
      id: 6,
      author: 'Carlo Cracco',
      title:
        'Predicting The FIFA World Cup 2022 With a Simple Model using Python',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'Dec 20',
    },
  ]
  
  return (
    <div>
      <div className=" max-w-6xl mx-auto p-5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 border border-black rounded-full mr-3  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>

          <h2 className="uppercase tracking-wider text-xs font-bold   ">
            Trending on Medium
          </h2>
        </div>

        <div className=" grid grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {articles.map((article) => (
            <TrendingCard
              key={article.id}
              id={article.id}
              author={article.author}
              title={article.title}
              avatar={article.avatar}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
