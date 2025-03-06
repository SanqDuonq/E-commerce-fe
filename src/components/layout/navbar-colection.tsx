// import { NavLink } from "react-router-dom";

// const NavbarCollection = () => {
//   return (
//     <div className="flex items-center justify-center py-5 font-medium">
//       <ul className="flex gap-10 text-sm text-gray-700">
//         <li>
//           <NavLink
//             to="/collection"
//             className="flex flex-col items-center gap-1"
//           >
//             <p>Furniture</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className="flex flex-col items-center gap-1">
//             <p>Outdoor</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="flex flex-col items-center gap-1">
//             <p>Decor & Mirrors</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="flex flex-col items-center gap-1">
//             <p>Lighting</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="flex flex-col items-center gap-1">
//             <p>Rugs</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="flex flex-col items-center gap-1">
//             <p>Pillows & Throws</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="flex flex-col items-center gap-1">
//             <p>Bedding & Bath</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="flex flex-col items-center gap-1">
//             <p>Tabletop & Bar</p>
//             <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NavbarCollection;
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarCollection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  // const [hovered, setHovered] = useState(null);

  // Dữ liệu cho dropdown của từng mục
  const menuItems = [
    {
      label: "Furniture",
      links: [
        { name: "Living Room Furniture", to: "/furniture/living-room" },
        { name: "Kitchen Furniture", to: "/furniture/kitchen" },
        { name: "Bedroom Furniture", to: "/furniture/bedroom" },
        { name: "Office Furniture", to: "/furniture/office" },
      ],
    },
    {
      label: "Outdoor",
      links: [
        { name: "Lounge Furniture", to: "/outdoor/garden" },
        { name: "Dining Furniture", to: "/outdoor/patio" },
        { name: "Outdoor Decor", to: "/outdoor/patio" },
      ],
    },
    {
      label: "Decor & Mirrors",
      links: [
        { name: "Mirrors", to: "/decor/wall-art" },
        { name: "Wall Art", to: "/decor/mirrors" },
        { name: "HardWare", to: "/decor/hardware" },
        { name: "Wall Art", to: "/" },
      ],
    },
    {
      label: "Lighting",
      links: [
        { name: "Table Lamps ", to: "/decor/wall-art" },
        { name: "Mirrors", to: "/decor/mirrors" },
        { name: "Floor Lamps", to: "" },
        { name: "Desk Lamps", to: "" },
      ],
    },
    {
      label: "Rugs",
      links: [{ name: "Rugs by Type", to: "/decor/wall-art" }],
    },
    {
      label: "Pillows & Throws",
      links: [{ name: "Pillows & Throws", to: "/decor/wall-art" }],
    },
    {
      label: "Bedding & Bath ",
      links: [
        { name: "Bedding", to: "/decor/wall-art" },
        { name: "Bedding by Material", to: "/decor/mirrors" },
        { name: "Bedding by Color", to: "" },
        { name: "Bath", to: "" },
      ],
    },
    {
      label: "Tabletop & Bar",
      links: [
        { name: "Dinnerware & Flatware", to: "/decor/wall-art" },
        { name: "Drinkware & Bar", to: "/decor/mirrors" },
        { name: "Serverware", to: "/decor/mirrors" },
        { name: "Kitchen & Table Linens", to: "/decor/mirrors" },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center py-5 font-medium">
      <ul className="flex gap-10 text-sm text-gray-700 relative">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <NavLink to="#" className="flex flex-col items-center gap-1">
              <p>{item.label}</p>
            </NavLink>
            {/* Dropdown Menu */}
            {hovered === index && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                {item.links.map((link, subIndex) => (
                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarCollection;
