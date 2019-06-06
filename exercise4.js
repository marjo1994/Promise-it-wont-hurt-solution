var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
  });
  
  const onReject = (error) => {
    console.log(error.message);
  }
  
  promise.then(console.log, onReject);