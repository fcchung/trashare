// Whole file by Fengrui Gan
const AWS = require("aws-sdk");
const fs = require("fs");
require("dotenv").config();

let s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const uploadFileToS3 = (filename, fileKey, mimeType) => {
  fs.readFile(filename, (err, data) => {
    let putObjectParams = {
      Body: data,
      Bucket: "trash-sharing-bucket",
      Key: fileKey,
      ContentType: mimeType,
    };

    s3.putObject(putObjectParams, () => {});
  });
};

module.exports = uploadFileToS3;
