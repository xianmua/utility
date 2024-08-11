import { useCallback, useMemo, useState } from "react";
import { Select } from "antd";
import _ from "lodash";
import "./styles.css";

export default function ChoiceCard() {
  const [options, setOptions] = useState([
    "烧鸭饭",
    "猪脚饭",
    "黄焖鸡",
    "鸡公煲",
    "螺蛳粉",
    "小炒菜",
    "烧烤摊",
    "水果捞",
    "不吃",
  ]);
  const start = useMemo(() => -Math.floor(options?.length / 2) || 0, [options]);

  const handleChange = useCallback((vals: string[]) => {
    setOptions(vals);
  }, []);

  const handleLeave = useCallback(() => {
    setOptions(_.shuffle(options));
  }, [options]);

  return (
    <div className="center card-body">
      <Select
        mode="tags"
        maxCount={11}
        style={{ position: "absolute", top: 100, width: "50%" }}
        onChange={handleChange}
        options={options.map((v) => ({ value: v }))}
        defaultValue={options}
      />
      <div className="center card-container" onMouseLeave={handleLeave}>
        {options.map((e, i) => (
          <div
            key={i}
            className="center card-card"
            style={{ "--i": start + i } as any}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
