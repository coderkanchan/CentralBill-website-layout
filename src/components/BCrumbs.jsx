import { Link, useLocation } from "react-router-dom"

export default function BCrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  // function formatPath(path) {
  //   return path
  //     .replace(/([A-Z])/g, "$1")
  //     .trim()
  //     .replace(/^\w/, (c) => c.toUpperCase());
  // }

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 ">
      <Link to={"/"}
        className={`text-xl hover:underline ${location.pathname === "/" ? "text-white underline" : "text-[#003459F5]"}`}>Home</Link>
      {paths.map((path, index) => {
        const url = "/" + paths.slice(0, index + 1).join("/");
        const label = path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <span key={url} className="text-xl text-[#003459F5] ">
            {" > "}
            {/* <Link to={url} className="hover:underline">{formatPath(path)}</Link> */}
            <Link to={url} className=" hover:underline">{label}</Link>

          </span>
        )
      })}
    </div>
  )
}




