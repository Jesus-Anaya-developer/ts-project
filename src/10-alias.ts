(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  //Literal types
  type Sizes = `S` | `M` | `L` | `XL`;
  let shirtSize: Sizes;

  shirtSize = "M";

  function yourSize(userSize: Sizes) {
    console.log(`Tu medida es ${userSize}`);
  }

})();
