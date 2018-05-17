export default {
  env: 'development',
  MONGOOSE_DEBUG: true,
  jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
  jwtExpiresIn: '100 days',
  email: 'tenderwatch01@gmail.com',
  password: 'admin123#',
  db: 'mongodb://localhost:27017/tenderwatch',
  port: process.env.PORT || 4000,
  url: '0.0.0.0',
  cloudFrontAccessKey: 'APKAJQGNVMK3YNPOA4HQ',
  cloudFront_key: '-----BEGIN RSA PRIVATE KEY-----\n' +
  'MIIEowIBAAKCAQEAoRiayuc2FEatBNZZfBvOWKt1pdGQm7ntBeDQrAxtFXDa/3nz\n' +
  'gWmuKWmQeU7jWctR2nggQde0y9XVWA9sRuTwZc/65nulH2eJAE0Q8vSBfPzg1oiz\n' +
  'hxo0s1DZnlaE1QNTgyHgBuo0+1e7GvpAhKS2Dq5cPx3rHf5lIiXYJJZBh/krdqE8\n' +
  '94q+apMm6PWHFu/fu9VVWwZZXyRCx5a8Y3LCjrXWCeFqcMwwCcU13Jvq8tsoAujV\n' +
  '/72nnVxWWOO8hfLq9ahAdhvKzH3K9YOdRBIMj3+TzQEGkSH+wgYyQxgNx9W9LW1v\n' +
  'UIiDJM48utRFPzAOqSKsjB5eNjvPCrcCREZ5gwIDAQABAoIBACV0OAD2sp8SM4XN\n' +
  'ZC6ztEzvSEIOMCXUm2PjegCWPwJeI7yEGPY8oM5mCb36dmdZGyXFChLk2NcPVzPL\n' +
  'Gix9a9rv+PB/TMu5YaPdRxSFflmV3ZxjWgIOOLR8Fqx2hxmTVWZGiPRynXDWW90Q\n' +
  '09FDDkTpiu7twM1PaSoATHltKb0382tC2MJarkxnEMZuiKVhz4m6Kmgy1cz70FR3\n' +
  '3N4x1TV6eY8G17rqMuyeLRnSrcqURxyQLi1HPaFW5ixSBt3C3TNwbivp1tumu4Ib\n' +
  'VuqZQxtNIzqXPiYWwVX5x3ZIcsvUmH/K/K8uZRpS5HHAyf8qfPD/9k+htf1Pa0RG\n' +
  'lwYLcZECgYEA/lHj/Q66MAOJFqxmV2v15mwkdpvvjTP3cERUYmIY2RJpnyCOv8ek\n' +
  'PeyPb4YceU8uLFdRlc9ZGMmfyuiHuyMksWvF03h/qGcRoRDgRFO935i2S9UxsVoN\n' +
  'kDPet473Qs96+55ok1GPh7SQw0hpz3s2fambXk4fmD8kWUeZxX9ZIasCgYEAoikN\n' +
  'fetYIYvLUyFv3hDZ73CgUZOafEPhHF242Eg9lBRr0SNY+J9YZzRteblxn3xK4tLv\n' +
  'MU/wPqRZ`I99g3+ebWfFrcjXGshay7XqKf3+j3mRgXY/nPtBGW5/2KRDFfmcALNyI\n' +
  'FegsCUmQV4OzTCZSLJYAdDPynZdvfRe18EM/X4kCgYAvsClhLV7KXA9bug4ivHLK\n' +
  't2KK/yiHQMRYP+fW3vAr3CEEHrXFzmjE19P5pJs4QBm3ZNQ+lDfvxvb4tGunMqrR\n' +
  'vhTFV6YQbOtIWYLELTPAdsFQLPT5fZpnfOJ5ZwyEcaVtA0I2xad1We1/QNfeeQs5\n' +
  'uxEQOPQBt21YdG2oM/4BqwKBgAN+ZvADlg6C+Ip9+e8K5ecmwg1/5KAwxjTaQBVI\n' +
  '2SrLldcXr98Lb9gpZQJuYGhTQTnJ2aVyV3bCC7meInQwhURW0z3Oss07d/dt4HYG\n' +
  'xf0QpJLfetf7nMh0ldUkq1yh03sj9Tqjme9JSnbYO5C0cqjLQo8+X0fN73T+gcj/\n' +
  'aeohAoGBAJvQw+letmPsyJ8XUXRFPP17BK4PhVQ/KwvYsa2XU8Cjx/7q7zLW/+P/\n' +
  '/XH8c1i7t6BXGmhAIWZqWpeP9sp0GxZCB2frU1mG4NYk9Hu5HqJPodr1WrEIFVl7\n' +
  'bubisphA7bVI/W/DoWjXJzqy49nbwVDH30fBTP//FxesbkvV7Anm\n' +
  '-----END RSA PRIVATE KEY-----',
  cloudFront_url: 'https://d36psy598nh3cm.cloudfront.net',
  s3_url: 'https://s3.ap-south-1.amazonaws.com/tenderwatch',
  //googleAuthClient: '153589139177-l8sv2dg83p34nh4t07ebbvegv100p1fj.apps.googleusercontent.com',
  googleAuthClient: '153589139177-93tafh9qdejtgglpecn95e3u5i30rog5.apps.googleusercontent.com',
    googleAuthClientAndroid:'153589139177-5k2g5pv0088mgaoob6t3jp5pvm2oqori.apps.googleusercontent.com',
  apn: {
    key: './key_dev.pem',
    cert: './cert_dev.pem',
    production: false
  },
  firebaseServerKey:'AAAAI8KgRuk:APA91bE0H5Mbm4yeuRT6pOrKO7bbujaJ2g9yQghz31EptD5PxThIyMRnA3NIZAbhVRbqSdei-An-MHM_wcXWXLZoZaLyYuRCvkscYoReeGR96DVsSzSC7PfLHGrIPcjjocRvDBaRXmWK',
  supportId: '5981bc34b5fb605c7406d446',
    pesapalSandbox:{
        consumerKey: 'rjO83+33LUwtRsT8yZkTE+pfGdVU6ncW',
        consumerSecret: '5PlAfX6KCMbX5xsBg1lNO4+NE0o=',
        testing: true
    },
    pesapalconfig:{
        consumerKey: 'LkvAFJD5BOQdZvM+o8RlwN74j/pVEMJF',
        consumerSecret: '3pkDxRYW4M8m3Ofl9SsUzgoPmAQ=',
        testing: false
    }
};
