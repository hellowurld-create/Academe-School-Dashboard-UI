import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeacherListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-8'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="">
            <button>
              <Image src={'/filter.png'} width={20} height={20} alt=""/>
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className=""></div>
      {/* PAGINATION */}
      <div className=""></div>
    </div>
  )
}

export default TeacherListPage