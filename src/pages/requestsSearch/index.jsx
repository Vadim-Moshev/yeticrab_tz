import React from "react";
import { observer, inject } from "mobx-react";

import "./index.scss";

const RequestsSearch = inject("RequestsStore")(
  observer(({ RequestsStore }) => {
    return <span>Поик</span>;
  })
);

export default RequestsSearch;
