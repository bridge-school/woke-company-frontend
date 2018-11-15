import React from "react";
import Select from "react-select";

export default ({ input, keywords }) => {
  return (
    <React.Fragment>
      <label
        htmlFor="tech-stack-tags"
        className="block text-grey-darker text-sm font-bold my-2"
      >
        Tech stack tags
      </label>
      <Select
        id="tech-tags"
        isMulti
        value={input ? input.value : null}
        onChange={input.onChange}
        onBlur={event => event.preventDefault()}
        name="tech stack tags"
        options={keywords.technical}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </React.Fragment>
  );
};
