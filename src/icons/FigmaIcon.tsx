import { Icon } from "native-base";
import * as React from "react";
import { Path, G, Defs, Rect, ClipPath } from "react-native-svg";

function FigmaIcon({ fill, ...props }: any) {
  return (
    <Icon viewBox="0 0 19 28" {...props}>
      <G clipPath="url(#clip0_409_1204)">
        <Path
          d="M4.508 27.048C5.10034 27.0485 5.68697 26.9323 6.23437 26.706C6.78176 26.4797 7.27919 26.1477 7.69822 25.7291C8.11725 25.3104 8.44967 24.8133 8.67647 24.2661C8.90327 23.7189 9.02 23.1323 9.02 22.54V18.032H4.508C3.916 18.032 3.3298 18.1486 2.78286 18.3752C2.23593 18.6017 1.73897 18.9338 1.32036 19.3524C0.901756 19.771 0.569699 20.2679 0.343151 20.8149C0.116603 21.3618 0 21.948 0 22.54C0 23.132 0.116603 23.7182 0.343151 24.2651C0.569699 24.8121 0.901756 25.309 1.32036 25.7276C1.73897 26.1462 2.23593 26.4783 2.78286 26.7048C3.3298 26.9314 3.916 27.048 4.508 27.048V27.048Z"
          fill="#0ACF83"
        />
        <Path
          d="M0 13.524C0 12.3284 0.474949 11.1818 1.32036 10.3364C2.16578 9.49095 3.3124 9.016 4.508 9.016H9.02V18.032H4.508C3.3124 18.032 2.16578 17.5571 1.32036 16.7116C0.474949 15.8662 0 14.7196 0 13.524V13.524Z"
          fill="#A259FF"
        />
        <Path
          d="M0 4.508C-4.70386e-07 3.3131 0.474399 2.16708 1.31895 1.32178C2.1635 0.476477 3.3091 0.00106025 4.504 0L9.012 0V9.016H4.512C3.91966 9.01653 3.33303 8.90031 2.78563 8.674C2.23824 8.44768 1.74081 8.11571 1.32178 7.69705C0.902746 7.27839 0.570332 6.78126 0.343533 6.23406C0.116735 5.68686 -2.33179e-07 5.10034 0 4.508V4.508Z"
          fill="#F24E1E"
        />
        <Path
          d="M9.01562 0H13.5236C14.7192 0 15.8658 0.474949 16.7113 1.32036C17.5567 2.16578 18.0316 3.3124 18.0316 4.508C18.0316 5.7036 17.5567 6.85022 16.7113 7.69564C15.8658 8.54105 14.7192 9.016 13.5236 9.016H9.01562V0Z"
          fill="#FF7262"
        />
        <Path
          d="M18.0316 13.524C18.0316 14.4156 17.7672 15.2872 17.2719 16.0285C16.7765 16.7698 16.0725 17.3476 15.2488 17.6888C14.425 18.03 13.5186 18.1193 12.6442 17.9454C11.7697 17.7714 10.9664 17.3421 10.336 16.7116C9.70553 16.0812 9.27619 15.2779 9.10225 14.4035C8.9283 13.529 9.01758 12.6226 9.35878 11.7989C9.69998 10.9751 10.2778 10.2711 11.0191 9.77573C11.7605 9.28039 12.632 9.016 13.5236 9.016C14.1156 9.016 14.7018 9.1326 15.2488 9.35915C15.7957 9.5857 16.2927 9.91776 16.7113 10.3364C17.1299 10.755 17.4619 11.2519 17.6885 11.7989C17.915 12.3458 18.0316 12.932 18.0316 13.524V13.524Z"
          fill="#1ABCFE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_409_1204">
          <Rect width="18.032" height="27.048" fill="white" />
        </ClipPath>
      </Defs>
    </Icon>
  );
}
// function GitHub({ fill, ...props }: any) {
//   return (
//     <Icon viewBox="0 0 16 16" {...props}>
//       <Path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
//         fill={fill ?? "gray.100"}
//       />
//     </Icon>
//   );
// }
export default FigmaIcon;
