const Pagination = () => {
  return (
      <div className="p-4 flex items-center justify-between text-gray-500">
          <button className="py-2 px-4 rounded-md bg-slate-200 text-xs disabled:opacity-50 disabled:cursor-not-allowed font-semibold">Prev</button>
          <div className="text-sm gap-2 items-center flex">
              <button className="px-2 rounded-sm bg-learnOrangeLight">1</button>
              <button className="px-2 rounded-sm">2</button>
              <button className="px-2 rounded-sm">3</button>
              ...
              <button className="px-2 rounded-sm">10</button>
          </div>
          <button className="py-2 px-4 rounded-md bg-slate-200 text-xs disabled:opacity-50 disabled:cursor-not-allowed font-semibold">Next</button>
    </div>
  )
}

export default Pagination