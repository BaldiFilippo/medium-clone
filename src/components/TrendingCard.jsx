export default function TrendingCard(props) {
  return (
    <div className="flex p-5">
      <div>
        <h2 className=" text-3xl font-bold text-gray-200 mr-4 ">{props.id}</h2>
      </div>
      <div className="flex flex-col cursor-pointer ">
        <div className="flex items-center">
          <img
            className=" h-6 w-6 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <h3 className="ml-4 text-xs">{props.author}</h3>
        </div>
        <h2 className="font-bold  text-base ">{props.title}</h2>
        <span className=" text-xs text-gray-400">{props.date}</span>
      </div>
    </div>
  )
}
