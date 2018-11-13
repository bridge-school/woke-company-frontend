import React from "react";
import Select from "react-select";
import { technical } from "./keywords.js";

export default ({ input }) => {
  return (
    <React.Fragment>
      <label
        htmlFor="tech-stack-tags"
        className="block text-grey-darker text-sm font-bold mb-2">
        Tech stack tags
      </label>
      <Select
        defaultValue={[technical[0], technical[1]]}
        id="tech-stack-tags"
        isMulti
        value={input ? input.value : null}
        onChange={input ? input.onChange : null}
        onBlur={() => input.onBlur(input.value)}
        name="tech stack tags"
        options={technical}
        className="basic-multi-select my-3"
        classNamePrefix="select"
      />
    </React.Fragment>
  )
}