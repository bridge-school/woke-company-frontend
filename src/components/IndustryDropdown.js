import React from "react";
import Select from "react-select";
import { industry } from "./keywords.js";

export default ({ input }) => {
  return (
    <React.Fragment>
      <label
        htmlFor="industry-tags"
        className="block text-grey-darker text-sm font-bold mb-2">
        Industry tags
      </label>
      <Select
        defaultValue={[industry[0], industry[1]]}
        id="industry-tags"
        isMulti
        value={input ? input.value : null}
        onChange={input ? input.onChange : null}
        onBlur={() => input.onBlur(input.value)}
        name="tech stack tags"
        options={industry}
        className="basic-multi-select my-3"
        classNamePrefix="select"
      />
    </React.Fragment>
  )
}