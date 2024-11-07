import { useToken } from "native-base";
import React from "react";

export function AlertIcon({...props}) {
  const color = useToken('colors', 'yellow.600');
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.42426 8.9675C6.85593 4.65583 8.07176 2.5 9.9976 2.5C11.9226 2.5 13.1393 4.65583 15.5709 8.9675L15.8743 9.505C17.8951 13.0883 18.9059 14.88 17.9926 16.19C17.0793 17.5 14.8193 17.5 10.3009 17.5H9.69427C5.17593 17.5 2.91593 17.5 2.0026 16.19C1.08926 14.88 2.1001 13.0883 4.12093 9.505L4.42426 8.9675ZM9.9976 6.04167C10.1634 6.04167 10.3223 6.10751 10.4395 6.22472C10.5568 6.34193 10.6226 6.50091 10.6226 6.66667V10.8333C10.6226 10.9991 10.5568 11.1581 10.4395 11.2753C10.3223 11.3925 10.1634 11.4583 9.9976 11.4583C9.83184 11.4583 9.67287 11.3925 9.55566 11.2753C9.43845 11.1581 9.3726 10.9991 9.3726 10.8333V6.66667C9.3726 6.50091 9.43845 6.34193 9.55566 6.22472C9.67287 6.10751 9.83184 6.04167 9.9976 6.04167ZM9.9976 14.1667C10.2186 14.1667 10.4306 14.0789 10.5869 13.9226C10.7431 13.7663 10.8309 13.5543 10.8309 13.3333C10.8309 13.1123 10.7431 12.9004 10.5869 12.7441C10.4306 12.5878 10.2186 12.5 9.9976 12.5C9.77658 12.5 9.56462 12.5878 9.40834 12.7441C9.25206 12.9004 9.16427 13.1123 9.16427 13.3333C9.16427 13.5543 9.25206 13.7663 9.40834 13.9226C9.56462 14.0789 9.77658 14.1667 9.9976 14.1667Z"
        fill={color}
      />
    </svg>
  );
}

export function RightArrow() {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 11.25C4.30109 11.25 4.11032 11.329 3.96967 11.4697C3.82902 11.6103 3.75 11.8011 3.75 12C3.75 12.1989 3.82902 12.3897 3.96967 12.5303C4.11032 12.671 4.30109 12.75 4.5 12.75V11.25ZM4.5 12.75H20.5V11.25H4.5V12.75Z"
        fill="#52B3D0"
      />
      <path
        d="M14.5 6L20.5 12L14.5 18"
        stroke="#52B3D0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}