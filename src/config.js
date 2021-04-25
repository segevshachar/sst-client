const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "note-app-upload-s3",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kp3jt1tk72.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CzFiLXcbY",
    APP_CLIENT_ID: "63838labhd038cupjnm425olnq",
    IDENTITY_POOL_ID: "us-east-1:8d3d8750-6189-4496-b460-f64597878996",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;