/** 轮盘 */
import { useCallback, useRef, useState, useEffect } from "react";
import { Select } from "antd";
import { getItem, setItem } from "@utils/storage";
import "./styles.css";


const initOps = [
    "烧鸭饭","猪脚饭","黄焖鸡",
    "鸡公煲","螺蛳粉","小炒菜",
    "烧烤摊","不吃",
  ]

export default function Roulette() {
  const wheelRef = useRef<any>(null);
  const minRotate = 5 * 360;
  const [ready, setReady] = useState(false)
  const [options, setOptions] = useState<string[]>([]);

  // 开始滚动
  const handleClick = useCallback(() => {
    const random = Math.ceil(Math.random() * 3600);
    const val = Math.abs(minRotate + random);
    wheelRef.current.style.transform = `rotate(${val}deg)`;
  }, [minRotate]);

  // 添加标签
  const handleChange = useCallback((vals: string[]) => {
    setOptions(vals);
    setItem("roulette_options", JSON.stringify(vals));
  }, []);


  useEffect(() => {
    const rouletteOptionsString = getItem("roulette_options");
    let list = !rouletteOptionsString ? [] : JSON.parse(rouletteOptionsString)
    setOptions(list?.length ? list : initOps);
    setReady(list?.length > 0)
  }, []);

  useEffect(() => {
    setReady(options.length > 0)
  }, [options])

  return (
    <div className="roulette-body">
      <div className="roulette-spinBtn" onClick={handleClick}>
        开始
      </div>
      <div className="roulette-wheel" ref={wheelRef}>
        {options.map((e, i) => (
          <div key={i} className="roulette-share center" style={{ transform: `rotate(${45 * (i + 1)}deg)`}}>
            <span>{e}</span>
          </div>
        ))}
      </div>

        {
          ready && (
          <Select
            mode="tags"
            maxCount={8}
            style={{ position: "absolute", top: 100, width: "40%" }}
            placeholder="Tags Mode"
            onChange={handleChange}
            options={options.map((v) => ({ value: v }))}
            defaultValue={options}
          />
          )
        }
      
    </div>
  );
}
