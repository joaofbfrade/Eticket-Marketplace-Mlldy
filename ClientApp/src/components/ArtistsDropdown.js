import React from "react";

import { useState } from 'react';
import Select from "react-select";


  const ArtistsDropdown = ({ options }) => {
  const [value, setValue] = React.useState({});

  return (
    <>
      <Select
        name="accounts"
        options={options}
        value={value}
        onChange={setValue}
        getOptionLabel={(option) => option.artistsname}
        getOptionValue={(option) => option.id}
      />
    </>
  )
}

export default ArtistsDropdown;