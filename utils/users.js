const whitelist = ["Fuywkinn","Sismalanka","Clexlia","Samomen","ElPatrons","notdoxed"];
const users = [];

// Join user to chat
function userJoin(id, username, room) {
  for (let name of whitelist ) {
    if (name === username) {
      const user = { id, username, room };
        users.push(user);
      return user;
    }
    else{
      console.log("User not whitelisted");
    }
  }
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
