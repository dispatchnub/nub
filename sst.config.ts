/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nub",
      removalPolicy: input?.stage === "production" ? "retain" : "remove",
      providers: {
        aws: {
          region: "us-east-1",
        },
      },
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("Api");
    const site = new sst.aws.Nextjs("DispatchNub", {
      link: [api]
    });

    api.route("GET /", "src/api/index.handler");
    return {
      api: api.url,
    };
  },
});
