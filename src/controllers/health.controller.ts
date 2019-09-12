// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';

/**
 * OpenAPI response for ping()
 */
const HEALTH_RESPONSE: ResponseObject = {
  description: 'Health Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class HealthController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/health', {
    responses: {
      '200': HEALTH_RESPONSE,
    },
  })
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      health: 'ok',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }
}
