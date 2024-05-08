import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ChannelmanagerAssociationResponse } from '../models/ChannelmanagerAssociationResponse';
import { ChannelmanagerAssociationResponseAssociation } from '../models/ChannelmanagerAssociationResponseAssociation';
import { ChannelmanagerChannelResponse } from '../models/ChannelmanagerChannelResponse';
import { ChannelmanagerChannelResponseWithAssociations } from '../models/ChannelmanagerChannelResponseWithAssociations';
import { ChannelmanagerChannelResponseWithAssociationsAssociation } from '../models/ChannelmanagerChannelResponseWithAssociationsAssociation';
import { ChannelmanagerChannelSettings } from '../models/ChannelmanagerChannelSettings';
import { ChannelmanagerChannelStatus } from '../models/ChannelmanagerChannelStatus';
import { ChannelmanagerChannelTypeWebsite } from '../models/ChannelmanagerChannelTypeWebsite';
import { ChannelmanagerCountryCode } from '../models/ChannelmanagerCountryCode';
import { ChannelmanagerCreateAssociationRequest } from '../models/ChannelmanagerCreateAssociationRequest';
import { ChannelmanagerCreateChannelRequest } from '../models/ChannelmanagerCreateChannelRequest';
import { ChannelmanagerCreateMarketRequest } from '../models/ChannelmanagerCreateMarketRequest';
import { ChannelmanagerDeleteAssociationRequest } from '../models/ChannelmanagerDeleteAssociationRequest';
import { ChannelmanagerDeleteChannelRequest } from '../models/ChannelmanagerDeleteChannelRequest';
import { ChannelmanagerDeleteMarketRequest } from '../models/ChannelmanagerDeleteMarketRequest';
import { ChannelmanagerGetChannelRequest } from '../models/ChannelmanagerGetChannelRequest';
import { ChannelmanagerGetChannelWithAssociationsRequest } from '../models/ChannelmanagerGetChannelWithAssociationsRequest';
import { ChannelmanagerGetMarketRequest } from '../models/ChannelmanagerGetMarketRequest';
import { ChannelmanagerGetMarketWithAssociationsRequest } from '../models/ChannelmanagerGetMarketWithAssociationsRequest';
import { ChannelmanagerLanguageCode } from '../models/ChannelmanagerLanguageCode';
import { ChannelmanagerListChannelsRequest } from '../models/ChannelmanagerListChannelsRequest';
import { ChannelmanagerListChannelsResponse } from '../models/ChannelmanagerListChannelsResponse';
import { ChannelmanagerListChannelsWithAssociationsRequest } from '../models/ChannelmanagerListChannelsWithAssociationsRequest';
import { ChannelmanagerListChannelsWithAssociationsResponse } from '../models/ChannelmanagerListChannelsWithAssociationsResponse';
import { ChannelmanagerListMarketsRequest } from '../models/ChannelmanagerListMarketsRequest';
import { ChannelmanagerListMarketsResponse } from '../models/ChannelmanagerListMarketsResponse';
import { ChannelmanagerListMarketsWithAssociationsRequest } from '../models/ChannelmanagerListMarketsWithAssociationsRequest';
import { ChannelmanagerListMarketsWithAssociationsResponse } from '../models/ChannelmanagerListMarketsWithAssociationsResponse';
import { ChannelmanagerMarketResponse } from '../models/ChannelmanagerMarketResponse';
import { ChannelmanagerMarketResponseWithAssociations } from '../models/ChannelmanagerMarketResponseWithAssociations';
import { ChannelmanagerMarketResponseWithAssociationsAssociation } from '../models/ChannelmanagerMarketResponseWithAssociationsAssociation';
import { ChannelmanagerUpdateChannelRequest } from '../models/ChannelmanagerUpdateChannelRequest';
import { ChannelmanagerUpdateChannelRequestPayload } from '../models/ChannelmanagerUpdateChannelRequestPayload';
import { ChannelmanagerUpdateMarketRequest } from '../models/ChannelmanagerUpdateMarketRequest';
import { ChannelmanagerUpdateMarketRequestPayload } from '../models/ChannelmanagerUpdateMarketRequestPayload';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { ChannelManagerApiRequestFactory, ChannelManagerApiResponseProcessor} from "../apis/ChannelManagerApi";
export class ObservableChannelManagerApi {
    private requestFactory: ChannelManagerApiRequestFactory;
    private responseProcessor: ChannelManagerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChannelManagerApiRequestFactory,
        responseProcessor?: ChannelManagerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChannelManagerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChannelManagerApiResponseProcessor();
    }

    /**
     * Create a new association between a channel and a market or entities
     * CreateAssociation
     * @param body 
     */
    public channelManagerCreateAssociationWithHttpInfo(body: ChannelmanagerCreateAssociationRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerAssociationResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerCreateAssociation(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerCreateAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new association between a channel and a market or entities
     * CreateAssociation
     * @param body 
     */
    public channelManagerCreateAssociation(body: ChannelmanagerCreateAssociationRequest, _options?: Configuration): Observable<ChannelmanagerAssociationResponse> {
        return this.channelManagerCreateAssociationWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerAssociationResponse>) => apiResponse.data));
    }

    /**
     * Create a new channel
     * CreateChannel
     * @param body 
     */
    public channelManagerCreateChannelWithHttpInfo(body: ChannelmanagerCreateChannelRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerChannelResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerCreateChannel(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerCreateChannelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new channel
     * CreateChannel
     * @param body 
     */
    public channelManagerCreateChannel(body: ChannelmanagerCreateChannelRequest, _options?: Configuration): Observable<ChannelmanagerChannelResponse> {
        return this.channelManagerCreateChannelWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerChannelResponse>) => apiResponse.data));
    }

    /**
     * Create a new market
     * CreateMarket
     * @param body 
     */
    public channelManagerCreateMarketWithHttpInfo(body: ChannelmanagerCreateMarketRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerMarketResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerCreateMarket(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerCreateMarketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new market
     * CreateMarket
     * @param body 
     */
    public channelManagerCreateMarket(body: ChannelmanagerCreateMarketRequest, _options?: Configuration): Observable<ChannelmanagerMarketResponse> {
        return this.channelManagerCreateMarketWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerMarketResponse>) => apiResponse.data));
    }

    /**
     * Delete an existing association between a channel and a market or entities
     * DeleteAssociation
     * @param body 
     */
    public channelManagerDeleteAssociationWithHttpInfo(body: ChannelmanagerDeleteAssociationRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.channelManagerDeleteAssociation(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerDeleteAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing association between a channel and a market or entities
     * DeleteAssociation
     * @param body 
     */
    public channelManagerDeleteAssociation(body: ChannelmanagerDeleteAssociationRequest, _options?: Configuration): Observable<any> {
        return this.channelManagerDeleteAssociationWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Soft delete an existing channel
     * DeleteChannel
     * @param body 
     */
    public channelManagerDeleteChannelWithHttpInfo(body: ChannelmanagerDeleteChannelRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.channelManagerDeleteChannel(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerDeleteChannelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Soft delete an existing channel
     * DeleteChannel
     * @param body 
     */
    public channelManagerDeleteChannel(body: ChannelmanagerDeleteChannelRequest, _options?: Configuration): Observable<any> {
        return this.channelManagerDeleteChannelWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Soft delete an existing market
     * DeleteMarket
     * @param body 
     */
    public channelManagerDeleteMarketWithHttpInfo(body: ChannelmanagerDeleteMarketRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.channelManagerDeleteMarket(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerDeleteMarketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Soft delete an existing market
     * DeleteMarket
     * @param body 
     */
    public channelManagerDeleteMarket(body: ChannelmanagerDeleteMarketRequest, _options?: Configuration): Observable<any> {
        return this.channelManagerDeleteMarketWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get an existing channel
     * GetChannel
     * @param body 
     */
    public channelManagerGetChannelWithHttpInfo(body: ChannelmanagerGetChannelRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerChannelResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerGetChannel(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerGetChannelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an existing channel
     * GetChannel
     * @param body 
     */
    public channelManagerGetChannel(body: ChannelmanagerGetChannelRequest, _options?: Configuration): Observable<ChannelmanagerChannelResponse> {
        return this.channelManagerGetChannelWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerChannelResponse>) => apiResponse.data));
    }

    /**
     * Get an existing channel with associations
     * GetChannelWithAssociations
     * @param body 
     */
    public channelManagerGetChannelWithAssociationsWithHttpInfo(body: ChannelmanagerGetChannelWithAssociationsRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerChannelResponseWithAssociations>> {
        const requestContextPromise = this.requestFactory.channelManagerGetChannelWithAssociations(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerGetChannelWithAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an existing channel with associations
     * GetChannelWithAssociations
     * @param body 
     */
    public channelManagerGetChannelWithAssociations(body: ChannelmanagerGetChannelWithAssociationsRequest, _options?: Configuration): Observable<ChannelmanagerChannelResponseWithAssociations> {
        return this.channelManagerGetChannelWithAssociationsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerChannelResponseWithAssociations>) => apiResponse.data));
    }

    /**
     * Get an existing market
     * GetMarket
     * @param body 
     */
    public channelManagerGetMarketWithHttpInfo(body: ChannelmanagerGetMarketRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerMarketResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerGetMarket(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerGetMarketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an existing market
     * GetMarket
     * @param body 
     */
    public channelManagerGetMarket(body: ChannelmanagerGetMarketRequest, _options?: Configuration): Observable<ChannelmanagerMarketResponse> {
        return this.channelManagerGetMarketWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerMarketResponse>) => apiResponse.data));
    }

    /**
     * Get an existing market with associations
     * GetMarketWithAssociations
     * @param body 
     */
    public channelManagerGetMarketWithAssociationsWithHttpInfo(body: ChannelmanagerGetMarketWithAssociationsRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerMarketResponseWithAssociations>> {
        const requestContextPromise = this.requestFactory.channelManagerGetMarketWithAssociations(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerGetMarketWithAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an existing market with associations
     * GetMarketWithAssociations
     * @param body 
     */
    public channelManagerGetMarketWithAssociations(body: ChannelmanagerGetMarketWithAssociationsRequest, _options?: Configuration): Observable<ChannelmanagerMarketResponseWithAssociations> {
        return this.channelManagerGetMarketWithAssociationsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerMarketResponseWithAssociations>) => apiResponse.data));
    }

    /**
     * List all channels
     * ListChannels
     * @param body 
     */
    public channelManagerListChannelsWithHttpInfo(body: ChannelmanagerListChannelsRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerListChannelsResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerListChannels(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerListChannelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all channels
     * ListChannels
     * @param body 
     */
    public channelManagerListChannels(body: ChannelmanagerListChannelsRequest, _options?: Configuration): Observable<ChannelmanagerListChannelsResponse> {
        return this.channelManagerListChannelsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerListChannelsResponse>) => apiResponse.data));
    }

    /**
     * List all channels with associations
     * ListChannelsWithAssociations
     * @param body 
     */
    public channelManagerListChannelsWithAssociationsWithHttpInfo(body: ChannelmanagerListChannelsWithAssociationsRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerListChannelsWithAssociationsResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerListChannelsWithAssociations(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerListChannelsWithAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all channels with associations
     * ListChannelsWithAssociations
     * @param body 
     */
    public channelManagerListChannelsWithAssociations(body: ChannelmanagerListChannelsWithAssociationsRequest, _options?: Configuration): Observable<ChannelmanagerListChannelsWithAssociationsResponse> {
        return this.channelManagerListChannelsWithAssociationsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerListChannelsWithAssociationsResponse>) => apiResponse.data));
    }

    /**
     * List all markets
     * ListMarkets
     * @param body 
     */
    public channelManagerListMarketsWithHttpInfo(body: ChannelmanagerListMarketsRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerListMarketsResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerListMarkets(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerListMarketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all markets
     * ListMarkets
     * @param body 
     */
    public channelManagerListMarkets(body: ChannelmanagerListMarketsRequest, _options?: Configuration): Observable<ChannelmanagerListMarketsResponse> {
        return this.channelManagerListMarketsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerListMarketsResponse>) => apiResponse.data));
    }

    /**
     * List all markets with associations
     * ListMarketsWithAssociations
     * @param body 
     */
    public channelManagerListMarketsWithAssociationsWithHttpInfo(body: ChannelmanagerListMarketsWithAssociationsRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerListMarketsWithAssociationsResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerListMarketsWithAssociations(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerListMarketsWithAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all markets with associations
     * ListMarketsWithAssociations
     * @param body 
     */
    public channelManagerListMarketsWithAssociations(body: ChannelmanagerListMarketsWithAssociationsRequest, _options?: Configuration): Observable<ChannelmanagerListMarketsWithAssociationsResponse> {
        return this.channelManagerListMarketsWithAssociationsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerListMarketsWithAssociationsResponse>) => apiResponse.data));
    }

    /**
     * Update an existing channel
     * UpdateChannel
     * @param body 
     */
    public channelManagerUpdateChannelWithHttpInfo(body: ChannelmanagerUpdateChannelRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerChannelResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerUpdateChannel(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerUpdateChannelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing channel
     * UpdateChannel
     * @param body 
     */
    public channelManagerUpdateChannel(body: ChannelmanagerUpdateChannelRequest, _options?: Configuration): Observable<ChannelmanagerChannelResponse> {
        return this.channelManagerUpdateChannelWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerChannelResponse>) => apiResponse.data));
    }

    /**
     * Update an existing market
     * UpdateMarket
     * @param body 
     */
    public channelManagerUpdateMarketWithHttpInfo(body: ChannelmanagerUpdateMarketRequest, _options?: Configuration): Observable<HttpInfo<ChannelmanagerMarketResponse>> {
        const requestContextPromise = this.requestFactory.channelManagerUpdateMarket(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelManagerUpdateMarketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing market
     * UpdateMarket
     * @param body 
     */
    public channelManagerUpdateMarket(body: ChannelmanagerUpdateMarketRequest, _options?: Configuration): Observable<ChannelmanagerMarketResponse> {
        return this.channelManagerUpdateMarketWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelmanagerMarketResponse>) => apiResponse.data));
    }

}
