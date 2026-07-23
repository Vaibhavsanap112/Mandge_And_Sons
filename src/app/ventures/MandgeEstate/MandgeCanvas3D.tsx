// "use client";

// import { useEffect, useState } from "react";
// import styles from "./MandgeEstate.module.css";

// type Building = {
//   x: number;
//   y: number;
//   w: number;
//   h: number;
//   windows: { x: number; y: number; lit?: boolean }[];
// };

// // Bottom-aligned so every roofline sits at the same ground line, just off
// // the bottom edge of the viewBox — the buildings read as a low skyline
// // hugging the corners, never as tall towers reaching toward the text.
// function building(x: number, w: number, h: number, cols = 2, rows = 3): Building {
//   const cellW = 16;
//   const cellH = 22;
//   const gapX = w - cellW * cols > 0 ? (w - cellW * cols) / (cols + 1) : 10;
//   const gapY = 20;
//   const marginTop = 26;
//   const y = 916 - h;
//   const windows: Building["windows"] = [];
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       windows.push({
//         x: x + gapX + c * (cellW + gapX),
//         y: y + marginTop + r * (cellH + gapY),
//         lit: (r + c) % 3 === 0,
//       });
//     }
//   }
//   return { x, y, w, h, windows };
// }

// const LEFT_CLUSTER: Building[] = [
//   building(20, 95, 230),
//   building(140, 135, 300, 2, 4),
//   building(300, 105, 210),
// ];

// const RIGHT_CLUSTER: Building[] = [
//   building(1150, 115, 250),
//   building(1290, 150, 320, 2, 4),
//   building(1465, 100, 220),
// ];

// function BuildingGroup({ b }: { b: Building }) {
//   return (
//     <g>
//       <rect
//         x={b.x}
//         y={b.y}
//         width={b.w}
//         height={b.h}
//         fill="url(#buildingFill)"
//         stroke="var(--gold)"
//         strokeOpacity="0.28"
//         strokeWidth="1"
//       />
//       <rect x={b.x + 4} y={b.y - 6} width={b.w - 8} height="6" fill="url(#buildingFill)" stroke="var(--gold)" strokeOpacity="0.28" strokeWidth="1" />
//       {b.windows.map((win, i) => (
//         <rect
//           key={i}
//           x={win.x}
//           y={win.y}
//           width="16"
//           height="22"
//           rx="1.5"
//           fill={win.lit ? "var(--gold-light)" : "#1a2030"}
//           opacity={win.lit ? 0.55 : 0.35}
//           className={win.lit ? styles.skylineWindow : undefined}
//           style={win.lit ? { animationDuration: `${6 + (i % 3)}s`, animationDelay: `${i * 0.4}s` } : undefined}
//         />
//       ))}
//     </g>
//   );
// }

// /**
//  * Signature hero visual for Mandge Estate.
//  *
//  * Earlier passes let a full skyline run the whole height of the hero,
//  * which fought with the logo and headline. This version keeps the
//  * building silhouettes low and small, pinned to the bottom-left and
//  * bottom-right corners only, and masks them so they fade to nothing
//  * well before reaching the vertical center — the text always has a
//  * clean, quiet field behind it.
//  */
// export default function MandgeCanvas3D() {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setMouse({
//         x: (e.clientX / window.innerWidth - 0.5) * 6,
//         y: (e.clientY / window.innerHeight - 0.5) * 4,
//       });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         inset: 0,
//         overflow: "hidden",
//         pointerEvents: "none",
//         zIndex: 1,
//       }}
//     >
//       <svg
//         viewBox="0 0 1600 900"
//         width="100%"
//         height="100%"
//         preserveAspectRatio="xMidYMid slice"
//         style={{ position: "absolute", inset: 0 }}
//         className={styles.illustrationIn}
//       >
//         <defs>
//           <linearGradient id="buildingFill" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#1b2130" />
//             <stop offset="100%" stopColor="#0a0d16" />
//           </linearGradient>
//           <radialGradient id="moonBody" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#f9e5a3" />
//             <stop offset="100%" stopColor="#d4af37" />
//           </radialGradient>
//           {/* Hides the middle of the scene — where the logo and copy sit —
//               and only lets the corners show through. */}
//           <radialGradient id="centerClear" cx="50%" cy="38%" r="52%">
//             <stop offset="0%" stopColor="#000000" />
//             <stop offset="70%" stopColor="#000000" />
//             <stop offset="100%" stopColor="#ffffff" />
//           </radialGradient>
//           <mask id="cornersOnly">
//             <rect x="0" y="0" width="1600" height="900" fill="url(#centerClear)" />
//           </mask>
//         </defs>

//         {/* small moon accent, tucked away from the logo rather than behind it */}
//         <circle cx="1470" cy="100" r="70" fill="var(--gold)" opacity="0.06" />
//         <circle cx="1470" cy="100" r="30" fill="url(#moonBody)" className={styles.moonPulse} opacity="0.55" />

//         <g
//           mask="url(#cornersOnly)"
//           style={{
//             transform: `translate(${mouse.x}px, ${mouse.y}px)`,
//             transition: "transform .3s ease-out",
//           }}
//         >
//           {LEFT_CLUSTER.map((b, i) => (
//             <BuildingGroup key={`l-${i}`} b={b} />
//           ))}
//           {RIGHT_CLUSTER.map((b, i) => (
//             <BuildingGroup key={`r-${i}`} b={b} />
//           ))}
//         </g>
//       </svg>
//     </div>
//   );
// }