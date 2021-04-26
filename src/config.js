const dev = { 
  STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-12m0f7dftfatf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://u3dn3z1zme.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wPTsc1QHp",
    APP_CLIENT_ID: "7dphg6mlgskjbdakat53r7g22f",
    IDENTITY_POOL_ID: "us-east-1:131a5ea2-0692-46d2-859c-50c0e0bbd958"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-z1bnpx7zvql4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kp3jt1tk72.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xrKcmTjGL",
    APP_CLIENT_ID: "3hc2d4me8198le6im3lh65v54t",
    IDENTITY_POOL_ID: "us-east-1:feb6697c-6107-4c85-9f68-63e59473b5f0"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;