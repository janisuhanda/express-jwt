exports.allAccess = (req, res) => {
    res.status(200).send("Public response.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User response.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin response.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator response.");
  };