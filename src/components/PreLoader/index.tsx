import React from "react";

interface WaviySpanProps extends React.HTMLProps<HTMLSpanElement> {
  style?: React.CSSProperties & { "--i"?: number };
}

const WaviySpan: React.FC<WaviySpanProps> = ({ children, style, ...rest }) => {
  return (
    <span style={style} {...rest}>
      {children}
    </span>
  );
};

const Preloader = () => {
  return (
    <div className="h-screen flex justify-center items-center preload">
      <h1 className="font-Inika text-black font-bold text uppercase text-xl">
        <div className="waviy flex justify-center items-center flex-wrap">
          <WaviySpan style={{ "--i": 1 }}>A</WaviySpan>
          <WaviySpan style={{ "--i": 2 }}>C</WaviySpan>
          <WaviySpan style={{ "--i": 3 }}>E</WaviySpan>
          <WaviySpan style={{ "--i": 4 }}></WaviySpan>
          <WaviySpan style={{ "--i": 5 }}>S</WaviySpan>
          <WaviySpan style={{ "--i": 6 }}>T</WaviySpan>
          <WaviySpan style={{ "--i": 7 }}>O</WaviySpan>
          <WaviySpan style={{ "--i": 8 }}>R</WaviySpan>
          <WaviySpan style={{ "--i": 9 }}>E</WaviySpan>
          <WaviySpan style={{ "--i": 10 }}>S</WaviySpan>
          <WaviySpan style={{ "--i": 11 }}>.</WaviySpan>
          <WaviySpan style={{ "--i": 12 }}>.</WaviySpan>
          <WaviySpan style={{ "--i": 13 }}>.</WaviySpan>
        </div>
      </h1>
    </div>
  );
};

export default Preloader;
