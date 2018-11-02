import React from "react";
import Select from "react-select";
import { industry } from "./keywords.js";

export default ({ input }) => (
  <Select
    defaultValue={[industry[0], industry[1]]}
    isMulti
    value={input ? input.value : null}
    onChange={input ? input.onChange : null}
    onBlur={() => input.onBlur(input.value)}
    name="tech stack tags"
    options={industry}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
