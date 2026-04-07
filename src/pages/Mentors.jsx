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


// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Mentors = () => {

//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);

//   const navigate = useNavigate();
//   const { mentors } = useContext(AppContext);

//   const categories = [
//     "Engineering",
//     "Medical",
//     "Management",
//     "Design",
//     "Law",
//     "Arts"
//   ];

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(mentors.filter(doc => doc.speciality === speciality));
//     } else {
//       setFilterDoc(mentors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [mentors, speciality]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 py-10">

//       {/* PAGE TITLE */}
//       <div className="max-w-7xl mx-auto mb-10">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Discover Mentors
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Connect with experienced professionals to guide your career journey.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

//         {/* SIDEBAR FILTER */}
//         <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-64 h-fit">

//           <h3 className="text-lg font-semibold mb-4 text-gray-700">
//             Categories
//           </h3>

//           <div className="flex flex-col gap-3">

//             {["Engineering", "Medical", "Management", "Design", "Law", "Arts"].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => speciality === cat ? navigate('/mentors') : navigate(`/mentors/${cat}`)}
//                 className={`text-left px-4 py-2 rounded-lg transition
//               ${speciality === cat
//                     ? "bg-indigo-600 text-white"
//                     : "hover:bg-indigo-50 text-gray-600"
//                   }`}
//               >
//                 {cat}
//               </button>
//             ))}

//           </div>
//         </div>

//         {/* MENTOR GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 flex-1">

//           {filterDoc.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
//             >

//               {/* IMAGE */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
//                 />

//                 {/* STATUS BADGE */}
//                 <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full
//                 ${item.available ? "bg-green-500 text-white" : "bg-gray-400 text-white"}
//               `}>
//                   {item.available ? "Available" : "Offline"}
//                 </span>
//               </div>

//               {/* INFO */}
//               <div className="p-5">

//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.name}
//                 </h3>

//                 <p className="text-sm text-indigo-600 font-medium">
//                   {item.speciality}
//                 </p>

//                 <p className="text-sm text-gray-500 mt-2">
//                   {item.about?.slice(0, 90)}...
//                 </p>

//                 <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                   Book Session
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Mentors;

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

/* ─── Google Fonts injection (Playfair Display + DM Sans) ─── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500;600&display=swap";
if (!document.head.querySelector('link[href*="Playfair"]'))
  document.head.appendChild(fontLink);

/* ─── Inline style sheet (animations + scrollbar) ─── */
const styleTag = document.createElement("style");
styleTag.textContent = `
  .mentor-page * { box-sizing: border-box; }
  .mentor-page { font-family: 'DM Sans', sans-serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(234,179,8,0); }
    50%       { box-shadow: 0 0 14px 4px rgba(234,179,8,0.18); }
  }

  .mentor-fade-up   { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) both; }
  .mentor-fade-up-1 { animation-delay: 0.05s; }
  .mentor-fade-up-2 { animation-delay: 0.12s; }
  .mentor-fade-up-3 { animation-delay: 0.19s; }
  .mentor-fade-up-4 { animation-delay: 0.26s; }
  .mentor-fade-up-5 { animation-delay: 0.33s; }
  .mentor-fade-up-6 { animation-delay: 0.40s; }

  .mentor-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.35s cubic-bezier(.22,.68,0,1.2),
                border-color 0.3s,
                box-shadow 0.35s;
  }
  .mentor-card:hover {
    transform: translateY(-6px) scale(1.012);
    border-color: rgba(234,179,8,0.45);
    box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(234,179,8,0.2);
  }
  .mentor-card:hover .mentor-img { transform: scale(1.07); }
  .mentor-img { transition: transform 0.5s cubic-bezier(.22,.68,0,1.2); }

  .cat-btn {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    color: rgba(255,255,255,0.55);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 9px 16px;
    text-align: left;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: 0.02em;
  }
  .cat-btn:hover {
    background: rgba(234,179,8,0.1);
    border-color: rgba(234,179,8,0.35);
    color: #EAB308;
  }
  .cat-btn.active {
    background: linear-gradient(135deg, rgba(234,179,8,0.22), rgba(234,179,8,0.08));
    border-color: rgba(234,179,8,0.6);
    color: #EAB308;
    animation: pulseGlow 2.5s infinite;
  }

  .book-btn {
    width: 100%;
    padding: 11px;
    border-radius: 10px;
    border: 1px solid rgba(234,179,8,0.5);
    background: transparent;
    color: #EAB308;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.28s ease;
    position: relative;
    overflow: hidden;
  }
  .book-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(234,179,8,0.18), rgba(234,179,8,0.04));
    opacity: 0;
    transition: opacity 0.28s;
  }
  .book-btn:hover::before { opacity: 1; }
  .book-btn:hover {
    border-color: #EAB308;
    box-shadow: 0 0 20px rgba(234,179,8,0.22);
    letter-spacing: 0.1em;
  }

  .badge-available {
    background: rgba(34,197,94,0.18);
    color: #4ADE80;
    border: 1px solid rgba(74,222,128,0.3);
  }
  .badge-offline {
    background: rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.4);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .search-input {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    padding: 10px 14px 10px 38px;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .search-input::placeholder { color: rgba(255,255,255,0.3); }
  .search-input:focus {
    border-color: rgba(234,179,8,0.45);
    box-shadow: 0 0 0 3px rgba(234,179,8,0.08);
  }

  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    margin: 18px 0;
  }

  .count-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(234,179,8,0.15);
    color: #EAB308;
    font-size: 11px;
    font-weight: 600;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 99px;
    margin-left: auto;
  }

  .mentor-page ::-webkit-scrollbar { width: 4px; }
  .mentor-page ::-webkit-scrollbar-track { background: transparent; }
  .mentor-page ::-webkit-scrollbar-thumb { background: rgba(234,179,8,0.25); border-radius: 4px; }
`;
if (!document.head.querySelector("style[data-mentor]")) {
  styleTag.setAttribute("data-mentor", "1");
  document.head.appendChild(styleTag);
}

/* ─── Category icon map ─── */
const ICONS = {
  Engineering: "⚙",
  Medical: "⚕",
  Management: "◈",
  Design: "✦",
  Law: "⚖",
  Arts: "✧",
};

const CATEGORIES = ["Engineering", "Medical", "Management", "Design", "Law", "Arts"];

/* ──────────────────────────────────────────────────────────── */
const Mentors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [search, setSearch] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const navigate = useNavigate();
  const { mentors } = useContext(AppContext);

  useEffect(() => {
    let list = speciality
      ? mentors.filter((d) => d.speciality === speciality)
      : mentors;
    if (search.trim())
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.speciality.toLowerCase().includes(search.toLowerCase())
      );
    setFilterDoc(list);
  }, [mentors, speciality, search]);

  const countFor = (cat) =>
    mentors.filter((d) => d.speciality === cat).length;

  return (
    <div
      className="mentor-page"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0D0F1A 0%, #111827 55%, #0C1220 100%)",
        padding: "0 0 80px",
      }}
    >
      {/* ── HERO HEADER ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "56px 40px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ambient orb */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "10%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(234,179,8,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            className="mentor-fade-up"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#EAB308",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            CareerPath — Discover
          </p>
          <h1
            className="mentor-fade-up mentor-fade-up-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 700,
              color: "#F8F5EE",
              margin: "0 0 14px",
              lineHeight: 1.15,
            }}
          >
            Find Your{" "}
            <span style={{ color: "#EAB308", fontStyle: "italic" }}>
              Mentor
            </span>
          </h1>
          <p
            className="mentor-fade-up mentor-fade-up-2"
            style={{
              color: "rgba(255,255,255,0.42)",
              fontSize: "15px",
              fontWeight: 300,
              maxWidth: "480px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Connect with seasoned professionals who've walked the path you're
            embarking on.
          </p>

          {/* Stats strip */}
          <div
            className="mentor-fade-up mentor-fade-up-3"
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Mentors", value: mentors.length || "50+" },
              { label: "Domains", value: CATEGORIES.length },
              { label: "Avg. Rating", value: "4.9★" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#EAB308",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    margin: "4px 0 0",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 40px 0",
          display: "flex",
          gap: "32px",
          alignItems: "flex-start",
        }}
      >
        {/* ── SIDEBAR ── */}
        <aside
          className="mentor-fade-up mentor-fade-up-2"
          style={{
            width: "220px",
            flexShrink: 0,
            position: "sticky",
            top: "24px",
          }}
        >
          {/* Search */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.3)",
                fontSize: "14px",
                pointerEvents: "none",
              }}
            >
              ⌕
            </span>
            <input
              className="search-input"
              type="text"
              placeholder="Search mentors…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <p
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Domains
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {/* All */}
            <button
              className={`cat-btn${!speciality ? " active" : ""}`}
              onClick={() => navigate("/mentors")}
            >
              <span style={{ fontSize: "14px" }}>◉</span>
              All Mentors
              <span className="count-pill">{mentors.length}</span>
            </button>

            <div className="divider" />

            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`cat-btn${speciality === cat ? " active" : ""}`}
                onClick={() =>
                  speciality === cat
                    ? navigate("/mentors")
                    : navigate(`/mentors/${cat}`)
                }
              >
                <span style={{ fontSize: "13px" }}>{ICONS[cat]}</span>
                {cat}
                <span className="count-pill">{countFor(cat)}</span>
              </button>
            ))}
          </div>

          {/* sidebar footer note */}
          <div
            style={{
              marginTop: "28px",
              padding: "14px",
              borderRadius: "12px",
              background: "rgba(234,179,8,0.06)",
              border: "1px solid rgba(234,179,8,0.15)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Sessions are 1-on-1 &amp; tailored to your goals. Book anytime.
            </p>
          </div>
        </aside>

        {/* ── MENTOR GRID ── */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {/* Result count */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
              }}
            >
              Showing{" "}
              <span style={{ color: "#EAB308", fontWeight: 600 }}>
                {filterDoc.length}
              </span>{" "}
              {speciality ? `${speciality} ` : ""}mentor
              {filterDoc.length !== 1 ? "s" : ""}
            </p>
            {speciality && (
              <button
                onClick={() => navigate("/mentors")}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "12px",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#EAB308")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.35)")
                }
              >
                ✕ Clear filter
              </button>
            )}
          </div>

          {filterDoc.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  marginBottom: "8px",
                }}
              >
                No mentors found
              </p>
              <p style={{ fontSize: "13px" }}>
                Try a different filter or search term.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {filterDoc.map((item, i) => (
                <div
                  key={item._id}
                  className={`mentor-card mentor-fade-up mentor-fade-up-${Math.min(i + 1, 6)}`}
                  onClick={() => navigate(`/appointment/${item._id}`)}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                      background: "#1a1f2e",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mentor-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(10,12,22,0.85) 0%, transparent 55%)",
                      }}
                    />

                    {/* Status badge */}
                    <span
                      className={
                        item.available ? "badge-available" : "badge-offline"
                      }
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        padding: "4px 10px",
                        borderRadius: "99px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.available ? "● Available" : "○ Offline"}
                    </span>

                    {/* Speciality chip on image bottom */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#EAB308",
                        background: "rgba(234,179,8,0.12)",
                        border: "1px solid rgba(234,179,8,0.25)",
                        padding: "4px 10px",
                        borderRadius: "99px",
                      }}
                    >
                      {ICONS[item.speciality]} {item.speciality}
                    </span>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "18px 18px 16px" }}>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#F8F5EE",
                        margin: "0 0 6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.38)",
                        margin: "0 0 12px",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.about}
                    </p>

                    <div className="divider" style={{ margin: "12px 0" }} />

                    <button
                      className="book-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/appointment/${item._id}`);
                      }}
                    >
                      Book a Session →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Mentors;
