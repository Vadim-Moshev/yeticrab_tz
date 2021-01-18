import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import { formatDate, getATILink } from "../../helpers/usefulFunctions";

import "./index.scss";

const RequestItemViewer = inject("RequestsStore")(
  observer(({ RequestsStore, requestId }) => {
    const { getRequestById, fetchedRequest: req } = RequestsStore;

    useEffect(() => {
      getRequestById(requestId);
    }, [requestId, getRequestById]);

    const createLi = (caption, value) => {
      return (
        <li>
          <span>{`${caption}: `}</span>
          <span>{value}</span>
        </li>
      );
    };

    return (
      <>
        <Link to={`/editrequest/${req.id}`}>
          Редактировать / удалить заявку
        </Link>
        <ul className="request-item-data">
          {createLi("Номер заявки", req.number)}
          {createLi("Дата", formatDate(req.datetime))}
          {createLi("Фирма", req.clientFirmName)}
          {createLi("Перевозчик", req.carrierFullName)}
          {createLi("Телефон", req.phone)}
          {createLi("Комментарий", req.comment)}
          {createLi("ATI", getATILink(req.ATICode, "link"))}
        </ul>
      </>
    );
  })
);

export default RequestItemViewer;
