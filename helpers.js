import axios from "axios";

const environment = {
   prod: "https://iq-value-server--refix-b422f5fe611a.herokuapp.com/",
  dev: "http://localhost:8080",
};

axios.defaults.baseURL = environment.prod;
//
const helpers = {};

helpers.login = async (data) => {
  try {
    const res = await axios.post("auth/login", data).then((v) => {
      console.log(v);
      return v;
    });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.logout = () => {
  localStorage.clear();
};

helpers.getUserDetailsFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
    // 👉️ can use localStorage here
  } else {
    // 👉️ can't use localStorage
  }
};

helpers.register = async (data) => {
  try {
    const res = await axios
      .post("users", data)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.getAllUsers = async () => {
  try {
    const res = await axios
      .get("users")
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.updateUser = async (data, query) => {
  console.log("helpers query: ", query);
  console.log("helpers data: ", data);

  try {
    const res = await axios
      .put(`users/${query}/edit`, data)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.deleteUser = async (email) => {
  try {
    const res = await axios
      .delete(`users/${email}/delete`)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.blockUser = async (email) => {
  try {
    const res = await axios
      .post(`users/${email}/block`)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.unblockUser = async (email) => {
  try {
    const res = await axios
      .post(`users/${email}/unblock`)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.getTransactions = async (_id) => {
  try {
    const res = await axios
      .get(`/transactions/${_id}`)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.forgotPassword = async (email) => {
  console.log("email from helpers.js", email);
  try {
    const res = await axios
      .post(`users/forgot-password`, { email: email })
      .then((v) => {
        return v;
      })
      .catch((error) => {
        // console.log("error gan gan", error);
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

export default helpers;
