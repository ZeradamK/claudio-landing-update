import { FC, useRef, useState, useEffect, MutableRefObject } from "react";
import "./InfiniteMenu.css";

// ... (rest of the provided InfiniteMenu code goes here, omitted for brevity) ...

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

interface InfiniteMenuProps {
  items?: MenuItem[];
}

const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [] }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(
    null
  ) as MutableRefObject<HTMLCanvasElement | null>;
  const [activeItem] = useState<MenuItem | null>(null);
  const [isMoving] = useState<boolean>(false);

  useEffect(() => {
    // InfiniteGridMenu class and logic would be here (omitted for brevity)
  }, [items]);

  const handleButtonClick = () => {
    if (!activeItem?.link) return;
    if (activeItem.link.startsWith("http")) {
      window.open(activeItem.link, "_blank");
    } else {
      console.log("Internal route:", activeItem.link);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas id="infinite-grid-menu-canvas" ref={canvasRef} />

      {activeItem && (
        <>
          <h2 className={`face-title ${isMoving ? "inactive" : "active"}`}>
            {activeItem.title}
          </h2>

          <p className={`face-description ${isMoving ? "inactive" : "active"}`}>
            {activeItem.description}
          </p>

          <div
            onClick={handleButtonClick}
            className={`action-button ${isMoving ? "inactive" : "active"}`}
          >
            <p className="action-button-icon">&#x2197;</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfiniteMenu; 