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
      {/* <Select
        {...input}
        value={input ? input.value : null}
        options={keywords}
        onChange={input.onChange}
        onBlur={event => event.preventDefault()}
      /> */}
      <Select
        // defaultValue={[keywords.technical[0], keywords.technical[1]]}
        isMulti
        value={input ? input.value : null}
        // onChange={input ? input.onChange : null}
        onChange={input.onChange}
        onBlur={event => event.preventDefault()}
        // onBlur={() => input.onBlur(input.value)}
        name="tech stack tags"
        options={keywords.technical}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </React.Fragment>
  );
};
