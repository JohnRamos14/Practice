import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { search } from "../services/gitHubService";
import "./styles.css";

const UserSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    search(query).then(onSearchSuccess).catch(onSearchError);
  };

  const onSearchSuccess = (response) => {
    console.log(response);
    let result = response.data.items;
    setOptions(result);
    setIsLoading(false);
  };

  const onSearchError = (response) => {
    console.error({ error: response });
  };

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      size="lg"
      filterBy={filterBy}
      id="sample"
      isLoading={isLoading}
      labelKey="login"
      minLength={3}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a Github user..."
      renderMenuItemChildren={(item) => (
        <>
          <div>
            <img
              alt={item.login}
              src={item.avatar_url}
              style={{
                height: "60px",
                marginRight: "10px",
                width: "60px",
              }}
            />
            <span>{item.login}</span>
          </div>
        </>
      )}
    />
  );
};

export default UserSearch;
