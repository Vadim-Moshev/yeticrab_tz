import { decorate, observable, action, set, runInAction, computed } from "mobx";
import routing from "./routing";

const DATA_STRUCTURE = {
  datetime: "",
  clientFirmName: "",
  carrierFullName: "",
  phone: "",
  comment: "",
  ATICode: "",
};

class RequestsStore {
  constructor() {
    this.reset();
  }

  reset = () => {
    this.fetchedRequest = { ...DATA_STRUCTURE };
    this.newRequest = { ...DATA_STRUCTURE };

    this.filterString = "";
  };

  requests = [
    {
      id: "y7bnt67njmt68",
      number: "36658578522584",
      datetime: "2020-11-26T02:54",
      clientFirmName: "ООО Арбуз",
      carrierFullName: "Портнова Анастасия Ивановна",
      phone: "8 (000) 557-45-00",
      comment: "Профессионалы",
      ATICode: "54321",
    },
    {
      id: "XCNR834NCRY87NC",
      number: "36658284284827",
      datetime: "2020-11-26T02:54",
      clientFirmName: "ООО лиана",
      carrierFullName: "Портнова Наталья Ивановна",
      phone: "8 (555) 557-45-00",
      comment: "круто",
      ATICode: "4577",
    },
  ];

  changeRequestData = (object, field, value) => {
    set(object, field, value);
  };

  setFilterString = (value = "") => {
    this.filterString = value;
  };

  getRequestById = (id) => {
    this.fetchedRequest = this.requests.find((request) => request.id === id);
  };

  saveRequest = (isEdit, requestId) => {
    const newRequestId = new Date().getTime().toString();
    const requests = this.requests;

    if (isEdit) {
      const requestToEditIndex = requests.findIndex(
        (request) => request.id === requestId
      );
      requests[requestToEditIndex] = this.fetchedRequest;
    } else {
      requests.push({
        ...this.newRequest,
        id: newRequestId,
        number: newRequestId,
      });
    }

    runInAction(() => {
      this.reset();
      routing.push("/");
    });
  };

  deleteRequestById = (requestId) => {
    const index = this.requests.findIndex(
      (request) => request.id === requestId
    );
    this.requests.splice(index, 1);

    runInAction(() => {
      routing.push("/");
    });
  };

  get requestsToDislay() {
    const filterString = this.filterString.toLowerCase();
    return this.requests.filter((request) =>
      request.clientFirmName.toLowerCase().includes(filterString)
    );
  }
}

decorate(RequestsStore, {
  requests: observable,
  fetchedRequest: observable,
  newRequest: observable,
  filterString: observable,

  requestsToDislay: computed,

  getRequestById: action,
  saveRequest: action,
  changeRequestData: action,
  reset: action,
  setFilterString: action,
  reset: action,
  deleteRequestById: action,
});

export default new RequestsStore();
