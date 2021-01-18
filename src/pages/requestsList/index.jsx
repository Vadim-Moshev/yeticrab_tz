import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

import Table from "../../components/table";
import UniversalInput from "../../components/universalInput";

import "./index.scss";

const RequestsList = inject("RequestsStore")(
  observer(({ RequestsStore }) => {
    const { requests, setFilterString, requestsToDislay } = RequestsStore;

    useEffect(() => {
      return () => {
        setFilterString();
      };
    }, [setFilterString]);

    const filterRequests = (e) => {
      setFilterString(e.target.value);
    };

    return (
      <>
        <UniversalInput
          autoFocus
          inputType="search"
          onChange={filterRequests}
          labelText="Фильтрация по названию фирмы"
          placeholder="Фильтрация по названию фирмы"
        />
        <Table data={requestsToDislay} />
      </>
    );
  })
);

export default RequestsList;
