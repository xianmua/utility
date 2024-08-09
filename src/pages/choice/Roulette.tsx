/** 轮盘 */
import { useCallback, useRef, useState } from "react";
import { Select } from "antd";
import "./styles.css";

export default function Roulette() {
  const wheelRef = useRef<any>(null);
  const minRotate = 5 * 360;

  const [options, setOptions] = useState<string[]>([
    "烧鸭饭",
    "猪脚饭",
    "黄焖鸡",
    "鸡公煲",
    "螺蛳粉",
    "小炒菜",
    "烧烤",
    "不吃",
  ]);

  // 开始滚动
  const handleClick = useCallback(() => {
    const random = Math.ceil(Math.random() * 3600);
    const val = Math.abs(minRotate + random);
    wheelRef.current.style.transform = `rotate(${val}deg)`;
  }, [minRotate]);

  // 添加标签
  const handleChange = useCallback((vals: string[]) => {
    setOptions(vals);
  }, []);

  return (
    <div className="roulette-body">
      <div className="roulette-spinBtn" onClick={handleClick}>
        开始
      </div>
      <div className="roulette-wheel" ref={wheelRef}>
        {options.map((e, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#db7093",
              transform: `rotate(${45 * (i + 1)}deg)`,
            }}
            className="roulette-share center"
          >
            <span>{e}</span>
          </div>
        ))}
      </div>

      <Select
        mode="tags"
        style={{ position: "absolute", top: 100, width: "40%" }}
        placeholder="Tags Mode"
        onChange={handleChange}
        options={options.map((v) => ({ value: v }))}
        defaultValue={options}
      />
    </div>
  );
}
