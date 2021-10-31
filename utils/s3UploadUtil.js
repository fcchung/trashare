const AWS = require("aws-sdk");
const fs = require("fs");
require("dotenv").config();

let s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const uploadFileToS3 = (filename, fileKey) => {
  fs.readFile(filename, (err, data) => {
    let putObjectParams = {
      Body: data,
      Bucket: "trash-sharing-bucket",
      Key: fileKey,
      ContentType: "image/jpeg",
    };

    s3.putObject(putObjectParams, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  });
};

module.exports = uploadFileToS3;
