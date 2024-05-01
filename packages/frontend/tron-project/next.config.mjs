/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// export default () =>{
//     const rewrites = () => {

//         return [
//             {
//                 source:"/",
//                 destination:"https://api.shasta.trongrid.io"
//             }
//         ]
//     };
//     return {
//         rewrites
//     };
// };
