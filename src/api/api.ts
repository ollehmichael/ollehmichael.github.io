import Axios, { CancelToken, Cancel } from "axios";

const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://emsdproject.work:52855"
    : "https://emsdproject.work:52855";
// : "http://localhost:3001";

export function Login(
  username: string,
  password: string,
  cancelToken?: CancelToken
) {
  return wrapper.POST_NO_AUTH(
    "/auth/signin",
    {
      username: username,
      password: password,
    },
    cancelToken
  );
}

export function getConsumedSparePartsData(cancelToken?: CancelToken) {
  return wrapper.GET("/spare-parts-stock/usageAll", cancelToken);
}

export function getEquipmentInfoData(cancelToken?: CancelToken) {
  return wrapper.GET("/equipment-info-record/infoSpecific", cancelToken);
}

export function getAllEquipmentInfoData(cancelToken?: CancelToken) {
  return wrapper.GET("/equipment-info-record/equipmentAll", cancelToken);
}

// export function getEquipmentInfo

export function getHealthRecordInfoData(cancelToken?: CancelToken) {
  return wrapper.GET("/equipment-info-record/healthAll", cancelToken);
}

export function getActivityLogs(cancelToken?: CancelToken) {
  return wrapper.GET("/activity-logging/getLog", cancelToken);
}

export function getVideoLogData(cancelToken?: CancelToken) {
  return wrapper.GET("/equipment-info-record/getVideos", cancelToken);
}

// Data hardcoded temporarily
// export function getSmartMaintenanceData(cancelToken?: CancelToken) {
//   return wrapper.GET("/maintenance-record/usageAll", cancelToken)
// }

const wrapper = {
  GET: async (url: string, cancelToken?: CancelToken) => {
    return await getRequest(url, cancelToken);
  },
  POST: async (url: string, postBody: any, cancelToken?: CancelToken) => {
    return await postRequest(url, postBody, cancelToken);
  },
  POST_NO_AUTH: async (
    url: string,
    postBody: any,
    cancelToken?: CancelToken
  ) => {
    return await postNoAuth(url, postBody, cancelToken);
  },
  //   FETCH_FILE: async (url: string, postBody: any, cancelToken?: CancelToken) => {
  //     return await postBlobRequest(url, postBody, cancelToken);
  //   },
  //   PUT: async (url: string, putBody: any, cancelToken?: CancelToken) => {
  //     return await putRequest(url, putBody, cancelToken);
  //   },
  //   DELETE: async (url: string, deleteBody?: any, cancelToken?: CancelToken) => {
  //     return await deleteRequest(url, deleteBody, cancelToken);
  //   },
};

function postNoAuth(url: string, postBody: any, cancelToken?: CancelToken) {
  return new Promise<any>((resolve, reject) => {
    Axios.post(`${SERVER_URL}${url}`, postBody, {
      cancelToken: cancelToken,
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getRequest(url: string, cancelToken?: CancelToken) {
  const jwt = Auth.getJWT();
  return new Promise<any>((resolve, reject) => {
    Axios.get(`${SERVER_URL}${url}`, {
      cancelToken: cancelToken,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function postRequest(url: string, postbody?: any, cancelToken?: CancelToken) {
  const jwt = Auth.getJWT();
  return new Promise<any>((resolve, reject) => {
    Axios.post(`${SERVER_URL}${url}`, {
      cancelToken: cancelToken,
      postbody,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

class Authencitator {
  private jwt: string | undefined;
  constructor() {
    this.jwt = undefined;
  }
  signIn(jwt: string) {
    this.jwt = jwt;
  }
  signOut() {
    this.jwt = undefined;
  }
  getJWT(): string | undefined {
    return this.jwt;
  }
}

export const Auth = new Authencitator();
