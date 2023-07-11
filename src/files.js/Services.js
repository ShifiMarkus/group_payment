import axios from "axios";

const service = {
  getUsers: async () => {
    const users = await axios.get(`https://localhost:44320/api/users`);
    console.log(users);
    return users.data;
  },
  getUserById: async (id) => {
    const users = await axios.get(`https://localhost:44320/api/users/${id}`);
    console.log(users);
    return users.data;
  },
  addUser: async (obj) => {
    debugger;
    axios
      .post("https://localhost:44320/api/users", obj)
      .then(function (response) {
        console.log(response);
      });
  },
  deleteUser: async (id) => {
    try {
      let res = await axios.delete(`https://localhost:44320/api/users/${id}`);
      if (res.status < 200 || res.status > 299) {
        console.log("can't delete user");
      }
    } catch (error) {
      console.lor(error);
    }
  },
  updateUser: async (id, newUser) => {
    const users = await axios.put(
      `https://localhost:44320/api/users/${id}`,
      newUser
    );
    console.log(users);
  },

  getCashes: async () => {
    const cashes = await axios.get(`https://localhost:44320/api/Cashes`);
    console.log(cashes);
    return cashes.data;
  },
  getCashById: async (id) => {
    const cashes = await axios.get(`https://localhost:44320/api/Cashes/${id}`);
    console.log(cashes);
    return cashes.data;
  },
  addCash: async () => {
    axios
      .post("https://localhost:44320/api/Cashes", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      });
  },
  deleteCash: async (id) => {
    try {
      let res = await axios.delete(`https://localhost:44320/api/Cashes/${id}`);
      if (res.status < 200 || res.status > 299) {
        console.log("can't delete cash");
      }
    } catch (error) {
      console.lor(error);
    }
  },
  updateCash: async (id, newCash) => {
    const cashes = await axios.put(
      `https://localhost:44320/api/Cashes/${id}`,
      newCash
    );
    console.log(cashes);
  },

  getGroups: async () => {
    const groups = await axios.get(`https://localhost:44320/api/Groups`);
    console.log(groups);
    return groups.data;
  },
  getGroupById: async (id) => {
    const groups = await axios.get(`https://localhost:44320/api/Groups/${id}`);
    console.log(groups);
    return groups.data;
  },
  addGroup: async () => {
    axios
      .post("https://localhost:44320/api/Groups/", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      });
  },
  deleteGroup: async (id) => {
    try {
      let res = await axios.delete(`https://localhost:44320/api/Groups/${id}`);
      if (res.status < 200 || res.status > 299) {
        console.log("can't delete group");
      }
    } catch (error) {
      console.lor(error);
    }
  },
  updateGroup: async (id, newGroup) => {
    const groups = await axios.put(
      `https://localhost:44320/api/Groups/${id}`,
      newGroup
    );
    console.log(groups);
  },
  getPayments: async () => {
    const payments = await axios.get(`https://localhost:44320/api/Payments`);
    console.log(payments);
    return payments.data;
  },
  sendEmailSignUp: async () => {
    axios.post("https://localhost:44320/api/email/").then(alert("send email"));
    // `https://localhost:44344/api/email/${email}/${name}`
    // return res.data
  },
  getPaymentById: async (id) => {
    const payments = await axios.get(
      `https://localhost:44320/api/Payments/${id}`
    );
    console.log(payments);
    return payments.data;
  },
  addPayment: async () => {
    axios
      .post("https://localhost:44320/api/Payments/", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      });
  },
  deletePayment: async (id) => {
    try {
      let res = await axios.delete(
        `https://localhost:44320/api/Payments/${id}`
      );
      if (res.status < 200 || res.status > 299) {
        console.log("can't delete payment");
      }
    } catch (error) {
      console.lor(error);
    }
  },
  updatePayments: async (id, newPayment) => {
    const payments = await axios.put(
      `https://localhost:44320/api/Payments/${id}`,
      newPayment
    );
    console.log(payments);
  },

  getuserInGroup: async () => {
    const userInGroup = await axios.get(
      `https://localhost:44320/api/UsersInGroups`
    );
    console.log(userInGroup);
    return userInGroup.data;
  },
  getuserInGroupById: async (id) => {
    const userInGroup = await axios.get(
      `https://localhost:44320/api/UsersInGroups/${id}`
    );
    console.log(userInGroup);
    return userInGroup.data;
  },
  adduserInGroup: async () => {
    axios
      .post("https://localhost:44320/api/UsersInGroups/", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      });
  },
  deleteuserInGroup: async (id) => {
    try {
      let res = await axios.delete(
        `https://localhost:44320/api/UsersInGroups/${id}`
      );
      if (res.status < 200 || res.status > 299) {
        console.log("can't delete userInGroup");
      }
    } catch (error) {
      console.lor(error);
    }
  },
  updateuserInGroup: async (id, newUsersInGroups) => {
    const userInGroup = await axios.put(
      `https://localhost:44320/api/UsersInGroups/${id}`,
      newUsersInGroups
    );
    console.log(userInGroup);
  },
};

export default service;
