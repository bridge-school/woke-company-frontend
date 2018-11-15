import React from "react";
import Select from "react-select";

export default ({ input, keywords }) => {
  return (
    <React.Fragment>
      <label
        htmlFor="industry-tags"
        className="block text-grey-darker text-sm font-bold my-2"
      >
        Industry tags
      </label>
      <Select
        id="industry-tags"
        isMulti
        value={input ? input.value : null}
        onChange={input.onChange}
        onBlur={event => event.preventDefault()}
        name="industry tags"
        options={keywords.industry}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </React.Fragment>
  );
};
