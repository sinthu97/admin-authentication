const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {



  ac.grant("clerk")
    .readOwn("profile")
    .updateOwn("profile")

  ac.grant("doctor")
    .readAny("profile")
    .updateAny("patiends")
    .updateAny("reports")
    .readOwn("appointments")
    .updateAny("tests")

  ac.grant("tecnician")
    .readOwn("profile")
    .updateOwn("profile")
    .updateAny("testReports")
    .readAny("patiends")
    .updateAny("patiends")

    ac.grant("receptionist")
      .readOwn("profile")
      .updateOwn("profile")
      .updateAny("profile")
      .updateAny("appointments")
      .deleteAny("appointments")

    ac.grant("admin")
      .extend("doctor")
      .extend("tecnician")
      .extend("clerk")
      .updateAny("profile")
      .deleteAny("profile")


  return ac;
})();
