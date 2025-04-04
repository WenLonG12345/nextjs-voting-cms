import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn("size-8 w-8", className)}
    >
      <rect
        id="«r9»"
        width="512"
        height="512"
        x="0"
        y="0"
        rx="128"
        fill="url(#«ra»)"
        stroke="#FFFFFF"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      />
      <clipPath id="clip">
        <use xlinkHref="#«r9»" />
      </clipPath>
      <defs>
        <linearGradient
          id="«ra»"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(45)"
          style={{ transformOrigin: "center center" }}
        >
          <stop stopColor="#F5AF19" />
          <stop offset="1" stopColor="#F12711" />
        </linearGradient>
        <radialGradient
          id="«rb»"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256) rotate(90) scale(512)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <svg
        width="352"
        height="352"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        x="80"
        y="80"
        alignmentBaseline="middle"
        style={{ color: "rgb(255, 255, 255)" }}
      >
        <path
          d="M30.5 10C18.0736 10 8 20.0736 8 32.5C8 44.9264 18.0736 55 30.5 55C31.004 55 31.5042 54.9834 32 54.9508V55H56L64 63H31V62.996C30.8337 62.9987 30.667 63 30.5 63C13.6553 63 0 49.3447 0 32.5C0 15.6553 13.6553 2 30.5 2C47.3447 2 61 15.6553 61 32.5C61 37.7485 59.6743 42.6874 57.3395 47H47.7053C51.009 43.084 53 38.0245 53 32.5C53 20.0736 42.9264 10 30.5 10Z"
          fill="white"
        />
        <path
          d="M21.5 20C19.567 20 18 21.567 18 23.5V32.5C18 34.433 19.567 36 21.5 36C23.433 36 25 34.433 25 32.5V23.5C25 21.567 23.433 20 21.5 20Z"
          fill="white"
        />
        <path
          d="M34.5 20C32.567 20 31 21.567 31 23.5V32.5C31 34.433 32.567 36 34.5 36C36.433 36 38 34.433 38 32.5V23.5C38 21.567 36.433 20 34.5 20Z"
          fill="white"
        />
      </svg>
    </svg>
  );
};
