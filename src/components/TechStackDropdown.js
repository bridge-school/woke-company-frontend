import React from "react";
import Select from "react-select";
import { technical } from "./keywords.js";

export default ({ input }) => (
  <Select
    defaultValue={[technical[0], technical[1]]}
    isMulti
    value={input ? input.value : null}
    onChange={input ? input.onChange : null}
    onBlur={() => input.onBlur(input.value)}
    name="tech stack tags"
    options={technical}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
