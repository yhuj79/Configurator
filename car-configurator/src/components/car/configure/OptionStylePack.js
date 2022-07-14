// import {
//     Title,
//     TitleSpan,
//     OpenSection,
//     Button,
//     Image,
//     StylingPackage,
//   } from "./StyledOption";
//   import Configure from "./Configure";

// function OptionStylePack() {
//     return (
//         <div>
//           <Title
//             onClick={() => setOpen(1)}
//             style={open === 1 ? { fontSize: "25px" } : exist}
//           >
//             스타일링 패키지
//             <TitleSpan>
//               {pack === listPack[1].name ? "기본: 선택 안함" : "+ V8 스타일 팩"}
//             </TitleSpan>
//           </Title>
//           <OpenSection style={open === 1 ? exist : none}>
//             <StylingPackage>
//               <Image
//                 src={require(`./file/source/stylingPackage.jpeg`)}
//                 style={{ borderRadius: "10px" }}
//                 alt=""
//               />
//             </StylingPackage>
//             <div>
//               <Button
//                 onClick={() => Select(setPack, listPack, setPricePack, 2)}
//                 style={pack === listPack[2].name ? clicked : {}}
//               >
//                 O
//               </Button>
//               <Button
//                 onClick={
//                   color === listColor[3].name
//                     ? undefined
//                     : () => Select(setPack, listPack, setPricePack, 1)
//                 }
//                 style={
//                   color === listColor[3].name
//                     ? { opacity: "0.2" }
//                     : pack === listPack[1].name
//                     ? clicked
//                     : {}
//                 }
//               >
//                 X
//               </Button>
//             </div>
//           </OpenSection>
//         </div>
//     );
// }

// export default OptionStylePack;