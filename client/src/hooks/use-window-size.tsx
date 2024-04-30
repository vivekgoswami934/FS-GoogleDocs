import { useEffect, useState } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  const [widthStr, setWidthStr] = useState("");
  const [heightStr, setHeigthStr] = useState("");
  const [isMobileWidth, setIsMobileWidth] = useState(true);

  useEffect(() => {
    if (windowSize.height != undefined && windowSize.width != undefined) {
      setWidthStr(`${windowSize.width}px`);
      setHeigthStr(`${windowSize.width}px`);
      setIsMobileWidth(windowSize.width < 1024);
    }
  }, [windowSize]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...windowSize,
    widthStr,
    heightStr,
    isMobileWidth,
  };
};

export default useWindowSize;
