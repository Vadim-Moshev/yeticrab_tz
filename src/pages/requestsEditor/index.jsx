import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

import UniversalInput from "../../components/universalInput";

import "./index.scss";

const RequestsEditor = inject("RequestsStore")(
  observer(({ RequestsStore, requestId = "" }) => {
    const {
      getRequestById,
      fetchedRequest,
      newRequest,
      saveRequest,
      changeRequestData,
      reset,
      deleteRequestById,
    } = RequestsStore;

    useEffect(() => {
      return () => {
        reset();
      };
    }, [reset]);

    const isEdit = requestId !== "";
    const targetRequest = isEdit ? fetchedRequest : newRequest;
    const removeRequestButton = isEdit && (
      <button
        onClick={() => {
          deleteRequestById(requestId);
        }}
      >
        Удалить эту заявку
      </button>
    );

    const submitForm = (event) => {
      event.preventDefault();

      saveRequest(isEdit, requestId);
    };

    return (
      <>
        {removeRequestButton}
        <form onSubmit={submitForm} noValidate>
          <UniversalInput
            inputType="datetime-local"
            required
            labelText="Дата и время получения заявки от клиента"
            placeholder="Дата и время получения заявки от клиента"
            value={targetRequest.datetime}
            onChange={(e) => {
              changeRequestData(targetRequest, "datetime", e.target.value);
            }}
          />

          <UniversalInput
            autoFocus={true}
            required
            labelText="Название фирмы клиента"
            placeholder="Название фирмы клиента"
            value={targetRequest.clientFirmName}
            onChange={(e) => {
              changeRequestData(
                targetRequest,
                "clientFirmName",
                e.target.value
              );
            }}
          />

          <UniversalInput
            required
            labelText="ФИО перевозчика"
            placeholder="ФИО перевозчика"
            value={targetRequest.carrierFullName}
            onChange={(e) => {
              changeRequestData(
                targetRequest,
                "carrierFullName",
                e.target.value
              );
            }}
          />

          <UniversalInput
            required
            labelText="Телефон"
            placeholder="Телефон"
            value={targetRequest.phone}
            onChange={(e) => {
              changeRequestData(targetRequest, "phone", e.target.value);
            }}
          />

          <UniversalInput
            required
            labelText="ATI код сети перевозчика"
            placeholder="ATI код сети перевозчика"
            value={targetRequest.ATICode}
            onChange={(e) => {
              changeRequestData(targetRequest, "ATICode", e.target.value);
            }}
          />

          <UniversalInput
            required
            labelText="Комментарий"
            controlType="textarea"
            placeholder="Комментарий"
            value={targetRequest.comment}
            onChange={(e) => {
              changeRequestData(targetRequest, "comment", e.target.value);
            }}
          />

          <div>
            <input type="submit" value="Сохранить" />
          </div>
        </form>
      </>
    );
  })
);

export default RequestsEditor;
