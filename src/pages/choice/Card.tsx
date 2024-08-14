import { useCallback, useMemo, useState, useEffect } from "react";
import { Select } from "antd";
import _ from "lodash";
import { getItem, setItem } from "@utils/storage";
import "./styles.css";

const initOps: string[] = [
  "烧鸭饭", "猪脚饭", "黄焖鸡", 
  "螺蛳粉", "小炒菜", "烧烤摊",
  "水果捞", "鸡公煲", "不吃",
];

export default function ChoiceCard() {
  const [options, setOptions] = useState<string[]>([]);
  const [ready, setReady] = useState(false)
  const start = useMemo(() => -Math.floor(options?.length / 2) || 0, [options]);

  const handleChange = useCallback((vals: string[]) => {
    setOptions(vals);
    setItem("card_options", JSON.stringify(vals));
  }, []);

  const handleLeave = useCallback(() => {
    setOptions(_.shuffle(options));
  }, [options]);

  useEffect(() => {
    const cardOptionsString = getItem("card_options");
    let list = !cardOptionsString ? [] : JSON.parse(cardOptionsString)
    setOptions(list?.length ? list : initOps);
    setReady(list?.length > 0)
  }, []);

  useEffect(() => {
    setReady(options.length > 0)
  }, [options])

  return (
    <div className="center card-body">
      {
        ready && (
          <Select
            mode="tags"
            maxCount={11}
            style={{ position: "absolute", top: 100, width: "50%" }}
            onChange={handleChange}
            options={options.map((v) => ({ value: v }))}
            defaultValue={options}
          />
        )
      }
      
      <div className="center card-container" onMouseLeave={handleLeave}>
        {options.map((e, i) => (
          <div key={i} className="center card-card" style={{ "--i": start + i } as any}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
