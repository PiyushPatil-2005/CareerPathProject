// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Mentors = () => {

//   const { speciality } = useParams()
//   const [ filterDoc, setFilterDoc ] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const navigate = useNavigate()

//   const { mentors } = useContext(AppContext);

//   const applyFilter = () => {
//     if(speciality) {
//       setFilterDoc(mentors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(mentors)
//     }
//   }

//   useEffect(()=>{
//     applyFilter()
//   }, [mentors, speciality])

//   return (
//     <div>
//       <p className='text-[18px] text-gray-600'>Browse through the experienced mentors.</p>
//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         <button className={` py-1 px-3 border rounded text transition-all sm:hidden ${showFilter ? 'bg-[#5f6FFF] text-white' : ''} `} onClick={()=> setShowFilter(prev => !prev)}>Fliter</button>
//         <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex' }`}>
//           <p onClick={()=> speciality === 'Engineering' ? navigate('/mentors') : navigate('/mentors/Engineering')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trandition-all cursor-pointer ${speciality === "Engineering" ? "bg-indigo-100 text-black" : ""}`}>Engineering</p>
//           <p onClick={()=> speciality === 'Medical' ? navigate('/mentors') : navigate('/mentors/Medical')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trandition-all cursor-pointer ${speciality === "Medical" ? "bg-indigo-100 text-black" : ""}`}>Medical</p>
//           <p onClick={()=> speciality === 'Management' ? navigate('/mentors') : navigate('/mentors/Management')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trandition-all cursor-pointer ${speciality === "Management" ? "bg-indigo-100 text-black" : ""}`}>Management</p>
//           <p onClick={()=> speciality === 'Design' ? navigate('/mentors') : navigate('/mentors/Design')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trandition-all cursor-pointer ${speciality === "Design" ? "bg-indigo-100 text-black" : ""}`}>Design</p>
//           <p onClick={()=> speciality === 'Law' ? navigate('/mentors') : navigate('/mentors/Law')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trandition-all cursor-pointer ${speciality === "Law" ? "bg-indigo-100 text-black" : ""}`}>Law</p>
//           <p onClick={()=> speciality === 'Arts' ? navigate('/mentors') : navigate('/mentors/Arts')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trandition-all cursor-pointer ${speciality === "Arts" ? "bg-indigo-100 text-black" : ""}`}>Arts</p>
//         </div>
//         <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6'>
//           {
//             filterDoc.map((item, index)=>(
//             <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
//                <img className='w-full h-68 bg-blue-50' src={item.image} alt="" /> 
//                <div className='p-4'>
//                 <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500' } `}>
//                     <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500' } rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available' }</p>
//                 </div>
//                 <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                 <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                </div>
//             </div>
//         ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Mentors


import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Mentors = () => {

  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();
  const { mentors } = useContext(AppContext);

  const categories = [
    "Engineering",
    "Medical",
    "Management",
    "Design",
    "Law",
    "Arts"
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(mentors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(mentors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [mentors, speciality]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 py-10">

      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Discover Mentors
        </h1>
        <p className="text-gray-500 mt-2">
          Connect with experienced professionals to guide your career journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* SIDEBAR FILTER */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-64 h-fit">

          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Categories
          </h3>

          <div className="flex flex-col gap-3">

            {["Engineering", "Medical", "Management", "Design", "Law", "Arts"].map((cat) => (
              <button
                key={cat}
                onClick={() => speciality === cat ? navigate('/mentors') : navigate(`/mentors/${cat}`)}
                className={`text-left px-4 py-2 rounded-lg transition
              ${speciality === cat
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-50 text-gray-600"
                  }`}
              >
                {cat}
              </button>
            ))}

          </div>
        </div>

        {/* MENTOR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 flex-1">

          {filterDoc.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* STATUS BADGE */}
                <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full
                ${item.available ? "bg-green-500 text-white" : "bg-gray-400 text-white"}
              `}>
                  {item.available ? "Available" : "Offline"}
                </span>
              </div>

              {/* INFO */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-indigo-600 font-medium">
                  {item.speciality}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {item.about?.slice(0, 90)}...
                </p>

                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                  Book Session
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Mentors;