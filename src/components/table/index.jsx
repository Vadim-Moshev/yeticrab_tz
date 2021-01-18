import React from "react";
import { Link } from "react-router-dom";
import { formatDate, getATILink } from "../../helpers/usefulFunctions";

import "./index.scss";

const Table = ({ data = [] }) => {
  const header = (
    <div className="requests-table__header">
      <div className="requests-table__header-cell">Номер заявки</div>
      <div className="requests-table__header-cell">Дата</div>
      <div className="requests-table__header-cell">Фирма</div>
      <div className="requests-table__header-cell">Перевозчик</div>
      <div className="requests-table__header-cell">Телефон</div>
      <div className="requests-table__header-cell">ATI</div>
    </div>
  );

  const dataRow = data.map((item) => {
    return (
      <div className="requests-table__data" key={item.id}>
        <div className="requests-table__data-cell">
          <Link className="link" to={`showrequest/${item.id}`}>
            {item.number}
          </Link>
        </div>
        <div className="requests-table__data-cell">
          {formatDate(item.datetime)}
        </div>
        <div className="requests-table__data-cell">{item.clientFirmName}</div>
        <div className="requests-table__data-cell">{item.carrierFullName}</div>
        <div className="requests-table__data-cell">{item.phone}</div>
        <div className="requests-table__data-cell">
          {getATILink(item.ATICode, "link")}
        </div>
      </div>
    );
  });

  if (data.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <div className="requests-table">
      {header}
      {dataRow}
    </div>
  );
};

export default Table;
