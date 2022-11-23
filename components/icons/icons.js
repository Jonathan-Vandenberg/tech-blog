export const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
    />
  </svg>
);

export const PasteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z"
      clipRule="evenodd"
    />
  </svg>
);

export const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    stroke-width="2"
    stroke="currentColor"
    class="w-25 h-25"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

export const security = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

export const BackgroundSVG = ({ width, height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
    <rect fill="#ffffff" width={width} height={height} />
    <defs>
      <rect stroke="#ffffff" stroke-width=".5" width="1" height="1" id="s" />
      <pattern
        id="a"
        width="3"
        height="3"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <use fill="#fcfcfc" href="#s" y="2" />
        <use fill="#fcfcfc" href="#s" x="1" y="2" />
        <use fill="#fafafa" href="#s" x="2" y="2" />
        <use fill="#fafafa" href="#s" />
        <use fill="#f7f7f7" href="#s" x="2" />
        <use fill="#f7f7f7" href="#s" x="1" y="1" />
      </pattern>
      <pattern
        id="b"
        width="7"
        height="11"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#f5f5f5">
          <use href="#s" />
          <use href="#s" y="5" />
          <use href="#s" x="1" y="10" />
          <use href="#s" x="2" y="1" />
          <use href="#s" x="2" y="4" />
          <use href="#s" x="3" y="8" />
          <use href="#s" x="4" y="3" />
          <use href="#s" x="4" y="7" />
          <use href="#s" x="5" y="2" />
          <use href="#s" x="5" y="6" />
          <use href="#s" x="6" y="9" />
        </g>
      </pattern>
      <pattern
        id="h"
        width="5"
        height="13"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#f5f5f5">
          <use href="#s" y="5" />
          <use href="#s" y="8" />
          <use href="#s" x="1" y="1" />
          <use href="#s" x="1" y="9" />
          <use href="#s" x="1" y="12" />
          <use href="#s" x="2" />
          <use href="#s" x="2" y="4" />
          <use href="#s" x="3" y="2" />
          <use href="#s" x="3" y="6" />
          <use href="#s" x="3" y="11" />
          <use href="#s" x="4" y="3" />
          <use href="#s" x="4" y="7" />
          <use href="#s" x="4" y="10" />
        </g>
      </pattern>
      <pattern
        id="c"
        width="17"
        height="13"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#f2f2f2">
          <use href="#s" y="11" />
          <use href="#s" x="2" y="9" />
          <use href="#s" x="5" y="12" />
          <use href="#s" x="9" y="4" />
          <use href="#s" x="12" y="1" />
          <use href="#s" x="16" y="6" />
        </g>
      </pattern>
      <pattern
        id="d"
        width="19"
        height="17"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#ffffff">
          <use href="#s" y="9" />
          <use href="#s" x="16" y="5" />
          <use href="#s" x="14" y="2" />
          <use href="#s" x="11" y="11" />
          <use href="#s" x="6" y="14" />
        </g>
        <g fill="#efefef">
          <use href="#s" x="3" y="13" />
          <use href="#s" x="9" y="7" />
          <use href="#s" x="13" y="10" />
          <use href="#s" x="15" y="4" />
          <use href="#s" x="18" y="1" />
        </g>
      </pattern>
      <pattern
        id="e"
        width="47"
        height="53"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#efefef">
          <use href="#s" x="2" y="5" />
          <use href="#s" x="16" y="38" />
          <use href="#s" x="46" y="42" />
          <use href="#s" x="29" y="20" />
        </g>
      </pattern>
      <pattern
        id="f"
        width="59"
        height="71"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#efefef">
          <use href="#s" x="33" y="13" />
          <use href="#s" x="27" y="54" />
          <use href="#s" x="55" y="55" />
        </g>
      </pattern>
      <pattern
        id="g"
        width="139"
        height="97"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(50) translate(-980 -735)"
      >
        <g fill="#efefef">
          <use href="#s" x="11" y="8" />
          <use href="#s" x="51" y="13" />
          <use href="#s" x="17" y="73" />
          <use href="#s" x="99" y="57" />
        </g>
      </pattern>
    </defs>
    <rect fill="url(#a)" width="100%" height="100%" />
    <rect fill="url(#b)" width="100%" height="100%" />
    <rect fill="url(#h)" width="100%" height="100%" />
    <rect fill="url(#c)" width="100%" height="100%" />
    <rect fill="url(#d)" width="100%" height="100%" />
    <rect fill="url(#e)" width="100%" height="100%" />
    <rect fill="url(#f)" width="100%" height="100%" />
    <rect fill="url(#g)" width="100%" height="100%" />
  </svg>
);
